const fs = require('fs');
const path = require('path');

// 1. Update app/globals.css
const cssPath = path.join(process.cwd(), 'app', 'globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

const responsiveCss = `
/* Blog article prose mobile responsiveness & overflow prevention */
.prose-content {
  overflow-wrap: break-word !important;
  word-break: break-word !important;
  min-width: 0 !important;
  max-width: 100% !important;
}

.prose-content pre {
  max-width: 100% !important;
  overflow-x: auto !important;
  -webkit-overflow-scrolling: touch !important;
  white-space: pre !important;
  word-break: normal !important;
  word-wrap: normal !important;
  border-radius: 12px !important;
  background-color: #0f172a !important;
  color: #f8fafc !important;
  padding: 1rem !important;
  font-size: 0.75rem !important;
  line-height: 1.4 !important;
  box-sizing: border-box !important;
}

.prose-content pre code {
  white-space: pre !important;
  word-break: normal !important;
  display: block !important;
  background: transparent !important;
  color: inherit !important;
  padding: 0 !important;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important;
}

.prose-content code:not(pre code) {
  word-break: break-all !important;
  white-space: normal !important;
}

.prose-content table {
  display: block !important;
  width: 100% !important;
  max-width: 100% !important;
  overflow-x: auto !important;
  -webkit-overflow-scrolling: touch !important;
  border-collapse: collapse !important;
  box-sizing: border-box !important;
}

.prose-content table th,
.prose-content table td {
  white-space: normal !important;
  min-width: 120px !important;
}

.prose-content img {
  max-width: 100% !important;
  height: auto !important;
}

.table-responsive-wrapper {
  width: 100% !important;
  max-width: 100% !important;
  overflow-x: auto !important;
  -webkit-overflow-scrolling: touch !important;
  margin: 1.5rem 0 !important;
  border-radius: 0.75rem !important;
}
`;

if (!css.includes('.table-responsive-wrapper')) {
  // Insert before /* Sidebar Table of Contents active trackers */
  const marker = '/* Sidebar Table of Contents active trackers */';
  if (css.includes(marker)) {
    css = css.replace(marker, responsiveCss + '\n' + marker);
    fs.writeFileSync(cssPath, css, 'utf8');
    console.log('✅ globals.css updated with responsive prose styles');
  } else {
    css += '\n' + responsiveCss;
    fs.writeFileSync(cssPath, css, 'utf8');
    console.log('✅ globals.css appended with responsive prose styles');
  }
} else {
  console.log('ℹ️ globals.css already has table-responsive-wrapper');
}

// 2. Update app/blog/[slug]/page.tsx
const pagePath = path.join(process.cwd(), 'app', 'blog', '[slug]', 'page.tsx');
let pageCode = fs.readFileSync(pagePath, 'utf8');

// Wrap marked output with table responsive div
const oldMarked = 'const htmlContent = await marked(post.content);';
const newMarked = `let rawHtml = await marked(post.content);
  // Ensure tables have responsive overflow wrapper
  rawHtml = rawHtml.replace(/<table(\\b[^>]*)>/gi, '<div class="table-responsive-wrapper"><table$1>');
  rawHtml = rawHtml.replace(/<\\/table>/gi, '</table></div>');
  const htmlContent = rawHtml;`;

if (pageCode.includes(oldMarked)) {
  pageCode = pageCode.replace(oldMarked, newMarked);
}

// Ensure main tag has min-w-0 w-full overflow-x-hidden
pageCode = pageCode.replace('<main className="pt-16 lg:pt-20">', '<main className="pt-16 lg:pt-20 min-w-0 w-full overflow-x-hidden">');

fs.writeFileSync(pagePath, pageCode, 'utf8');
console.log('✅ app/blog/[slug]/page.tsx updated');

// 3. Update components/sections/BlogArticleContainer.tsx
const containerPath = path.join(process.cwd(), 'components', 'sections', 'BlogArticleContainer.tsx');
let containerCode = fs.readFileSync(containerPath, 'utf8');

// Fix outer padding
containerCode = containerCode.replace(
  'className="max-w-7xl mx-auto px-6 py-10 select-text"',
  'className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 select-text w-full min-w-0 overflow-x-hidden"'
);

// Fix breadcrumb
containerCode = containerCode.replace(
  'className="text-[10px] sm:text-xs font-bold text-[#D9CCF5]/75 uppercase tracking-wider mb-8 select-none animate-fade-in text-left"',
  'className="flex flex-wrap items-center text-[10px] sm:text-xs font-bold text-[#D9CCF5]/75 uppercase tracking-wider mb-8 select-none animate-fade-in text-left gap-y-1"'
);
containerCode = containerCode.replace(
  'height-4 align-bottom',
  'h-4 align-bottom'
);

// Fix title word break
containerCode = containerCode.replace(
  'className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-6"',
  'className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-6 break-words"'
);

// Fix grid container
containerCode = containerCode.replace(
  'className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left"',
  'className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left w-full min-w-0"'
);

// Fix article container padding and min-w-0
containerCode = containerCode.replace(
  'bg-white border border-[#E2E8F0] p-8 sm:p-12 rounded-[32px] shadow-sm relative overflow-hidden w-full text-slate-800',
  'bg-white border border-[#E2E8F0] p-4 sm:p-8 lg:p-12 rounded-2xl sm:rounded-[32px] shadow-sm relative w-full min-w-0 text-slate-800'
);

// Fix prose content classes
containerCode = containerCode.replace(
  'prose prose-blue max-w-none text-slate-800 leading-relaxed text-sm sm:text-base space-y-6.5\n                       prose-content',
  'prose prose-blue max-w-none text-slate-800 leading-relaxed text-sm sm:text-base space-y-6.5\n                       prose-content min-w-0 break-words'
);
containerCode = containerCode.replace(
  'prose prose-blue max-w-none text-slate-800 leading-relaxed text-sm sm:text-base space-y-6.5\r\n                       prose-content',
  'prose prose-blue max-w-none text-slate-800 leading-relaxed text-sm sm:text-base space-y-6.5\r\n                       prose-content min-w-0 break-words'
);

// Fix mid-article box padding
containerCode = containerCode.replace(
  'className="my-10 p-6 sm:p-8 bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 text-white rounded-3xl border border-purple-500/30 shadow-xl relative overflow-hidden not-prose select-none"',
  'className="my-10 p-5 sm:p-8 bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 text-white rounded-2xl sm:rounded-3xl border border-purple-500/30 shadow-xl relative overflow-hidden not-prose select-none min-w-0"'
);

// Fix bottom CTA section padding
containerCode = containerCode.replace(
  'className="mt-16 bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 border border-purple-500/30 text-white rounded-[32px] p-8 sm:p-12 relative overflow-hidden select-none reveal-hidden blog-card-reveal text-center shadow-2xl"',
  'className="mt-16 bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 border border-purple-500/30 text-white rounded-2xl sm:rounded-[32px] p-5 sm:p-12 relative overflow-hidden select-none reveal-hidden blog-card-reveal text-center shadow-2xl min-w-0"'
);

// Fix related articles grid
containerCode = containerCode.replace(
  'className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left related-cards-grid reveal-hidden"',
  'className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-left related-cards-grid reveal-hidden w-full min-w-0"'
);

fs.writeFileSync(containerPath, containerCode, 'utf8');
console.log('✅ components/sections/BlogArticleContainer.tsx updated');
