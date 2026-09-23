import re

with open("components/sections/HomePageComponent.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Remove "use client";
content = content.replace('"use client";\n', '')

# 2. Add imports
imports_to_add = """
import ClientScrollObserver from "@/components/ui/ClientScrollObserver";
import CountUpNumber from "@/components/ui/CountUpNumber";
import TrackedLink from "@/components/ui/TrackedLink";
import TrackedWaLink from "@/components/ui/TrackedWaLink";
import IndustryTabs from "@/components/sections/IndustryTabs";
import ProcessSection from "@/components/sections/ProcessSection";
import PricingSection from "@/components/sections/PricingSection";
"""
content = content.replace('import Header from "@/components/layout/Header";', imports_to_add.strip() + '\nimport Header from "@/components/layout/Header";')

# 3. Remove CountUpNumber definition
start_idx = content.find("// Lightweight Count-Up Component")
end_idx = content.find("export const HOME_FAQS = [")
if start_idx != -1 and end_idx != -1:
    content = content[:start_idx] + content[end_idx:]

# 4. Remove state hooks
content = re.sub(r'  const \[selectedIndustry.*?;\n', '', content)
content = re.sub(r'  // Dynamic rotating hero phrase state.*?\n', '', content)
content = re.sub(r'  const \[activePhrase.*?;\n', '', content)
content = re.sub(r'  const \[fadeState.*?;\n', '', content)
content = re.sub(r'  // Section line reveal status.*?\n', '', content)
content = re.sub(r'  const \[processInView.*?;\n', '', content)
content = re.sub(r'  // Rotating phrases effect.*?  }, \[\]\);\n', '', content, flags=re.DOTALL)
content = re.sub(r'  // Intersection Observer for scroll reveal animations.*?  }, \[\]\);\n', '', content, flags=re.DOTALL)

# 5. Remove INDUSTRIES array
start_idx = content.find("  // 4. WHO WE HELP DIRECTORY")
end_idx = content.find("  // 5. PORTFOLIO")
if start_idx != -1 and end_idx != -1:
    content = content[:start_idx] + content[end_idx:]

# 6. Remove PROCESS_STEPS array
start_idx = content.find("  // 6. HOW WE WORK PROCESS")
end_idx = content.find("  // 8. CASE STUDIES")
if start_idx != -1 and end_idx != -1:
    content = content[:start_idx] + content[end_idx:]

# 7. Remove tracking handlers
start_idx = content.find("  const handleCtaEvent = ")
end_idx = content.find("  return (")
if start_idx != -1 and end_idx != -1:
    content = content[:start_idx] + content[end_idx:]

# 8. Add ClientScrollObserver just after <>
content = content.replace("    <>\n      <Header", "    <>\n      <ClientScrollObserver />\n      <Header")

# 9. Replace Industry tabs grid with <IndustryTabs />
start_idx = content.find("            {/* Industry selector tabs layout")
end_idx = content.find("        </section>\n\n        {/* FREE ONLINE BUSINESS TOOLS SECTION */}")
if start_idx != -1 and end_idx != -1:
    content = content[:start_idx] + "            <IndustryTabs />\n          </div>\n" + content[end_idx:]

# 10. Replace process section inner with <ProcessSection />
start_idx = content.find("            <div className=\"relative\">\n              {/* Progressive animated horizontal connecting gradient line")
end_idx = content.find("        </section>\n\n        {/* 7. WHY JOY DIGITAL")
if start_idx != -1 and end_idx != -1:
    content = content[:start_idx] + "            <ProcessSection />\n          </div>\n" + content[end_idx:]

# 11. Replace pricing section inner with <PricingSection />
start_idx = content.find("            <div className=\"grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch\">")
end_idx = content.find("            <p className=\"text-[10px] text-[#6B6478] font-bold uppercase tracking-wider text-center mt-8\">")
if start_idx != -1 and end_idx != -1:
    content = content[:start_idx] + "            <PricingSection country={country} />\n            \n" + content[end_idx:]

# 12. Fix tracking links in Free Tools section and elsewhere
# Replace <a> with TrackedLink/TrackedWaLink where onClick handles tracking
content = content.replace("""                  <a
                    href="#enquiry-section"
                    onClick={() => handleCtaEvent("Free Tools Lead Consultation")}
                    className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-center font-bold text-xs py-3.5 px-6 rounded-xl shadow-sm hover:scale-[1.01] transition-all cursor-pointer"
                  >
                    Get a Free Consultation
                  </a>""", """                  <TrackedLink
                    href="#enquiry-section"
                    eventName="Free Tools Lead Consultation"
                    className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-center font-bold text-xs py-3.5 px-6 rounded-xl shadow-sm hover:scale-[1.01] transition-all cursor-pointer"
                  >
                    Get a Free Consultation
                  </TrackedLink>""")

content = content.replace("""                  <a
                    href="https://wa.me/919080026133?text=Hello%20Joy%20Digital,%20I%20saw%20your%20free%20business%20tools%20and%20I'd%20like%2520to%2520get%2520a%2520free%2520consultation%2520for%2520my%2520business."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleWaEvent("free_tools_cta")}
                    className="bg-[#10b981] hover:bg-[#059669] text-white text-center font-bold text-xs py-3.5 px-6 rounded-xl shadow-sm hover:scale-[1.01] transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <i className="fa-brands fa-whatsapp text-sm" /> Chat on WhatsApp
                  </a>""", """                  <TrackedWaLink
                    href="https://wa.me/919080026133?text=Hello%20Joy%20Digital,%20I%20saw%20your%20free%20business%20tools%20and%20I'd%20like%2520to%2520get%2520a%2520free%2520consultation%2520for%2520my%2520business."
                    location="free_tools_cta"
                    className="bg-[#10b981] hover:bg-[#059669] text-white text-center font-bold text-xs py-3.5 px-6 rounded-xl shadow-sm hover:scale-[1.01] transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <i className="fa-brands fa-whatsapp text-sm" /> Chat on WhatsApp
                  </TrackedWaLink>""")

content = content.replace("""              <a
                href="#enquiry-section"
                onClick={() => handleCtaEvent("Get Free Website Audit - Final")}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-extrabold text-sm shadow-xl shadow-purple-900/30 hover:scale-105 transition-all duration-300"
              >
                Get My Free Website Audit <i className="fa-solid fa-arrow-right" />
              </a>""", """              <TrackedLink
                href="#enquiry-section"
                eventName="Get Free Website Audit - Final"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-extrabold text-sm shadow-xl shadow-purple-900/30 hover:scale-105 transition-all duration-300"
              >
                Get My Free Website Audit <i className="fa-solid fa-arrow-right" />
              </TrackedLink>""")

content = content.replace("""              <a
                href="https://wa.me/919080026133?text=Hi%20Joy%20Digital,%20I'd%20like%20to%20claim%20my%20free%20website%20audit."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleWaEvent("final_cta")}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white border border-[#E9E4F2] hover:border-emerald-500/50 hover:bg-emerald-50 text-emerald-700 font-extrabold text-sm shadow-md hover:scale-105 transition-all duration-300 group"
              >
                <i className="fa-brands fa-whatsapp text-lg group-hover:scale-110 transition-transform" /> Chat on WhatsApp
              </a>""", """              <TrackedWaLink
                href="https://wa.me/919080026133?text=Hi%20Joy%20Digital,%20I'd%20like%20to%20claim%20my%20free%20website%20audit."
                location="final_cta"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white border border-[#E9E4F2] hover:border-emerald-500/50 hover:bg-emerald-50 text-emerald-700 font-extrabold text-sm shadow-md hover:scale-105 transition-all duration-300 group"
              >
                <i className="fa-brands fa-whatsapp text-lg group-hover:scale-110 transition-transform" /> Chat on WhatsApp
              </TrackedWaLink>""")

with open("components/sections/HomePageComponent.tsx", "w", encoding="utf-8") as f:
    f.write(content)
