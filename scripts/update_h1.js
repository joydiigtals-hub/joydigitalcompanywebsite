const fs = require('fs');
let hero = fs.readFileSync('components/sections/ModernHeroSection.tsx', 'utf8');
hero = hero.replace(/\r\n/g, '\n');

const oldH1 = `          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.14] flex flex-wrap gap-x-[0.28em] gap-y-1 sm:gap-y-2 select-none">
            {heroMainWords.map((word, idx) => (
              <span key={\`main-w-\${idx}\`} className="inline-block">
                {word}
              </span>
            ))}
            {heroGradientWords.map((word, idx) => (
              <span key={\`grad-w-\${idx}\`} className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-300 animate-gradient-shimmer">
                {word}
              </span>
            ))}
          </h1>`;

const newH1 = `          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.14] flex flex-wrap gap-x-[0.28em] gap-y-1 sm:gap-y-2 select-none">
            {heroMainWords.map((word, idx) => (
              <React.Fragment key={\`main-w-\${idx}\`}>
                <span className="inline-block">{word}</span>
                {" "}
              </React.Fragment>
            ))}
            {heroGradientWords.map((word, idx) => (
              <React.Fragment key={\`grad-w-\${idx}\`}>
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-300 animate-gradient-shimmer">
                  {word}
                </span>
                {idx < heroGradientWords.length - 1 ? " " : ""}
              </React.Fragment>
            ))}
          </h1>`;

if (hero.includes(oldH1)) {
  hero = hero.replace(oldH1, newH1);
  fs.writeFileSync('components/sections/ModernHeroSection.tsx', hero, 'utf8');
  console.log('Updated H1 spacing in ModernHeroSection.tsx');
} else {
  console.error('Could not find oldH1 in ModernHeroSection.tsx');
}
