const fs = require('fs');

// 1. Update app/api/enquiry/route.ts
let enquiryApi = fs.readFileSync('app/api/enquiry/route.ts', 'utf8');

const oldValidation = `    // 2. Server-side validation
    const name = body.Name || body.name;
    const email = body.Email || body.email;
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and Work Email are required fields." },
        { status: 400 }
      );
    }`;

const newValidation = `    // 2. Server-side validation: Name AND (Email OR Phone/Mobile)
    const name = (body.Name || body.name || "").toString().trim();
    const email = (body.Email || body.email || "").toString().trim();
    const mobile = (body.Mobile || body.mobile || "").toString().trim();

    if (!name) {
      return NextResponse.json(
        { success: false, error: "Full Name is required." },
        { status: 400 }
      );
    }

    const hasValidEmail = email && email !== "N/A";
    const hasValidMobile = mobile && mobile !== "N/A";

    if (!hasValidEmail && !hasValidMobile) {
      return NextResponse.json(
        { success: false, error: "Please provide either a valid Work Email or Phone number to contact you." },
        { status: 400 }
      );
    }

    if (hasValidEmail) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { success: false, error: "Please provide a valid email address format (e.g. name@domain.com)." },
          { status: 400 }
        );
      }
    }

    if (hasValidMobile) {
      const digitsOnly = mobile.replace(/\\D/g, "");
      if (digitsOnly.length < 7) {
        return NextResponse.json(
          { success: false, error: "Please enter a valid phone number with country/area digits (at least 7 digits)." },
          { status: 400 }
        );
      }
    }`;

enquiryApi = enquiryApi.replace(/\r\n/g, '\n');
const normalizedOldVal = oldValidation.replace(/\r\n/g, '\n');
if (enquiryApi.includes(normalizedOldVal)) {
  enquiryApi = enquiryApi.replace(normalizedOldVal, newValidation);
  fs.writeFileSync('app/api/enquiry/route.ts', enquiryApi, 'utf8');
  console.log('Updated app/api/enquiry/route.ts');
} else {
  console.error('Could not find oldValidation in app/api/enquiry/route.ts');
}

// 2. Update app/api/send-lead/route.ts
let sendLeadApi = fs.readFileSync('app/api/send-lead/route.ts', 'utf8');
sendLeadApi = sendLeadApi.replace(/\r\n/g, '\n');
sendLeadApi = sendLeadApi.replace(
  'if (!name || !mobile || !email || !service)',
  'if (!name || (!mobile && !email))'
);
sendLeadApi = sendLeadApi.replace(
  '{ success: false, error: "Missing required fields (Name, Mobile, Email, Service)." }',
  '{ success: false, error: "Missing required fields. Name and at least one contact channel (Email or Mobile) are required." }'
);
fs.writeFileSync('app/api/send-lead/route.ts', sendLeadApi, 'utf8');
console.log('Updated app/api/send-lead/route.ts');
