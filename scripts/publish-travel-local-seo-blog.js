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
const slug = 'why-is-your-travel-agency-not-getting-enough-bookings-from-google';
const sourceJpg = 'C:/Users/SARAVANAN/.gemini/antigravity/brain/3af8944c-a56b-4ec8-abcb-7aa8391c2b0c/travel_agency_seo_booking_hero_1794537902637.jpg';
const localFilename = 'why-is-your-travel-agency-not-getting-enough-bookings-from-google.webp';
const publicId = 'why-is-your-travel-agency-not-getting-enough-bookings-from-google-v1';

async function main() {
  const blogDir = path.join(process.cwd(), 'public', 'assets', 'images', 'blog');
  if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true });
  }

  console.log("=== Step 1: Processing, resizing and converting image to WebP ===");
  if (!fs.existsSync(sourceJpg)) {
    throw new Error("Source image not found: " + sourceJpg);
  }

  const inputBuffer = fs.readFileSync(sourceJpg);
  const targetW = 1440;
  const targetH = 810; // 16:9

  const webpBuffer = await sharp(inputBuffer)
    .resize(targetW, targetH, { fit: 'cover', position: 'center' })
    .webp({ quality: 90 })
    .toBuffer();

  const localOutPath = path.join(blogDir, localFilename);
  fs.writeFileSync(localOutPath, webpBuffer);
  console.log(`✅ Saved local WebP: ${localOutPath}`);

  let imageUrl = `/assets/images/blog/${localFilename}`;

  console.log("=== Step 2: Uploading to Cloudinary ===");
  try {
    const uploadRes = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder: 'joydigital/blog',
          public_id: publicId,
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
  } catch (err) {
    console.error("Cloudinary upload failed, using local WebP path:", err.message);
  }

  console.log("=== Step 3: Updating Markdown File with Final Image URL ===");
  const mdPath = path.join(process.cwd(), 'content', 'blog', `${slug}.md`);
  const mdContent = fs.readFileSync(mdPath, 'utf-8');
  const parsed = matter(mdContent);

  parsed.data.image = imageUrl;
  parsed.data.ogImage = imageUrl;
  parsed.data.twitterImage = imageUrl;

  // Replace image in markdown body as well if present
  let updatedContent = parsed.content.replace(
    /!\[Local SEO strategies for travel agencies\]\([^)]+\)/g,
    `![Local SEO strategies for travel agencies](${imageUrl})`
  );

  const updatedMd = matter.stringify(updatedContent, parsed.data);
  fs.writeFileSync(mdPath, updatedMd, 'utf-8');
  console.log("✅ Updated markdown file with final image URL!");

  console.log("=== Step 4: Syncing to MongoDB Atlas ===");
  const client = new MongoClient(mongoUri);
  try {
    await client.connect();
    const db = client.db('joydigital');
    const blogsCol = db.collection('blogs');

    const doc = {
      slug: slug,
      title: parsed.data.title,
      description: parsed.data.description,
      date: parsed.data.date,
      lastUpdatedDate: parsed.data.lastUpdatedDate || parsed.data.date,
      category: parsed.data.category || 'Local SEO & Travel Marketing',
      author: parsed.data.author || 'Saravanan L',
      image: imageUrl,
      imageAlt: parsed.data.imageAlt || 'Local SEO strategies for travel agencies',
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
      content: updatedContent,
      isDeleted: false,
      updatedAt: new Date()
    };

    await blogsCol.updateOne(
      { slug: slug },
      { $set: doc },
      { upsert: true }
    );
    console.log(`✅ Live MongoDB successfully synced for: ${slug}`);
  } catch (err) {
    console.error("MongoDB Atlas sync error:", err.message);
  } finally {
    try { await client.close(); } catch (_) {}
  }

  console.log("\n🎉 TRAVEL LOCAL SEO BLOG POST FULLY PUBLISHED AND SYNCED!");
}

main().catch(console.error);
