const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);
const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const uri = "mongodb+srv://admin:DdGk%24Gg3yB8g-45@cluster0.lvnxfa7.mongodb.net/joydigital?appName=Cluster0";
const client = new MongoClient(uri);

const slugs = [
  '5-website-mistakes-killing-business-growth',
  'is-a-slow-website-costing-you-sales-web-speed-revenue',
  'outgrown-wix-or-wordpress-custom-web-architecture',
  'how-to-attract-international-clients-global-seo-strategy'
];

async function syncToMongo() {
  try {
    console.log('Connecting to MongoDB...');
    await client.connect();
    const db = client.db('joydigital');
    const blogsCol = db.collection('blogs');

    for (const slug of slugs) {
      const filePath = path.join(process.cwd(), 'content', 'blog', `${slug}.md`);
      if (!fs.existsSync(filePath)) {
        console.error('File not found:', filePath);
        continue;
      }

      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);

      const doc = {
        slug: slug,
        title: data.title,
        description: data.description,
        date: data.date,
        lastUpdatedDate: data.lastUpdatedDate || data.date,
        category: data.category || 'General',
        author: data.author || 'Joy Digital Team',
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
        canonicalUrl: data.canonicalUrl || (`https://www.joydigital.in/blog/${slug}`),
        robots: data.robots || 'Index, Follow',
        internalLinks: data.internalLinks || [],
        autoSuggestRelated: data.autoSuggestRelated !== false,
        manualRelatedSlugs: data.manualRelatedSlugs || [],
        authorName: data.authorName || 'Joy Digital Team',
        authorRole: data.authorRole || 'Technical Web Specialist',
        authorBio: data.authorBio || '',
        authorImage: data.authorImage || '/assets/images/logo.webp',
        authorProfileUrl: data.authorProfileUrl || 'https://www.joydigital.in/about',
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
        { slug: slug },
        { $set: doc },
        { upsert: true }
      );
      console.log('✅ Successfully published/updated in MongoDB:', slug);
    }
  } catch (err) {
    console.error('Error uploading to MongoDB:', err.message);
  } finally {
    try {
      await client.close();
    } catch (_) {}
  }
}

syncToMongo();
