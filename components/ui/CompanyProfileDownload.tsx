"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface DocumentItem {
  _id: string;
  title: string;
  fileUrl: string;
}

export default function CompanyProfileDownload() {
  const [latestDoc, setLatestDoc] = useState<DocumentItem | null>(null);

  useEffect(() => {
    const fetchLatestDoc = async () => {
      try {
        const res = await fetch("/api/admin/documents");
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            setLatestDoc(data[0]); // Just pick the latest uploaded document
          }
        }
      } catch (err) {
        console.error("Failed to fetch company profile", err);
      }
    };
    fetchLatestDoc();
  }, []);

  if (!latestDoc) {
    return null; // Don't render anything if there's no document uploaded
  }

  return (
    <li className="mt-2">
      <Link
        href={`/api/documents/download?id=${latestDoc._id}`}
        target="_blank"
        className="inline-flex items-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] text-white px-4 py-2 rounded font-bold text-sm transition-all w-full justify-center shadow-sm"
        title={`Download ${latestDoc.title}`}
      >
        <i className="fa-solid fa-cloud-arrow-down"></i>
        <span>Download Company Profile</span>
      </Link>
    </li>
  );
}
