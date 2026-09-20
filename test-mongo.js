const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://joydiigtals_db_user:T-eVHTwhKaK5p.%23@cluster0.wjrprzj.mongodb.net/joydigital?appName=Cluster0";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("joydigital");
    const enquiries = await db.collection("enquiries").find({}).toArray();
    console.log(JSON.stringify(enquiries, null, 2));
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
