const fs = require('fs');

// 1. Update components/sections/ModernHeroSection.tsx
let hero = fs.readFileSync('components/sections/ModernHeroSection.tsx', 'utf8');
hero = hero.replace(/\r\n/g, '\n');

// Update formData state
hero = hero.replace(
`  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    website: "",
  });`,
`  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    website: "",
    _honey: "",
  });
  const [submitError, setSubmitError] = useState("");`
);

// Update handleChange
const oldHandleChange = `  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };`;

const newHandleChange = `  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if ((name === "email" || name === "mobile") && (errors.email || errors.mobile)) {
      setErrors((prev) => ({ ...prev, email: "", mobile: "" }));
    }
    if (submitError) setSubmitError("");
  };`;

hero = hero.replace(oldHandleChange, newHandleChange);

// Update validateForm
const oldValidateForm = `  const validateForm = () => {
    const tempErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      tempErrors.name = "Full Name is required.";
    }

    const mobileVal = formData.mobile.trim();
    if (mobileVal) {
      const numbersOnly = mobileVal.replace(/\\D/g, "");
      if (numbersOnly.length < 6) {
        tempErrors.mobile = "Enter a valid contact number.";
      }
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };`;

const newValidateForm = `  const validateForm = () => {
    const tempErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      tempErrors.name = "Full Name is required.";
    }

    const emailTrim = formData.email.trim();
    const mobileTrim = formData.mobile.trim();

    if (!emailTrim && !mobileTrim) {
      tempErrors.email = "Please provide an email or phone number.";
      tempErrors.mobile = "Please provide a phone number or email.";
    }

    if (emailTrim) {
      const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
      if (!emailReg.test(emailTrim)) {
        tempErrors.email = "Please enter a valid email address.";
      }
    }

    if (mobileTrim) {
      const numbersOnly = mobileTrim.replace(/\\D/g, "");
      if (numbersOnly.length < 7) {
        tempErrors.mobile = "Please enter a valid phone number (at least 7 digits).";
      }
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };`;

hero = hero.replace(oldValidateForm, newValidateForm);

// Update handleSubmit
const oldHandleSubmit = `  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const utm = getUtmParameters();
      const payload = {
        Name: formData.name.trim(),
        Email: contactEmail,
        Mobile: formData.mobile.trim().startsWith("+")
          ? formData.mobile.trim()
          : \`\${selectedCountryCode} \${formData.mobile.trim()}\`,
        Website: formData.website.trim() || "N/A",
        Service: "Free Website Consultation & Audit + Strategy Proposal",
        Source: "Hero Booking Consultation Form",
        utmParams: utm || undefined,
        _subject: \`⚡ Free Website Consultation & Audit Request - \${formData.name.trim()} [Joy Digital]\`,
      };

      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      // Unified Conversion Tracking
      if (typeof window !== "undefined") {
        const tracker = (window as any).trackJoyDigitalEvent;
        if (typeof tracker === "function") {
          tracker("form_submit", {
            form_source: "Hero Booking Form",
            page_url: window.location.href,
          });
        }
      }

      const queryParams = new URLSearchParams({
        name: formData.name.trim(),
        service: "Free Website Consultation & Audit",
        mobile: formData.mobile.trim(),
      }).toString();

      router.push(\`/thank-you?\${queryParams}\`);
    } catch (err) {
      console.error(err);
      alert(\`Enquiry submission failed. Please email us at \${contactEmail} directly.\`);
    } finally {
      setIsLoading(false);
    }
  };`;

const newHandleSubmit = `  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (formData._honey) {
      router.push(\`/thank-you?name=\${encodeURIComponent(formData.name.trim())}\`);
      return;
    }

    setIsLoading(true);
    setSubmitError("");
    try {
      const utm = getUtmParameters();
      const payload = {
        Name: formData.name.trim(),
        Email: formData.email.trim() || "N/A",
        Mobile: formData.mobile.trim()
          ? (formData.mobile.trim().startsWith("+")
            ? formData.mobile.trim()
            : \`\${selectedCountryCode} \${formData.mobile.trim()}\`)
          : "N/A",
        Website: formData.website.trim() || "N/A",
        Service: "Free Website Consultation & Audit + Strategy Proposal",
        Source: "Hero Booking Consultation Form",
        utmParams: utm || undefined,
        _honey: formData._honey,
        _subject: \`⚡ Free Website Consultation & Audit Request - \${formData.name.trim()} [Joy Digital]\`,
      };

      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const resData = await response.json();
      if (!response.ok || !resData.success) {
        throw new Error(resData.error || "Failed to submit form");
      }

      // Unified Conversion Tracking
      if (typeof window !== "undefined") {
        const tracker = (window as any).trackJoyDigitalEvent;
        if (typeof tracker === "function") {
          tracker("form_submit", {
            form_source: "Hero Booking Form",
            page_url: window.location.href,
          });
        }
      }

      const queryParams = new URLSearchParams({
        name: formData.name.trim(),
        service: "Free Website Consultation & Audit",
        mobile: formData.mobile.trim(),
        email: formData.email.trim(),
      }).toString();

      router.push(\`/thank-you?\${queryParams}\`);
    } catch (err: any) {
      console.error(err);
      setSubmitError(err.message || \`Enquiry submission failed. Please contact \${contactEmail} directly.\`);
    } finally {
      setIsLoading(false);
    }
  };`;

