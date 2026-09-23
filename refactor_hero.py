import re

with open("components/sections/ModernHeroSection.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Remove framer-motion import
content = re.sub(r'import { motion, Variants } from "framer-motion";\n', '', content)
content = re.sub(r'import { motion } from "framer-motion";\n', '', content)

# Remove all variants
content = re.sub(r'const containerVariants: Variants = {.*?};\n\n', '', content, flags=re.DOTALL)
content = re.sub(r'const antiGravityHeaderVariants: Variants = {.*?};\n\n', '', content, flags=re.DOTALL)
content = re.sub(r'const antiGravityWordVariants: Variants = {.*?};\n\n', '', content, flags=re.DOTALL)
content = re.sub(r'const itemVariants: Variants = {.*?};\n\n', '', content, flags=re.DOTALL)
content = re.sub(r'const cardVariants: Variants = {.*?};\n\n', '', content, flags=re.DOTALL)

# Add keyframes to the embedded style
css_to_add = """
        @keyframes fadeUpWord {
          0% { opacity: 0; transform: translateY(14px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUpItem {
          0% { opacity: 0; transform: translateY(16px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUpCard {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up-word {
          opacity: 0;
          animation: fadeUpWord 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: transform, opacity;
        }
        .animate-fade-up-item {
          opacity: 0;
          animation: fadeUpItem 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: transform, opacity;
        }
        .animate-fade-up-card {
          opacity: 0;
          animation: fadeUpCard 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: transform, opacity;
        }
"""
content = content.replace("        @keyframes gradientShimmer {", css_to_add + "        @keyframes gradientShimmer {")


# Replace <motion.div ...> with <div ...> and correct classes
content = re.sub(r'<motion\.div\s+className="([^"]+)"\s+variants=\{containerVariants\}\s+initial=\{false\}\s+animate="visible"\s*>', r'<div className="\1">', content)
content = re.sub(r'<motion\.div variants=\{itemVariants\} className="([^"]+)">', r'<div className="\1 animate-fade-up-item">', content)

# Header
content = re.sub(r'<motion\.h1\s+variants=\{antiGravityHeaderVariants\}\s+initial=\{false\}\s+animate="visible"\s+className="([^"]+)"\s*>', r'<h1 className="\1">', content)
content = re.sub(r'</motion\.h1>', '</h1>', content)

content = re.sub(r'<motion\.span\s+key=\{`main-w-\$\{idx\}`\}\s+variants=\{antiGravityWordVariants\}\s+className="([^"]+)"\s*>', 
                 r'<span key={`main-w-${idx}`} className="\1 animate-fade-up-word" style={{ animationDelay: `${0.05 + idx * 0.04}s` }}>', content)
content = re.sub(r'</motion\.span>', '</span>', content)

content = re.sub(r'<motion\.span\s+key=\{`grad-w-\$\{idx\}`\}\s+variants=\{antiGravityWordVariants\}\s+className="([^"]+)"\s*>', 
                 r'<span key={`grad-w-${idx}`} className="\1 animate-fade-up-word" style={{ animationDelay: `${0.05 + (heroMainWords.length + idx) * 0.04}s` }}>', content)


# Card
content = re.sub(r'<motion\.div\s+className="([^"]+)"\s+variants=\{cardVariants\}\s+initial=\{false\}\s+animate="visible"\s*>', 
                 r'<div className="\1 animate-fade-up-card" style={{ animationDelay: "0.2s" }}>', content)

content = re.sub(r'</motion\.div>', '</div>', content)

# Bottom indicator button
content = re.sub(r'<motion\.div\s+className="([^"]+)"\s+initial=\{\{\s*opacity: 0, y: 15\s*\}\}\s+animate=\{\{\s*opacity: 1, y: 0\s*\}\}\s+transition=\{\{\s*delay: 0\.8, duration: 0\.6\s*\}\}\s*>', 
                 r'<div className="\1 animate-fade-up-card" style={{ animationDelay: "0.8s" }}>', content)

with open("components/sections/ModernHeroSection.tsx", "w", encoding="utf-8") as f:
    f.write(content)
