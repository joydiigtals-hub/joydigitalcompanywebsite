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
    slug: 'textile-exporters-website-uk-us-buyers-2026',
    sourceJpg: 'C:/Users/SARAVANAN/.gemini/antigravity/brain/aa220758-7489-47ae-b6aa-3917f5a6e8ed/tiruppur_textile_exporters_uk_us_buyers_1794148927726.jpg',
    localFilename: 'tiruppur-textile-exporters-uk-us-buyers.webp',
    publicId: 'tiruppur-textile-exporters-uk-us-buyers-v1'
  },
  {
    slug: 'how-global-buyers-find-textile-suppliers-india',
    sourceJpg: 'C:/Users/SARAVANAN/.gemini/antigravity/brain/aa220758-7489-47ae-b6aa-3917f5a6e8ed/how_global_buyers_find_textile_suppliers_1794148949888.jpg',
    localFilename: 'how-global-buyers-find-textile-suppliers.webp',
    publicId: 'how-global-buyers-find-textile-suppliers-v1'
  }
];

async function main() {
  const blogDir = path.join(process.cwd(), 'public', 'assets', 'images', 'blog');
  if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true });
  }

  const uploadedUrls = {};

  console.log("=== Step 1: Processing, framing and converting images to WebP ===");
  for (const item of blogItems) {
    if (!fs.existsSync(item.sourceJpg)) {
      console.error("Source image not found:", item.sourceJpg);
      continue;
    }

    const inputBuffer = fs.readFileSync(item.sourceJpg);
    const targetW = 1440;
    const targetH = 810; // exact 16:9

    const innerW = Math.round(targetW * 0.90);
    const innerH = Math.round(targetH * 0.90);

    const resizedBuffer = await sharp(inputBuffer)
      .resize(innerW, innerH, { fit: 'inside' })
      .toBuffer();

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

    const localOutPath = path.join(blogDir, item.localFilename);
    fs.writeFileSync(localOutPath, framedBuffer);
    console.log(`✅ Saved local framed WebP: ${localOutPath}`);

    console.log(`Uploading ${item.localFilename} to Cloudinary...`);
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

  console.log("\n=== Step 2: Updating Markdown frontmatter with Cloudinary URLs ===");
  for (const item of blogItems) {
    const mdPath = path.join(process.cwd(), 'content', 'blog', `${item.slug}.md`);
    if (!fs.existsSync(mdPath)) continue;

    let content = fs.readFileSync(mdPath, 'utf-8');
    const cloudUrl = uploadedUrls[item.slug] || `/assets/images/blog/${item.localFilename}`;

    content = content.replace(/^image:\s*.*$/m, `image: "${cloudUrl}"`);
    content = content.replace(/^ogImage:\s*.*$/m, `ogImage: "${cloudUrl}"`);
    content = content.replace(/^twitterImage:\s*.*$/m, `twitterImage: "${cloudUrl}"`);

    fs.writeFileSync(mdPath, content, 'utf-8');
    console.log(`Updated markdown URLs for: ${item.slug}.md`);
  }

  console.log("\n=== Step 3: Upserting full blogs to MongoDB Atlas ===");
  const client = new MongoClient(mongoUri);
  try {
    await client.connect();
    const db = client.db('joydigital');
    const blogsCol = db.collection('blogs');

    for (const item of blogItems) {
      const mdPath = path.join(process.cwd(), 'content', 'blog', `${item.slug}.md`);
      const fileContent = fs.readFileSync(mdPath, 'utf-8');
      const { data, content } = matter(fileContent);

      const doc = {
        slug: item.slug,
        title: data.title,
        description: data.description,
        date: data.date,
        lastUpdatedDate: data.lastUpdatedDate || data.date,
        category: data.category || 'B2B Export & Web Development',
        author: data.author || 'Saravanan L',
        image: data.image,
        imageAlt: data.imageAlt || data.title,
        imageCaption: data.imageCaption || '',
        tags: data.tags || [],
        showTableOfContents: data.showTableOfContents !== false,
        showAuthorInfo: data.showAuthorInfo !== false,
        showFeaturedImage: data.showFeaturedImage !== false,
        seoTitle: data.seoTitle || data.title,
        metaDescription: data.metaDescription || data.description,
        focusKeyword: data.focusKeyword || '',
        secondaryKeywords: data.secondaryKeywords || '',
        canonicalUrl: data.canonicalUrl || `https://www.joydigital.in/blog/${item.slug}`,
        robots: data.robots || 'Index, Follow',
        internalLinks: data.internalLinks || [],
        autoSuggestRelated: data.autoSuggestRelated !== false,
        manualRelatedSlugs: data.manualRelatedSlugs || [],
        authorName: data.authorName || 'Saravanan L',
        authorRole: data.authorRole || 'Technical Web & SEO Specialist',
        authorBio: data.authorBio || 'Technical web architect and international SEO strategist helping manufacturing and export brands across Tamil Nadu scale inbound global RFQs.',
        authorImage: data.authorImage || '/assets/images/logo.webp',
        authorProfileUrl: data.authorProfileUrl || 'https://www.joydigital.in/author/saravanan',
        faqs: data.faqs || [],
        ogTitle: data.ogTitle || data.title,
        ogDescription: data.ogDescription || data.description,
        ogImage: data.ogImage || data.image,
        twitterTitle: data.twitterTitle || data.title,
        twitterDescription: data.twitterDescription || data.description,
        twitterImage: data.twitterImage || data.image,
        status: data.status || 'Published',
        scheduledPublishDate: '',
        seoScore: data.seoScore || 98,
        content: content,
        isDeleted: false,
        updatedAt: new Date()
      };

      await blogsCol.updateOne(
        { slug: item.slug },
        { $set: doc },
        { upsert: true }
      );
      console.log(`✅ Live MongoDB successfully updated/published: ${item.slug}`);
    }
  } catch (err) {
    console.error("MongoDB Atlas error:", err.message);
  } finally {
    try { await client.close(); } catch (_) {}
  }

  console.log("\n🎉 ALL DONE! Textile blogs published with framed images and synced to MongoDB Atlas!");
}

main().catch(console.error);
