import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return new NextResponse("Missing document ID", { status: 400 });
    }

    if (!process.env.MONGODB_URI) {
      return new NextResponse("Database connection error", { status: 500 });
    }

    const db = await getDb();
    const documentsCol = db.collection("documents");

    let objectId;
    try {
      objectId = new ObjectId(id);
    } catch (e) {
      return new NextResponse("Invalid document ID", { status: 400 });
    }

    // Find the document and increment the downloadCount
    const result = await documentsCol.findOneAndUpdate(
      { _id: objectId },
      { $inc: { downloadCount: 1 } },
      { returnDocument: "after" }
    );

    const document = result;
    if (!document) {
      return new NextResponse("Document not found", { status: 404 });
    }

    // Redirect to the actual file URL
    // If it's a relative path (local file), we redirect to the origin + path
    const url = new URL(document.fileUrl, req.url);
    return NextResponse.redirect(url.toString());

  } catch (error: any) {
    console.error("Error downloading document:", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
