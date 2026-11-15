const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const cloudinary = require('cloudinary').v2;
const { MongoClient } = require('mongodb');
const matter = require('gray-matter');

cloudinary.config({
  cloud_name: 'hkfw0tt7',
  api_key: '621912895596784',
  api_secret: 'Rot0fI-eDy70eLseXcC1_d70RgQ'
});

const mongoUri = "mongodb+srv://admin:DdGk%24Gg3yB8g-45@cluster0.lvnxfa7.mongodb.net/joydigital?appName=Cluster0";

const blogItems = [
  {
    slug: '5-website-mistakes-killing-business-growth',
    filename: '5-website-mistakes-killing-business-growth.webp',
    publicId: '5-website-mistakes-killing-business-growth-v2'
  },
  {
    slug: 'is-a-slow-website-costing-you-sales-web-speed-revenue',
    filename: 'is-slow-website-costing-you-sales.webp',
    publicId: 'is-slow-website-costing-you-sales-v2'
  },
  {
    slug: 'outgrown-wix-or-wordpress-custom-web-architecture',
    filename: 'outgrown-wix-or-wordpress-custom-architecture.webp',
    publicId: 'outgrown-wix-or-wordpress-custom-architecture-v2'
  },
  {
    slug: 'how-to-attract-international-clients-global-seo-strategy',
    filename: 'global-seo-international-clients-strategy.webp',
    publicId: 'global-seo-international-clients-strategy-v2'
  }
];

async function processAndUpload() {
  const blogDir = path.join(process.cwd(), 'public', 'assets', 'images', 'blog');
  const uploadedUrls = {};

  console.log("Step 1: Adding safe framing padding to images so UI elements never get cut off...");

  for (const item of blogItems) {
    const inputPath = path.join(blogDir, item.filename);
    const outputPath = path.join(blogDir, 'framed-' + item.filename);

    if (!fs.existsSync(inputPath)) {
      console.error("File not found:", inputPath);
      continue;
    }

    const inputBuffer = fs.readFileSync(inputPath);

    // Read metadata
    const targetW = 1440;
    const targetH = 810; // exact 16:9

    // Scale main image to fit safely with ~8% margin
    const innerW = Math.round(targetW * 0.90);
    const innerH = Math.round(targetH * 0.90);

    const resizedBuffer = await sharp(inputBuffer)
      .resize(innerW, innerH, { fit: 'inside' })
      .toBuffer();

    // Composite onto dark canvas matching Joy Digital theme #0b0f19
    const framedBuffer = await sharp({
      create: {
        width: targetW,
        height: targetH,
        channels: 4,
        background: { r: 11, g: 15, b: 25, alpha: 1 }
      }
    })
    .composite([
      {
        input: resizedBuffer,
        gravity: 'center'
      }
    ])
    .webp({ quality: 90 })
    .toBuffer();

    // Overwrite the local file with the framed buffer
    fs.writeFileSync(inputPath, framedBuffer);

    console.log(`✅ Framed & padded: ${item.filename}`);

    // Step 2: Upload to Cloudinary
    console.log(`Uploading ${item.filename} to Cloudinary...`);
    const uploadRes = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder: 'joydigital/blog',
          public_id: item.publicId,
          overwrite: true,
          resource_type: 'image',
          format: 'webp'
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      ).end(framedBuffer);
    });

    console.log(`🚀 Uploaded to Cloudinary: ${uploadRes.secure_url}`);
    uploadedUrls[item.slug] = uploadRes.secure_url;
  }

  // Step 3: Update local Markdown files with Cloudinary URL
  console.log("\nStep 3: Updating local markdown files with secure Cloudinary URLs...");
  for (const item of blogItems) {
    const mdPath = path.join(process.cwd(), 'content', 'blog', `${item.slug}.md`);
    if (!fs.existsSync(mdPath)) continue;

    let content = fs.readFileSync(mdPath, 'utf-8');
    const cloudUrl = uploadedUrls[item.slug];
    if (cloudUrl) {
      // replace image, ogImage, twitterImage
      content = content.replace(/^image:\s*.*$/m, `image: "${cloudUrl}"`);
      content = content.replace(/^ogImage:\s*.*$/m, `ogImage: "${cloudUrl}"`);
      content = content.replace(/^twitterImage:\s*.*$/m, `twitterImage: "${cloudUrl}"`);
      fs.writeFileSync(mdPath, content, 'utf-8');
      console.log(`Updated markdown: ${item.slug}.md`);
    }
  }

  // Step 4: Update live MongoDB Atlas database
  console.log("\nStep 4: Updating live MongoDB Atlas database with new image URLs...");
  const client = new MongoClient(mongoUri);
  try {
    await client.connect();
    const db = client.db('joydigital');
    const blogsCol = db.collection('blogs');

    for (const item of blogItems) {
      const cloudUrl = uploadedUrls[item.slug];
      if (!cloudUrl) continue;

      await blogsCol.updateOne(
        { slug: item.slug },
        {
          $set: {
            image: cloudUrl,
            ogImage: cloudUrl,
            twitterImage: cloudUrl,
            updatedAt: new Date()
          }
        }
      );
      console.log(`✅ Live MongoDB updated for slug: ${item.slug} -> ${cloudUrl}`);
    }
  } catch (err) {
    console.error("MongoDB update error:", err);
  } finally {
    try { await client.close(); } catch (_) {}
  }

  console.log("\n🎉 ALL 4 BLOG IMAGES PROCESSED, FRAMED, UPLOADED TO CLOUDINARY AND UPDATED IN MONGODB!");
}

processAndUpload().catch(console.error);
