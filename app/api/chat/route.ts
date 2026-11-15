import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "chat_sessions.json");
const ENQUIRIES_FILE = path.join(process.cwd(), "data", "enquiries.json");

// Helpers to read/write local chat sessions (fallback)
function readLocalChatSessions() {
  if (!fs.existsSync(DATA_FILE)) return [];
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
  } catch (e) {
    return [];
  }
}

function writeLocalChatSessions(data: any) {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
}

// Helpers to write enquiries locally (fallback)
function readLocalEnquiries() {
  if (!fs.existsSync(ENQUIRIES_FILE)) return [];
  try {
    return JSON.parse(fs.readFileSync(ENQUIRIES_FILE, "utf-8"));
  } catch (e) {
    return [];
  }
}

function writeLocalEnquiries(data: any) {
  fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(data, null, 2), "utf-8");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { sessionId, messages, leadDetails } = body;

    if (!sessionId) {
      return NextResponse.json({ error: "Missing sessionId" }, { status: 400 });
    }

    const MONGODB_URI = process.env.MONGODB_URI;
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

    // 1. If leadDetails is present (from callback form), create a lead in enquiries linked to this chatSessionId
    let createdLeadId = "";
    if (leadDetails) {
      const newLead = {
        id: crypto.randomUUID(),
        name: leadDetails.name,
        companyName: "N/A",
        website: "N/A",
        email: leadDetails.email || "no-email@chat.com",
        mobile: leadDetails.mobile,
        service: leadDetails.service || "AI Chatbot Inquiry",
        message: leadDetails.message || `Callback request from AI Chat. Session Reference: ${sessionId}`,
        source: "AI Chatbot Widget",
        region: "GLOBAL",
        status: "New",
        createdAt: new Date().toISOString(),
        notes: "Lead registered via floating chatbot callback form.",
        pipelineStage: "new",
        assignedTo: "",
        chatSessionId: sessionId,
        activities: [
          {
            id: crypto.randomUUID(),
            timestamp: new Date().toISOString(),
            type: "created",
            message: "Lead automatically captured via AI Chat callback form",
            agent: "System AI"
          }
        ]
      };

      createdLeadId = newLead.id;

      if (MONGODB_URI) {
        try {
          const { getDb } = await import("@/lib/mongodb");
          const db = await getDb();
          await db.collection("enquiries").insertOne({
            _id: newLead.id as any,
            ...newLead
          });
        } catch (dbError) {
          console.error("Failed saving chatbot lead to MongoDB, fallback to local:", dbError);
          const enquiries = readLocalEnquiries();
          enquiries.unshift(newLead);
          writeLocalEnquiries(enquiries);
        }
      } else {
        const enquiries = readLocalEnquiries();
        enquiries.unshift(newLead);
        writeLocalEnquiries(enquiries);
      }
    }

    // 2. Scan conversation history for phone number to auto-capture leads in background
    const phoneRegex = /(\+?\d{1,4}[-.\s]??)?(\d{10})/g;
    const userMsgs = (messages || []).filter((m: any) => m.role === "user");
    const allUserTexts = userMsgs.map((m: any) => m.content || m.text || "").join(" ");
    const matches = allUserTexts.match(phoneRegex);
    
    if (matches && matches.length > 0 && !leadDetails) {
      // Check if we already created a lead for this chat session
      let existingLead = null;
      if (MONGODB_URI) {
        try {
          const { getDb } = await import("@/lib/mongodb");
          const db = await getDb();
          existingLead = await db.collection("enquiries").findOne({ chatSessionId: sessionId });
        } catch (e) {}
      } else {
        const enquiries = readLocalEnquiries();
        existingLead = enquiries.find((e: any) => e.chatSessionId === sessionId);
      }
      
      if (!existingLead) {
        // Find custom name if shared
        let clientName = "Visitor via AI Chat";
        if (userMsgs.length >= 2) {
          // If a message is short and doesn't contain standard keywords, it might be the name
          for (let i = 0; i < Math.min(3, userMsgs.length); i++) {
            const txt = userMsgs[i].content || userMsgs[i].text || "";
            const textClean = txt.replace(/my name is|i am|i'm|hello|hi|hey/gi, "").trim();
            if (textClean && textClean.split(" ").length <= 3 && !textClean.match(/\d/)) {
              clientName = textClean;
              break;
            }
          }
        }
        
        const autoLead = {
          id: crypto.randomUUID(),
          name: clientName,
          companyName: "N/A",
          website: "N/A",
          email: "no-email@chat.com",
          mobile: matches[0],
          service: "AI Chat Conversational Inbound",
          message: `Lead automatically captured from AI chatbot conversation history.\nFull transcript ID: ${sessionId}`,
          source: "AI Chatbot Widget",
          region: "GLOBAL",
          status: "New",
          createdAt: new Date().toISOString(),
          notes: "Lead auto-generated by AI scanning phone number in chat history.",
          pipelineStage: "new",
          assignedTo: "",
          chatSessionId: sessionId,
          activities: [
            {
              id: crypto.randomUUID(),
              timestamp: new Date().toISOString(),
              type: "created",
              message: "Lead automatically captured via conversational phone match",
              agent: "System AI"
            }
          ]
        };

        if (MONGODB_URI) {
          try {
            const { getDb } = await import("@/lib/mongodb");
            const db = await getDb();
            await db.collection("enquiries").insertOne({
              _id: autoLead.id as any,
              ...autoLead
            });
            createdLeadId = autoLead.id;
          } catch (dbError) {
            const enquiries = readLocalEnquiries();
            enquiries.unshift(autoLead);
            writeLocalEnquiries(enquiries);
          }
        } else {
          const enquiries = readLocalEnquiries();
          enquiries.unshift(autoLead);
          writeLocalEnquiries(enquiries);
        }
      }
    }

    // 3. Generate Bot Response
    let botReply = "";

    if (GEMINI_API_KEY) {
      try {
        const systemPrompt = `You are Priya, a friendly, warm, and highly professional client support assistant at Joy Digital, a premium web design and SEO agency. Act as a human assistant, NOT a robot.
        
        Converse naturally, using warm human expressions (like 😊, 👍, or "Sure!"). You can use friendly English mixed with light Tamil/Tanglish expressions if the user speaks in Tamil or asks questions.
        
        Goal:
        - Chat naturally, answer their questions briefly (1-2 sentences at a time). Do NOT dump long list walls or bullet lists.
        - Politely ask for their name early in the conversation if they haven't shared it.
        - Once you know their name, ask what service they are interested in (Web Design, E-commerce, or SEO).
        - Politely ask for their Mobile Phone number and Email address so Saravanan (the agency head) can contact them directly.
        - Once they share their phone/mobile number, confirm you have logged it and say: "Great! I have registered your callback request in our system. Saravanan from our tech team will call you shortly!"
        
        Agency Pricing Policy:
        - NEVER quote fixed flat prices or price ranges in chat. Website investment is completely customized based on the visitor's industry, business size, scope of pages, and technical features.
        - Explain that every business is unique, and guide the visitor to share their name, business name, and mobile/WhatsApp number so our technical lead Saravanan can analyze their specific requirements and share a tailored proposal & exact quote.
        - Location: Chennai & Madurai, Tamil Nadu, India.
        
        Rules:
        - Never state you are an AI or language model. If asked, say you are Priya from the Joy Digital client support desk.
        - Do not output tables. Keep responses conversational, short, and engaging.
        - Ask one follow-up question per response to guide them to share contact info.`;

        // Map messages history to Gemini role formats (user / model)
        const contents = (messages || []).map((m: any) => ({
          role: m.role === "assistant" ? "model" : "user",
          parts: [{ text: m.content || m.text }]
        }));

        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              systemInstruction: {
                parts: [{ text: systemPrompt }]
              },
              contents: contents
            })
          }
        );

        if (response.ok) {
          const resData = await response.json();
          botReply = resData.candidates?.[0]?.content?.parts?.[0]?.text || "I apologize, but I couldn't generate content right now.";
        } else {
          const errorText = await response.text();
          console.error("Gemini API Error details:", errorText);
          botReply = "I am having some connection delays with my core services. Please request a callback or try again later!";
        }
      } catch (geminiError) {
        console.error("Error calling Gemini API:", geminiError);
        botReply = "I am temporarily offline. Please use the 'Request Callback' quick reply button above to leave your contact info!";
      }
    } else {
      // 4. INTELLIGENT CONVERSATIONAL DECISION ENGINE (Full Joy Digital Knowledge Base + Tanglish & Tamil Support)
      const lastUserText = userMsgs[userMsgs.length - 1]?.content || userMsgs[userMsgs.length - 1]?.text || "";
      const lastUserTextLower = lastUserText.toLowerCase().trim();
      const assistantMsgs = (messages || []).filter((m: any) => m.role === "assistant");
      const hasPhone = phoneRegex.test(lastUserText);

      // Check if user is asking in Tamil or Tanglish
      const isTamilOrTanglish = /(evlo|evvalavu|ennaku|enga|irukinga|pannunga|panna|venum|sollunga|eppadi|epdi|theriyuma|aagum|naal|ungalukku|namma)/i.test(lastUserTextLower);

      if (hasPhone) {
        if (isTamilOrTanglish) {
          botReply = `Super! Unga number note pannikitom 👍 Namma technical lead Saravanan sir ungaluku shortly call panni discuss pannuvanga. Or neenga direct-ah WhatsApp-layum pesalam!`;
        } else {
          botReply = `Awesome! I have securely recorded your number 👍 Saravanan from our technical leadership team will connect with you shortly to share the exact proposal. Have a wonderful day!`;
        }
      } else if (
        lastUserTextLower.includes("price") ||
        lastUserTextLower.includes("pricing") ||
        lastUserTextLower.includes("cost") ||
        lastUserTextLower.includes("rate") ||
        lastUserTextLower.includes("package") ||
        lastUserTextLower.includes("budget") ||
        lastUserTextLower.includes("evlo") ||
        lastUserTextLower.includes("evvalavu")
      ) {
        if (isTamilOrTanglish) {
          botReply = `Website pricing unga industry, business size, matrum required features (Pages, SEO, animations, integrations) poruthu marupadum. Unga business-ku custom proposal & transparent quote anuppa unga Name, Business name & WhatsApp number share pannunga! Namma technical lead Saravanan sir ungaluku direct-ah send pannuvanga 🚀`;
        } else {
          botReply = `Website pricing is completely tailored based on your industry, business size, and specific feature scope (number of pages, custom design, SEO, integrations). To provide an accurate proposal tailored to your business, could you share your Name, Business name, and WhatsApp number? Our technical lead Saravanan will connect with you directly with a detailed proposal 🚀`;
        }
      } else if (
        lastUserTextLower.includes("time") ||
        lastUserTextLower.includes("timeline") ||
        lastUserTextLower.includes("duration") ||
        lastUserTextLower.includes("how long") ||
        lastUserTextLower.includes("naal") ||
        lastUserTextLower.includes("days")
      ) {
        if (isTamilOrTanglish) {
          botReply = `Landing pages 3 to 5 days-layum, full business websites 7 to 12 days-layum complete panni delivery panrom ⏱️ Unga project launch eppo irukanum? Unga mobile number share pannunga, pesalam!`;
        } else {
          botReply = `Landing pages take 3–5 business days, and complete corporate business sites take 7–12 days from design approval to live deployment ⏱️ When are you looking to launch? Please share your phone number so we can schedule it!`;
        }
      } else if (
        lastUserTextLower.includes("seo") ||
        lastUserTextLower.includes("google") ||
        lastUserTextLower.includes("rank") ||
        lastUserTextLower.includes("traffic")
      ) {
        if (isTamilOrTanglish) {
          botReply = `Kandippa! Namma Technical SEO, Local SEO & Google Business Profile ranking-la Google Page 1 traffic generate panni tharrom 📈 Unga existing website URL & WhatsApp number kudunga, free audit pannalam!`;
        } else {
          botReply = `We specialize in Technical SEO, Core Web Vitals optimization, and Google Local Ranking to get your brand to Page 1 📈 Share your website URL and WhatsApp number for a complimentary audit report!`;
        }
      } else if (
        lastUserTextLower.includes("who runs") ||
        lastUserTextLower.includes("founder") ||
        lastUserTextLower.includes("saravanan") ||
        lastUserTextLower.includes("owner") ||
        lastUserTextLower.includes("team")
      ) {
        botReply = "Joy Digital was founded by Saravanan L, a senior web architect based out of Chennai, serving clients across India, USA, UK, UAE, and Australia 🌐 May I know your name and what project you're planning?";
      } else if (
        lastUserTextLower.includes("location") ||
        lastUserTextLower.includes("address") ||
        lastUserTextLower.includes("chennai") ||
        lastUserTextLower.includes("madurai") ||
        lastUserTextLower.includes("office") ||
        lastUserTextLower.includes("enga")
      ) {
        botReply = "Joy Digital is headquartered in Chennai with operations in Madurai, Tamil Nadu, serving businesses worldwide 📍 You can visit us or connect directly via WhatsApp/Call at +91 90800 26133!";
      } else if (
        lastUserTextLower.includes("next.js") ||
        lastUserTextLower.includes("tech") ||
        lastUserTextLower.includes("wordpress") ||
        lastUserTextLower.includes("react")
      ) {
        botReply = "We engineer modern Next.js 16 websites that score 95+ on Google PageSpeed, load under 1 second, and outperform WordPress in security and organic SEO ⚡ Would you like to see a live demo?";
      } else {
        const askedName = assistantMsgs.some((m: any) => (m.content || m.text || "").toLowerCase().includes("your name") || (m.content || m.text || "").toLowerCase().includes("who i'm chatting"));
        const askedPhone = assistantMsgs.some((m: any) => (m.content || m.text || "").toLowerCase().includes("phone") || (m.content || m.text || "").toLowerCase().includes("mobile") || (m.content || m.text || "").toLowerCase().includes("number"));

        if (!askedName) {
          if (isTamilOrTanglish) {
            botReply = "Kandippa help panren! Unga Name therinjukalama? 😊";
          } else {
            botReply = "I'd love to help you with that! May I know your name first? 😊";
          }
        } else if (!askedPhone) {
          const userName = lastUserText.replace(/my name is|i am|i'm|peru|name is/gi, "").trim();
          if (isTamilOrTanglish) {
            botReply = `Vanakkam ${userName || "there"}! 👋 Unga requirement pathi pesi accurate quotation anuppa unga WhatsApp / Mobile number share pannunga!`;
          } else {
            botReply = `Great to meet you, ${userName || "there"}! 👋 Could you share your WhatsApp or mobile number? Saravanan from our engineering desk will connect with you directly.`;
          }
        } else {
          botReply = "Got it! Please share your 10-digit WhatsApp or mobile number so we can reach out with the project details.";
        }
      }
    }

    // 5. Save the chat session transcript in the database / local file
    const newChatSession = {
      sessionId,
      name: leadDetails?.name || (userMsgs.length >= 2 ? (userMsgs[1].content || userMsgs[1].text || "").replace(/my name is|i am|i'm/gi, "").trim().substring(0, 30) : "Anonymous Visitor"),
      email: leadDetails?.email || "",
      mobile: leadDetails?.mobile || (matches ? matches[0] : ""),
      messages: [
        ...(messages || []).map((m: any) => ({
          role: m.role,
          text: m.content || m.text,
          timestamp: new Date().toISOString()
        })),
        {
          role: "assistant",
          text: botReply,
          timestamp: new Date().toISOString()
        }
      ],
      leadId: createdLeadId || "",
      updatedAt: new Date().toISOString()
    };

    if (MONGODB_URI) {
      try {
        const { getDb } = await import("@/lib/mongodb");
        const db = await getDb();
        
        await db.collection("chat_sessions").updateOne(
          { sessionId: sessionId },
          { 
            $set: {
              name: newChatSession.name !== "Anonymous Visitor" ? newChatSession.name : undefined,
              email: newChatSession.email || undefined,
              mobile: newChatSession.mobile || undefined,
              messages: newChatSession.messages,
              leadId: newChatSession.leadId || undefined,
              updatedAt: newChatSession.updatedAt
            },
            $setOnInsert: {
              sessionId: sessionId,
              createdAt: new Date().toISOString()
            }
          },
          { upsert: true }
        );
      } catch (dbError) {
        console.error("Failed saving chat session to MongoDB, fallback to local:", dbError);
        saveLocalChatSession(newChatSession);
      }
    } else {
      saveLocalChatSession(newChatSession);
    }

    return NextResponse.json({ reply: botReply });
  } catch (error: any) {
    console.error("Chatbot API Exception:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Local chat session persistence utility
function saveLocalChatSession(session: any) {
  const sessions = readLocalChatSessions();
  const existingIdx = sessions.findIndex((s: any) => s.sessionId === session.sessionId);
  if (existingIdx > -1) {
    sessions[existingIdx] = {
      ...sessions[existingIdx],
      name: session.name !== "Anonymous Visitor" ? session.name : sessions[existingIdx].name,
      email: session.email || sessions[existingIdx].email,
      mobile: session.mobile || sessions[existingIdx].mobile,
      messages: session.messages,
      leadId: session.leadId || sessions[existingIdx].leadId,
      updatedAt: session.updatedAt
    };
  } else {
    sessions.unshift({
      ...session,
      createdAt: new Date().toISOString()
    });
  }
  writeLocalChatSessions(sessions);
}
