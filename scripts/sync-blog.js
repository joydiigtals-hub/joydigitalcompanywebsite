const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const dns = require('dns');

if (process.platform === 'win32') {
  try {
    dns.setServers(['8.8.8.8', '1.1.1.1']);
  } catch (e) {
    console.warn('DNS server setting warning:', e.message);
  }
}

const slugsToSync = [
  'tourism-business-plan',
  'increase-profit-tourism-business',
  'digital-marketing-tourism-africa',
  'commercial-solar-epc-business-plan',
  'maximize-solar-profit-margins',
  'digital-marketing-for-solar-companies',
  'why-tourism-business-needs-website',
  'essential-tourism-website-features'
];

const uri = process.env.MONGODB_URI || "mongodb+srv://admin:DdGk%24Gg3yB8g-45@cluster0.lvnxfa7.mongodb.net/joydigital?appName=Cluster0";
const client = new MongoClient(uri, { serverSelectionTimeoutMS: 5000 });

async function syncToMongo() {
  try {
    console.log('Attempting MongoDB connection...');
    await client.connect();
    const db = client.db('joydigital');
    const blogsCol = db.collection('blogs');

    for (const slug of slugsToSync) {
      const filePath = path.join(__dirname, '..', 'content', 'blog', `${slug}.md`);
      if (!fs.existsSync(filePath)) continue;

      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);

      const blogDoc = {
        slug: slug,
        ...data,
        content: content,
        updatedAt: new Date()
      };

      await blogsCol.updateOne(
        { slug: slug },
        { $set: blogDoc },
        { upsert: true }
      );
      console.log(`Successfully upserted ${slug} into MongoDB!`);
    }
  } catch (err) {
    console.log('MongoDB sync status (local markdown fallback is active):', err.message);
  } finally {
    try { await client.close(); } catch(_) {}
  }
}

syncToMongo();
