const { MongoClient } = require('mongodb');

// The password 'DdGk$Gg3yB8g-45' needs to be URL encoded since it contains '$'.
// URL encoded '$' is '%24'.
const uri = "mongodb+srv://admin:DdGk%24Gg3yB8g-45@cluster0.lvnxfa7.mongodb.net/joydigital?appName=Cluster0";
const client = new MongoClient(uri);

async function run() {
  try {
    console.log("Connecting to MongoDB...");
    await client.connect();
    console.log("Connected successfully to MongoDB!");
    
    const db = client.db("joydigital");
    const collections = await db.listCollections().toArray();
    console.log("Collections in 'joydigital' db:");
    collections.forEach(c => console.log(` - ${c.name}`));
    
    // Check if enquiries has data
    const leads = await db.collection("enquiries").countDocuments();
    console.log(`Number of leads in 'enquiries' collection: ${leads}`);
    
  } catch (e) {
    console.error("Connection failed:", e);
  } finally {
    await client.close();
  }
}
run();
