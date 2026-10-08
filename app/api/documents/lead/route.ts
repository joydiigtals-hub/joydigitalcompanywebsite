import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import fs from "fs";
import path from "path";

// POST: Capture lead details before document download
export async function POST(req: NextRequest) {
  try {
    const { documentId, name, whatsapp, email } = await req.json();

    if (!documentId || !name || !whatsapp) {
      return NextResponse.json({ error: "Name and WhatsApp are required." }, { status: 400 });
    }

    if (!process.env.MONGODB_URI) {
      // If no DB, just return the file URL so download can proceed
      return NextResponse.json({ success: true, noDb: true });
    }

    const db = await getDb();

    // Validate document exists
    let objectId: ObjectId;
    try {
      objectId = new ObjectId(documentId);
    } catch {
      return NextResponse.json({ error: "Invalid document ID" }, { status: 400 });
    }

    const doc = await db.collection("documents").findOneAndUpdate(
      { _id: objectId },
      { $inc: { downloadCount: 1 } },
      { returnDocument: "after" }
    );

    if (!doc) {
      return NextResponse.json({ error: "Document not found." }, { status: 404 });
    }

    // Get location info from request headers
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "Unknown";

    const cleanName = name.trim();
    const cleanPhone = whatsapp.trim();
    const cleanEmail = email?.trim() || "";
    const leadId = crypto.randomUUID();
    const nowIso = new Date().toISOString();

    // Save download lead
    const lead = {
      id: leadId,
      documentId: objectId,
      documentTitle: doc.title,
      name: cleanName,
      whatsapp: cleanPhone,
      email: cleanEmail,
      ip,
      userAgent: req.headers.get("user-agent") || "",
      downloadedAt: new Date(),
    };

    await db.collection("document_leads").insertOne(lead);

    // Also save to main CRM enquiries so it shows up seamlessly in the leads pipeline
    const enquiryRecord = {
      _id: leadId as any,
      id: leadId,
      name: cleanName,
      companyName: "Individual Lead",
      website: "N/A",
      email: cleanEmail,
      mobile: cleanPhone,
      phone: cleanPhone,
      service: `Document: ${doc.title}`,
      message: `Downloaded document: ${doc.title}${cleanEmail ? `\nEmail: ${cleanEmail}` : ""}\nWhatsApp: ${cleanPhone}`,
      source: "Company Profile Download",
      region: "Tamil Nadu, IN",
      status: "New",
      createdAt: nowIso,
      notes: `Downloaded ${doc.title}`,
      followUpDate: null,
      pipelineStage: "new",
      assignedTo: "",
      documentId: objectId,
      documentTitle: doc.title,
      ip,
      utmParams: null,
      activities: [
        {
          id: crypto.randomUUID(),
          timestamp: nowIso,
          type: "created",
          message: `Lead registered via Document Download (${doc.title})`,
          agent: "System",
        },
      ],
      proposals: [],
      irrelevantReason: "",
    };

    await db.collection("enquiries").insertOne(enquiryRecord);

    // Also save locally as fallback
    try {
      const DATA_FILE = path.join(process.cwd(), "data", "enquiries.json");
      const DATA_DIR = path.dirname(DATA_FILE);
      if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
      }
      let enquiries = [];
      if (fs.existsSync(DATA_FILE)) {
        try {
          enquiries = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
        } catch {
          enquiries = [];
        }
      }
      enquiries.unshift(enquiryRecord);
      fs.writeFileSync(DATA_FILE, JSON.stringify(enquiries, null, 2), "utf-8");
    } catch {
      // ignore
    }

    return NextResponse.json({
      success: true,
      fileUrl: doc.fileUrl,
    });
  } catch (error: any) {
    console.error("Error saving download lead:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// GET: List all download leads for admin (optionally filtered by documentId)
export async function GET(req: NextRequest) {
  try {
    if (!process.env.MONGODB_URI) {
      return NextResponse.json([]);
    }

    const { searchParams } = new URL(req.url);
    const documentId = searchParams.get("documentId");

    const db = await getDb();
    const query = documentId
      ? { documentId: new ObjectId(documentId) }
      : {};

    const leads = await db
      .collection("document_leads")
      .find(query)
      .sort({ downloadedAt: -1 })
      .toArray();

    return NextResponse.json(leads);
  } catch (error: any) {
    console.error("Error fetching download leads:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
