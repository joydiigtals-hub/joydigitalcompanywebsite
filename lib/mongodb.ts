import { MongoClient, Db } from "mongodb";
import dns from "dns";

// On Windows local development, ISP DNS often fails to resolve MongoDB SRV records.
// IMPORTANT: Only set custom DNS on Windows. NEVER override DNS on Linux/Docker/Render cloud environments
// because cloud security groups/VPCs block external port 53 and require native container DNS.
if (process.platform === "win32") {
  try {
    dns.setServers(["8.8.8.8", "1.1.1.1"]);
  } catch {
    // Ignore in restricted environments
  }
}

if (!process.env.MONGODB_URI && !process.env.MONGODB_DIRECT_URI) {
  console.warn("WARNING: MONGODB_URI environment variable is not defined.");
}

const rawUri = process.env.MONGODB_DIRECT_URI || process.env.MONGODB_URI || "";

// Direct seedlist fallback generator for cluster0.lvnxfa7.mongodb.net
function getDirectFallbackUri(srvUri: string): string | null {
  if (!srvUri || !srvUri.startsWith("mongodb+srv://")) return null;
  if (!srvUri.includes("cluster0.lvnxfa7.mongodb.net")) return null;

  try {
    const withoutPrefix = srvUri.replace("mongodb+srv://", "");
    const [authPart, rest] = withoutPrefix.split("@");
    if (!authPart || !rest) return null;

    const pathPart = rest.split("/")[1] || "joydigital";
    const dbName = pathPart.split("?")[0] || "joydigital";

    return `mongodb://${authPart}@ac-jr7hkva-shard-00-00.lvnxfa7.mongodb.net:27017,ac-jr7hkva-shard-00-01.lvnxfa7.mongodb.net:27017,ac-jr7hkva-shard-00-02.lvnxfa7.mongodb.net:27017/${dbName}?ssl=true&replicaSet=atlas-jy8dhk-shard-0&authSource=admin&appName=Cluster0`;
  } catch {
    return null;
  }
}

const options = {
  serverSelectionTimeoutMS: 15000,
  connectTimeoutMS: 15000,
  maxPoolSize: 10,
};

let cachedClient: MongoClient | null = null;
let cachedPromise: Promise<MongoClient> | null = null;

async function createClientConnection(): Promise<MongoClient> {
  if (!rawUri) {
    throw new Error("MONGODB_URI is not defined. Please add it to your environment variables.");
  }

  // 1. First attempt with configured URI
  try {
    const client = new MongoClient(rawUri, options);
    const connectedClient = await client.connect();
    cachedClient = connectedClient;
    return connectedClient;
  } catch (err: any) {
    console.warn("Primary MongoDB connection failed:", err?.message || err);

    // 2. If it was an SRV URI that failed (e.g. DNS failure in cloud or timeout), attempt direct seedlist fallback
    const fallbackUri = getDirectFallbackUri(rawUri);
    if (fallbackUri && fallbackUri !== rawUri) {
      try {
        console.log("Attempting direct seedlist MongoDB connection fallback...");
        const fallbackClient = new MongoClient(fallbackUri, options);
        const connectedClient = await fallbackClient.connect();
        console.log("Direct seedlist MongoDB connection succeeded!");
        cachedClient = connectedClient;
        return connectedClient;
      } catch (fallbackErr: any) {
        console.error("Direct seedlist MongoDB fallback also failed:", fallbackErr?.message || fallbackErr);
      }
    }

    throw err;
  }
}

export async function getMongoClient(): Promise<MongoClient> {
  if (cachedClient) {
    return cachedClient;
  }

  if (!cachedPromise) {
    cachedPromise = createClientConnection().catch((err) => {
      // Clear cachedPromise on failure so the next request can retry rather than being permanently broken
      cachedPromise = null;
      cachedClient = null;
      throw err;
    });
  }

  return cachedPromise;
}

export async function getDb(dbName = "joydigital"): Promise<Db> {
  const client = await getMongoClient();
  return client.db(dbName);
}

// Backward-compatible clientPromise export
const clientPromise: Promise<MongoClient> = {
  then(onfulfilled, onrejected) {
    return getMongoClient().then(onfulfilled, onrejected);
  },
  catch(onrejected) {
    return getMongoClient().catch(onrejected);
  },
  finally(onfinally) {
    return getMongoClient().finally(onfinally);
  },
  [Symbol.toStringTag]: "Promise",
} as Promise<MongoClient>;

export default clientPromise;