hero = hero.replace(oldHandleSubmit, newHandleSubmit);

// Add Email Input Field and honeypot value to JSX
const oldHoneypot = `<input type="text" name="_honey" defaultValue="" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" readOnly />`;
const newHoneypot = `<input type="text" name="_honey" value={formData._honey} onChange={handleChange} style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />`;
hero = hero.replace(oldHoneypot, newHoneypot);

const oldNameField = `                {/* Field 1: Full Name */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="hero-name" className="text-[10px] font-extrabold text-slate-300 uppercase tracking-wider block">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <div className={\`flex items-center gap-2 bg-[#1A1433] border rounded-xl px-3 py-2.5 transition-all duration-300 focus-within:bg-[#1E173C] focus-within:border-[#7C3AED] focus-within:ring-4 focus-within:ring-[#7C3AED]/20 focus-within:shadow-[0_0_15px_rgba(124,58,237,0.2)] \${
                    errors.name ? "border-red-500/80 bg-red-950/10" : "border-[#2D2352]"
                  }\`}>
                    <User className="w-4 h-4 text-slate-400 shrink-0 transition-colors group-focus-within:text-[#A78BFA]" />
                    <input
                      type="text"
                      id="hero-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full text-xs bg-transparent outline-none text-white placeholder:text-slate-500 font-medium"
                    />
                  </div>
                  {errors.name && <span className="text-[10px] text-red-400 font-medium">{errors.name}</span>}
                </div>`;

const newNameAndEmailField = `                {/* Field 1: Full Name */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="hero-name" className="text-[10px] font-extrabold text-slate-300 uppercase tracking-wider block">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <div className={\`flex items-center gap-2 bg-[#1A1433] border rounded-xl px-3 py-2.5 transition-all duration-300 focus-within:bg-[#1E173C] focus-within:border-[#7C3AED] focus-within:ring-4 focus-within:ring-[#7C3AED]/20 focus-within:shadow-[0_0_15px_rgba(124,58,237,0.2)] \${
                    errors.name ? "border-red-500/80 bg-red-950/10" : "border-[#2D2352]"
                  }\`}>
                    <User className="w-4 h-4 text-slate-400 shrink-0 transition-colors group-focus-within:text-[#A78BFA]" />
                    <input
                      type="text"
                      id="hero-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full text-xs bg-transparent outline-none text-white placeholder:text-slate-500 font-medium"
                    />
                  </div>
                  {errors.name && <span className="text-[10px] text-red-400 font-medium">{errors.name}</span>}
                </div>

                {/* Field 2: Work Email */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="hero-email" className="text-[10px] font-extrabold text-slate-300 uppercase tracking-wider block">
                    Work Email <span className="text-slate-400 font-normal text-[9px] lowercase">(or Phone below)</span>
                  </label>
                  <div className={\`flex items-center gap-2 bg-[#1A1433] border rounded-xl px-3 py-2.5 transition-all duration-300 focus-within:bg-[#1E173C] focus-within:border-[#7C3AED] focus-within:ring-4 focus-within:ring-[#7C3AED]/20 focus-within:shadow-[0_0_15px_rgba(124,58,237,0.2)] \${
                    errors.email ? "border-red-500/80 bg-red-950/10" : "border-[#2D2352]"
                  }\`}>
                    <Mail className="w-4 h-4 text-slate-400 shrink-0 transition-colors group-focus-within:text-[#A78BFA]" />
                    <input
                      type="email"
                      id="hero-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full text-xs bg-transparent outline-none text-white placeholder:text-slate-500 font-medium"
                    />
                  </div>
                  {errors.email && <span className="text-[10px] text-red-400 font-medium">{errors.email}</span>}
                </div>`;

