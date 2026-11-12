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
    slug: 'school-website-development-seo',
    sourceJpg: 'C:/Users/SARAVANAN/.gemini/antigravity/brain/624a582a-7fea-45e9-9c3d-9ce74a4b00ff/school_website_seo_hero_1794451401009.jpg',
    localFilename: 'school-website-development-seo.webp',
    publicId: 'school-website-development-seo-v1'
  },
  {
    slug: 'pest-control-website-design-seo',
    sourceJpg: 'C:/Users/SARAVANAN/.gemini/antigravity/brain/624a582a-7fea-45e9-9c3d-9ce74a4b00ff/pest_control_website_seo_hero_1794451407298.jpg',
    localFilename: 'pest-control-website-design-seo.webp',
    publicId: 'pest-control-website-design-seo-v1'
  },
  {
    slug: 'construction-company-website-development-seo',
    sourceJpg: 'C:/Users/SARAVANAN/.gemini/antigravity/brain/624a582a-7fea-45e9-9c3d-9ce74a4b00ff/construction_website_seo_hero_1794451412651.jpg',
    localFilename: 'construction-company-website-development-seo.webp',
    publicId: 'construction-company-website-development-seo-v1'
  },
  {
    slug: 'export-import-website-development-seo',
    sourceJpg: 'C:/Users/SARAVANAN/.gemini/antigravity/brain/624a582a-7fea-45e9-9c3d-9ce74a4b00ff/export_import_b2b_portal_hero_1794451420972.jpg',
    localFilename: 'export-import-website-development-seo.webp',
    publicId: 'export-import-website-development-seo-v1'
  }
];

async function main() {
  const blogDir = path.join(process.cwd(), 'public', 'assets', 'images', 'blog');
  if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true });
  }

  const uploadedUrls = {};

  console.log("=== Step 1: Processing, resizing and converting images to WebP ===");
  for (const item of blogItems) {
    if (!fs.existsSync(item.sourceJpg)) {
      console.error("Source image not found:", item.sourceJpg);
      continue;
    }

    const inputBuffer = fs.readFileSync(item.sourceJpg);
    const targetW = 1440;
    const targetH = 810; // exact 16:9

    // High quality direct resize with slight sharpening for crisp text & UI elements
    const webpBuffer = await sharp(inputBuffer)
      .resize(targetW, targetH, { fit: 'cover', position: 'center' })
      .webp({ quality: 90 })
      .toBuffer();

    const localOutPath = path.join(blogDir, item.localFilename);
    fs.writeFileSync(localOutPath, webpBuffer);
    console.log(`✅ Saved local WebP: ${localOutPath}`);

    console.log(`Uploading ${item.localFilename} to Cloudinary...`);
    try {
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
        ).end(webpBuffer);
      });

      console.log(`🚀 Uploaded to Cloudinary: ${uploadRes.secure_url}`);
      uploadedUrls[item.slug] = uploadRes.secure_url;
    } catch (err) {
      console.error(`Cloudinary upload failed for ${item.slug}, using local path fallback:`, err.message);
      uploadedUrls[item.slug] = `/assets/images/blog/${item.localFilename}`;
    }
  }

  // Save uploaded URLs map for markdown generation
  fs.writeFileSync(
    path.join(__dirname, 'uploaded_urls.json'),
    JSON.stringify(uploadedUrls, null, 2),
    'utf-8'
  );
  console.log("Saved uploaded_urls.json");
}

main().catch(console.error);
