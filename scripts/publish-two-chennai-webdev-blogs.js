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

const blogsToPublish = [
  {
    slug: '7-website-features-small-business-needs',
    sourceJpg: 'C:/Users/SARAVANAN/.gemini/antigravity/brain/3af8944c-a56b-4ec8-abcb-7aa8391c2b0c/blog_hero_responsive_business_website_1794538342136.jpg',
    localFilename: '7-website-features-small-business-needs.webp',
    publicId: '7-website-features-small-business-needs-v1'
  },
  {
    slug: 'how-to-choose-best-website-development-company-chennai',
    sourceJpg: 'C:/Users/SARAVANAN/.gemini/antigravity/brain/3af8944c-a56b-4ec8-abcb-7aa8391c2b0c/chennai_web_consulting_meeting_editorial_1794538379882.jpg',
    localFilename: 'how-to-choose-best-website-development-company-chennai.webp',
    publicId: 'how-to-choose-best-website-development-company-chennai-v1'
  }
];

async function main() {
  const blogDir = path.join(process.cwd(), 'public', 'assets', 'images', 'blog');
  if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true });
  }

  const client = new MongoClient(mongoUri);
  await client.connect();
  const db = client.db('joydigital');
  const blogsCol = db.collection('blogs');

  for (const item of blogsToPublish) {
    console.log(`\n=== Processing: ${item.slug} ===`);
    
    // 1. Process image
    let imageUrl = `/assets/images/blog/${item.localFilename}`;
    if (fs.existsSync(item.sourceJpg)) {
      const inputBuffer = fs.readFileSync(item.sourceJpg);
      const webpBuffer = await sharp(inputBuffer)
        .resize(1440, 810, { fit: 'cover', position: 'center' })
        .webp({ quality: 90 })
        .toBuffer();

      const localOutPath = path.join(blogDir, item.localFilename);
      fs.writeFileSync(localOutPath, webpBuffer);
      console.log(`✅ Saved local WebP: ${localOutPath}`);

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
        imageUrl = uploadRes.secure_url;
      } catch (uploadErr) {
        console.error(`Cloudinary upload failed for ${item.slug}, using local path fallback:`, uploadErr.message);
      }
    }

    // 2. Update markdown file
    const mdPath = path.join(process.cwd(), 'content', 'blog', `${item.slug}.md`);
    const mdRaw = fs.readFileSync(mdPath, 'utf-8');
    const parsed = matter(mdRaw);

    parsed.data.image = imageUrl;
    parsed.data.ogImage = imageUrl;
    parsed.data.twitterImage = imageUrl;

    const updatedMd = matter.stringify(parsed.content, parsed.data);
    fs.writeFileSync(mdPath, updatedMd, 'utf-8');
    console.log(`✅ Updated markdown file with final image: ${item.slug}.md`);

    // 3. Sync to MongoDB
    const doc = {
      slug: item.slug,
      title: parsed.data.title,
      description: parsed.data.description,
      date: parsed.data.date,
      lastUpdatedDate: parsed.data.lastUpdatedDate || parsed.data.date,
      category: parsed.data.category,
      author: parsed.data.author || 'Saravanan L',
      image: imageUrl,
      imageAlt: parsed.data.imageAlt,
      imageCaption: parsed.data.imageCaption || '',
      tags: parsed.data.tags || [],
      showTableOfContents: parsed.data.showTableOfContents !== false,
      showAuthorInfo: parsed.data.showAuthorInfo !== false,
      showFeaturedImage: parsed.data.showFeaturedImage !== false,
      seoTitle: parsed.data.seoTitle,
      metaDescription: parsed.data.metaDescription,
      focusKeyword: parsed.data.focusKeyword,
      secondaryKeywords: parsed.data.secondaryKeywords,
      canonicalUrl: parsed.data.canonicalUrl,
      robots: parsed.data.robots,
      internalLinks: parsed.data.internalLinks,
      autoSuggestRelated: parsed.data.autoSuggestRelated !== false,
      manualRelatedSlugs: parsed.data.manualRelatedSlugs,
      authorName: parsed.data.authorName,
      authorRole: parsed.data.authorRole,
      authorBio: parsed.data.authorBio,
      authorImage: parsed.data.authorImage,
      authorProfileUrl: parsed.data.authorProfileUrl,
      faqs: parsed.data.faqs,
      ogTitle: parsed.data.ogTitle,
      ogDescription: parsed.data.ogDescription,
      ogImage: imageUrl,
      twitterTitle: parsed.data.twitterTitle,
      twitterDescription: parsed.data.twitterDescription,
      twitterImage: imageUrl,
      status: parsed.data.status || 'Published',
      scheduledPublishDate: '',
      seoScore: parsed.data.seoScore || 98,
      content: parsed.content,
      isDeleted: false,
      updatedAt: new Date()
    };

    await blogsCol.updateOne(
      { slug: item.slug },
      { $set: doc },
      { upsert: true }
    );
    console.log(`✅ Live MongoDB successfully synced for: ${item.slug}`);
  }

  await client.close();
  console.log("\n🎉 BOTH CHENNAI WEB DEVELOPMENT BLOGS SUCCESSFULLY PUBLISHED AND SYNCED!");
}

main().catch(console.error);
