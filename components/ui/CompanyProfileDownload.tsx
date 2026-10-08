"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const DocumentLeadModal = dynamic(() => import("@/components/ui/DocumentLeadModal"), {
  ssr: false,
});

interface DocumentItem {
  _id: string;
  title: string;
  fileUrl: string;
}

export default function CompanyProfileDownload() {
  const [latestDoc, setLatestDoc] = useState<DocumentItem | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchLatestDoc = async () => {
      try {
        const res = await fetch("/api/admin/documents");
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            setLatestDoc(data[0]);
          }
        }
      } catch (err) {
        console.error("Failed to fetch company profile", err);
      }
    };
    fetchLatestDoc();
  }, []);

  if (!latestDoc) {
    return null;
  }

  return (
    <>
      <li className="mt-2">
        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] text-white px-4 py-2 rounded font-bold text-sm transition-all w-full justify-center shadow-sm"
          title={`Download ${latestDoc.title}`}
        >
          <i className="fa-solid fa-cloud-arrow-down"></i>
          <span>Download Company Profile</span>
        </button>
      </li>

      {showModal && (
        <DocumentLeadModal
          documentId={latestDoc._id}
          documentTitle={latestDoc.title}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
