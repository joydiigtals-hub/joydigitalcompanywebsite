const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const uri = process.env.MONGODB_URI || "mongodb+srv://admin:DdGk%24Gg3yB8g-45@cluster0.lvnxfa7.mongodb.net/joydigital?appName=Cluster0";
const client = new MongoClient(uri, { serverSelectionTimeoutMS: 3000 });

const slugs = [
  'how-solar-companies-can-get-more-leads',
  '5-ideas-to-grow-your-tourism-business',
  'digital-marketing-ideas-for-real-estate'
];

async function syncToMongoDB() {
  try {
    console.log("Connecting to MongoDB Atlas...");
    await client.connect();
    const db = client.db("joydigital");
    const blogsCol = db.collection("blogs");

    for (const slug of slugs) {
      const filePath = path.join(__dirname, '..', 'content', 'blog', `${slug}.md`);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);

      const doc = {
        slug: slug,
        title: data.title,
        description: data.description,
        date: data.date,
        lastUpdatedDate: data.lastUpdatedDate || data.date,
        category: data.category,
        author: data.author || "Saravanan L",
        image: data.image,
        imageAlt: data.imageAlt || data.title,
        imageCaption: data.imageCaption || "",
        tags: data.tags || [],
        showTableOfContents: data.showTableOfContents !== false,
        showAuthorInfo: data.showAuthorInfo !== false,
        showFeaturedImage: data.showFeaturedImage !== false,
        seoTitle: data.seoTitle || data.title,
        metaDescription: data.metaDescription || data.description,
        focusKeyword: data.focusKeyword || "",
        secondaryKeywords: data.secondaryKeywords || "",
        canonicalUrl: data.canonicalUrl || `https://www.joydigital.in/blog/${slug}`,
        robots: data.robots || "Index, Follow",
        internalLinks: data.internalLinks || [],
        autoSuggestRelated: true,
        manualRelatedSlugs: data.manualRelatedSlugs || [],
        authorName: data.authorName || "Saravanan L",
        authorRole: data.authorRole || "Founder & Technical Web Specialist",
        authorBio: data.authorBio || "Digital marketing strategist and Next.js web developer focusing on search optimization, conversion funnels, and enterprise growth.",
        authorImage: data.authorImage || "/assets/images/logo.webp",
        authorProfileUrl: data.authorProfileUrl || "https://www.joydigital.in/about",
        faqs: data.faqs || [],
        ogTitle: data.title + " | Joy Digital",
        ogDescription: data.description,
        ogImage: data.image,
        twitterTitle: data.title + " | Joy Digital",
        twitterDescription: data.description,
        twitterImage: data.image,
        status: "Published",
        content: content,
        isDeleted: false,
        updatedAt: new Date()
      };

      await blogsCol.updateOne(
        { slug: slug },
        { $set: doc },
        { upsert: true }
      );
      console.log(`Synced blog "${slug}" to MongoDB.`);
    }
    console.log("All blogs successfully synced to MongoDB Atlas!");
  } catch (err) {
    console.warn("MongoDB connection skipped (remote network/DNS restriction), markdown files will be used directly:", err.message);
  } finally {
    try {
      await client.close();
    } catch (_) {}
  }
}

syncToMongoDB();
