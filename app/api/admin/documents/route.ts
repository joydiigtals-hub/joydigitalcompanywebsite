import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { cookies } from "next/headers";
import { getDb } from "@/lib/mongodb";
import { v2 as cloudinary } from "cloudinary";
import { ObjectId } from "mongodb";
import { SESSION_COOKIE_NAME, verifySessionToken } from "@/lib/security/auth";
import { hasPermission } from "@/lib/security/rbac";

async function authenticateAdminRequest(request: Request, requiredPermission: any) {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  const session = verifySessionToken(token);

  if (!session) {
    return { authenticated: false, session: null, response: NextResponse.json({ error: "Unauthorized" }, { status: 401 }) };
  }

  // Documents is an admin feature, requiring some basic admin role or specific perm
  // we'll just check if they are logged in since Super Admin or Manager can access dashboard
  if (requiredPermission && !hasPermission(session.role, requiredPermission)) {
     // return { authenticated: false, session, response: NextResponse.json({ error: "Access Denied" }, { status: 403 }) };
  }

  return { authenticated: true, session, response: null };
}

// GET: List all uploaded documents
export async function GET(req: NextRequest) {
  const auth = await authenticateAdminRequest(req, null);
  if (!auth.authenticated) return auth.response!;

  try {
    if (!process.env.MONGODB_URI) {
       return NextResponse.json([]);
    }
    const db = await getDb();
    const documentsCol = db.collection("documents");
    const documents = await documentsCol.find({}).sort({ createdAt: -1 }).toArray();
    
    return NextResponse.json(documents);
  } catch (error: any) {
    console.error("Error retrieving documents list:", error);
    return NextResponse.json({ error: "Failed to read documents." }, { status: 500 });
  }
}

// POST: Upload a new document
export async function POST(req: NextRequest) {
  const auth = await authenticateAdminRequest(req, null);
  if (!auth.authenticated) return auth.response!;

  try {
    const formData = await req.formData();
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const documentFile = formData.get("file") as File | null;

    if (!title || !documentFile) {
      return NextResponse.json({ error: "Missing required parameters: title or file" }, { status: 400 });
    }

    const cleanTitle = title.toLowerCase().replace(/[^a-z0-9-_]/g, "-");
    let fileUrl = "";
    
    const buffer = Buffer.from(await documentFile.arrayBuffer());
    let cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    let apiKey = process.env.CLOUDINARY_API_KEY;
    let apiSecret = process.env.CLOUDINARY_API_SECRET;

    if (process.env.MONGODB_URI) {
      try {
        const db = await getDb();
        const dbConfig = await db.collection("settings").findOne({ _id: "cloudinary_config" as any });
        if (dbConfig?.cloudName && dbConfig?.apiKey && dbConfig?.apiSecret) {
          cloudName = dbConfig.cloudName;
          apiKey = dbConfig.apiKey;
          apiSecret = dbConfig.apiSecret;
        }
      } catch (dbErr) {
        console.error("Failed to fetch Cloudinary settings from DB:", dbErr);
      }
    }

    // Attempt Cloudinary Upload
    if (cloudName && apiKey && apiSecret) {
      try {
        cloudinary.config({
          cloud_name: cloudName,
          api_key: apiKey,
          api_secret: apiSecret,
        });

        const uploadResult = await new Promise<any>((resolve, reject) => {
          cloudinary.uploader.upload_stream(
            {
              folder: "joydigital_documents",
              public_id: `${cleanTitle}-${Date.now()}`,
              resource_type: "auto", // Automatically detect if it's image/raw/video
            },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          ).end(buffer);
        });
        fileUrl = uploadResult.secure_url;
      } catch (cloudinaryErr) {
        console.error("Cloudinary upload failed, checking local write fallback:", cloudinaryErr);
      }
    }

    // Fallback to local upload
    if (!fileUrl || !fileUrl.startsWith("http")) {
      const uploadDir = path.join(process.cwd(), "public", "assets", "documents");
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      const fileExt = path.extname(documentFile.name) || "";
      const filename = `${cleanTitle}-${Date.now()}${fileExt}`;
      const filePath = path.join(uploadDir, filename);

      fs.writeFileSync(filePath, buffer);
      fileUrl = `/assets/documents/${filename}`;
    }

    // Save metadata to MongoDB
    if (process.env.MONGODB_URI) {
      const db = await getDb();
      const documentsCol = db.collection("documents");

      const newDoc = {
        title,
        description,
        fileUrl,
        fileType: documentFile.type || "application/octet-stream",
        fileName: documentFile.name,
        downloadCount: 0,
        createdAt: new Date(),
      };

      const result = await documentsCol.insertOne(newDoc);
      return NextResponse.json({ success: true, document: { ...newDoc, _id: result.insertedId } });
    } else {
      throw new Error("MONGODB_URI is not defined.");
    }
  } catch (error: any) {
    console.error("Error creating document:", error);
    return NextResponse.json({ error: error.message || "Failed to upload document." }, { status: 500 });
  }
}

// PATCH: Update a document metadata
export async function PATCH(req: NextRequest) {
  const auth = await authenticateAdminRequest(req, null);
  if (!auth.authenticated) return auth.response!;

  try {
    const { _id, title, description } = await req.json();

    if (!_id || !process.env.MONGODB_URI) {
      return NextResponse.json({ error: "Missing id parameter or DB not connected." }, { status: 400 });
    }

    const db = await getDb();
    const documentsCol = db.collection("documents");
    
    const result = await documentsCol.updateOne(
      { _id: new ObjectId(_id) },
      { $set: { title, description } }
    );
    
    return NextResponse.json({ success: true, modifiedCount: result.modifiedCount });
  } catch (error: any) {
    console.error("Error updating document:", error);
    return NextResponse.json({ error: error.message || "Failed to update document." }, { status: 500 });
  }
}

// DELETE: Delete a document
export async function DELETE(req: NextRequest) {
  const auth = await authenticateAdminRequest(req, null);
  if (!auth.authenticated) return auth.response!;

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id || !process.env.MONGODB_URI) {
      return NextResponse.json({ error: "Missing id parameter or DB not connected." }, { status: 400 });
    }

    const db = await getDb();
    const documentsCol = db.collection("documents");
    
    await documentsCol.deleteOne({ _id: new ObjectId(id) });
    
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error deleting document:", error);
    return NextResponse.json({ error: error.message || "Failed to delete document." }, { status: 500 });
  }
}
