import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

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

    // Save download lead
    const lead = {
      documentId: objectId,
      documentTitle: doc.title,
      name: name.trim(),
      whatsapp: whatsapp.trim(),
      email: email?.trim() || "",
      ip,
      userAgent: req.headers.get("user-agent") || "",
      downloadedAt: new Date(),
    };

    await db.collection("document_leads").insertOne(lead);

    // Also save to main CRM enquiries so it shows up in the leads pipeline
    await db.collection("enquiries").insertOne({
      name: lead.name,
      phone: lead.whatsapp,
      email: lead.email,
      message: `Downloaded document: ${doc.title}`,
      source: "document_download",
      documentId: objectId,
      documentTitle: doc.title,
      ip,
      createdAt: new Date(),
      status: "new",
    });

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
