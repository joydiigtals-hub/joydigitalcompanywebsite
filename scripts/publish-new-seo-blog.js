const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

if (process.platform === 'win32') {
  require('dns').setServers(['8.8.8.8', '1.1.1.1']);
}

const uri = process.env.MONGODB_URI || "mongodb+srv://admin:DdGk%24Gg3yB8g-45@cluster0.lvnxfa7.mongodb.net/joydigital?appName=Cluster0";
const client = new MongoClient(uri, { serverSelectionTimeoutMS: 15000 });

async function run() {
  try {
    const slug = 'how-to-do-seo-for-a-new-website';
    const filePath = path.join(process.cwd(), 'content/blog', slug + '.md');
    const rawContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(rawContent);

    const blogDoc = {
      slug: slug,
      title: data.title,
      description: data.description,
      date: data.date,
      lastUpdatedDate: data.lastUpdatedDate,
      category: data.category,
      author: data.author,
      image: data.image,
      imageAlt: data.imageAlt,
      imageCaption: data.imageCaption,
      tags: data.tags,
      showTableOfContents: data.showTableOfContents,
      showAuthorInfo: data.showAuthorInfo,
      showFeaturedImage: data.showFeaturedImage,
      seoTitle: data.seoTitle,
      metaDescription: data.metaDescription,
      focusKeyword: data.focusKeyword,
      secondaryKeywords: data.secondaryKeywords,
      canonicalUrl: data.canonicalUrl,
      robots: data.robots,
      internalLinks: data.internalLinks,
      autoSuggestRelated: data.autoSuggestRelated,
      manualRelatedSlugs: data.manualRelatedSlugs,
      authorName: data.authorName,
      authorRole: data.authorRole,
      authorBio: data.authorBio,
      authorImage: data.authorImage,
      authorProfileUrl: data.authorProfileUrl,
      faqs: data.faqs,
      ogTitle: data.ogTitle,
      ogDescription: data.ogDescription,
      ogImage: data.ogImage,
      twitterTitle: data.twitterTitle,
      twitterDescription: data.twitterDescription,
      twitterImage: data.twitterImage,
      status: data.status,
      scheduledPublishDate: data.scheduledPublishDate || '',
      seoScore: data.seoScore || 95,
      content: content,
      isDeleted: false,
      updatedAt: new Date()
    };

    console.log('Connecting to MongoDB Atlas...');
    await client.connect();
    const db = client.db('joydigital');
    const blogsCol = db.collection('blogs');

    const result = await blogsCol.updateOne(
      { slug: slug },
      { $set: blogDoc },
      { upsert: true }
    );

    console.log('Successfully published blog to MongoDB Atlas:', result);
  } catch (err) {
    console.error('Error publishing blog to MongoDB:', err);
  } finally {
    await client.close();
  }
}

run();