hero = hero.replace(oldNameField, newNameAndEmailField);

// Add submitError banner above action buttons
const oldActionButtons = `{/* Action Buttons Container */}
                <div className="flex flex-col gap-3 mt-2">`;

const newActionButtons = `{/* Submission Error Banner */}
                {submitError && (
                  <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-300 text-xs text-center font-medium">
                    {submitError}
                  </div>
                )}

                {/* Action Buttons Container */}
                <div className="flex flex-col gap-3 mt-2">`;

hero = hero.replace(oldActionButtons, newActionButtons);

fs.writeFileSync('components/sections/ModernHeroSection.tsx', hero, 'utf8');
console.log('Updated ModernHeroSection.tsx');

// 2. Update components/ui/LeadForm.tsx
let leadForm = fs.readFileSync('components/ui/LeadForm.tsx', 'utf8');
leadForm = leadForm.replace(/\r\n/g, '\n');

// Add submitError state
leadForm = leadForm.replace(
  'const [isSuccess, setIsSuccess] = useState(false);',
  'const [isSuccess, setIsSuccess] = useState(false);\n  const [submitError, setSubmitError] = useState("");'
);

// Update validateForm in LeadForm.tsx
const oldLeadValidate = `    if (!formData.name.trim()) {
      tempErrors.name = "Full Name is required.";
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Work Email is required.";
    } else {
      const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
      if (!emailReg.test(formData.email.trim())) {
        tempErrors.email = "Please enter a valid email address.";
      }
    }

    const mobileVal = formData.mobile.trim();
    if (mobileVal) {
      const numbersOnly = mobileVal.replace(/\\D/g, "");
      if (numbersOnly.length > 0 && numbersOnly.length < 7) {
        tempErrors.mobile = "Please enter a valid phone number.";
      }
    }`;

const newLeadValidate = `    if (!formData.name.trim()) {
      tempErrors.name = "Full Name is required.";
    }

    const emailTrim = formData.email.trim();
    const mobileTrim = formData.mobile.trim();

    if (!emailTrim && !mobileTrim) {
      tempErrors.email = "Please provide an email or phone number.";
      tempErrors.mobile = "Please provide a phone number or email.";
    }

    if (emailTrim) {
      const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
      if (!emailReg.test(emailTrim)) {
        tempErrors.email = "Please enter a valid email address.";
      }
    }

    if (mobileTrim) {
      const numbersOnly = mobileTrim.replace(/\\D/g, "");
      if (numbersOnly.length < 7) {
        tempErrors.mobile = "Please enter a valid phone number (at least 7 digits).";
      }
    }`;

leadForm = leadForm.replace(oldLeadValidate, newLeadValidate);

// Update handleChange in LeadForm.tsx
const oldLeadHandleChange = `  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };`;

const newLeadHandleChange = `  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if ((name === "email" || name === "mobile") && (errors.email || errors.mobile)) {
      setErrors((prev) => ({ ...prev, email: "", mobile: "" }));
    }
    if (submitError) setSubmitError("");
  };`;

leadForm = leadForm.replace(oldLeadHandleChange, newLeadHandleChange);

// Update handleSubmit error handling in LeadForm.tsx
leadForm = leadForm.replace(
  'setIsLoading(true);',
  'setIsLoading(true);\n    setSubmitError("");'
);

leadForm = leadForm.replace(
  `      if (!response.ok) {
        throw new Error("Failed to submit form");
      }`,
  `      const resData = await response.json();
      if (!response.ok || !resData.success) {
        throw new Error(resData.error || "Failed to submit form");
      }`
);

leadForm = leadForm.replace(
  `    } catch (err) {
      console.error(err);
      alert(\`Enquiry submission failed. Please try WhatsApp or email us at \${contactEmail}\`);
    }`,
  `    } catch (err: any) {
      console.error(err);
      setSubmitError(err.message || \`Enquiry submission failed. Please contact us via WhatsApp or email \${contactEmail}\`);
    }`
);

// Add submitError display before submit button in LeadForm
leadForm = leadForm.replace(
  `          {/* Submit Button */}`,
  `          {submitError && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-semibold text-center">
              {submitError}
            </div>
          )}

          {/* Submit Button */}`
);

fs.writeFileSync('components/ui/LeadForm.tsx', leadForm, 'utf8');
console.log('Updated LeadForm.tsx');
