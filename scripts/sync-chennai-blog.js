const { MongoClient } = require('mongodb');
const fs = require('fs');
const matter = require('gray-matter');
require('dns').setServers(['8.8.8.8', '1.1.1.1']);

const uri = process.env.MONGODB_URI || "mongodb+srv://admin:DdGk%24Gg3yB8g-45@cluster0.lvnxfa7.mongodb.net/joydigital?appName=Cluster0";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db('joydigital');
    const slug = 'why-website-important-business-growth-chennai-2026';
    const doc = await db.collection('blogs').findOne({ slug });
    console.log('Doc exists in DB:', !!doc);
    if (doc) {
      const file = fs.readFileSync('content/blog/' + slug + '.md', 'utf8');
      const { content } = matter(file);
      await db.collection('blogs').updateOne(
        { slug },
        { $set: { content: content, updatedAt: new Date() } }
      );
      console.log('Successfully synced blog in MongoDB Atlas!');
    }
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

run();
