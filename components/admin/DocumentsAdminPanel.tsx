import React, { useState, useEffect, useRef } from "react";

interface DocumentItem {
  _id: string;
  title: string;
  description: string;
  fileUrl: string;
  fileType: string;
  fileName: string;
  downloadCount: number;
  createdAt: string;
}

interface DownloadLead {
  _id: string;
  documentTitle: string;
  name: string;
  whatsapp: string;
  email: string;
  ip: string;
  downloadedAt: string;
}

export default function DocumentsAdminPanel() {
  const [documents, setDocuments] = useState<DocumentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [title, setTitle] = useState("");
  const [editingDocId, setEditingDocId] = useState<string | null>(null);
  const [description, setDescription] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Download leads state
  const [selectedDocForLeads, setSelectedDocForLeads] = useState<DocumentItem | null>(null);
  const [leads, setLeads] = useState<DownloadLead[]>([]);
  const [leadsLoading, setLeadsLoading] = useState(false);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/documents");
      if (res.ok) {
        const data = await res.json();
        setDocuments(data);
      } else {
        setErrorMsg("Failed to load documents.");
      }
    } catch (err) {
      setErrorMsg("Error fetching documents.");
    } finally {
      setLoading(false);
    }
  };

  const fetchLeads = async (doc: DocumentItem) => {
    setSelectedDocForLeads(doc);
    setLeadsLoading(true);
    setLeads([]);
    try {
      const res = await fetch(`/api/documents/lead?documentId=${doc._id}`);
      if (res.ok) {
        const data = await res.json();
        setLeads(data);
      }
    } catch {
      // ignore
    } finally {
      setLeadsLoading(false);
    }
  };

  const handleEdit = (doc: DocumentItem) => {
    setEditingDocId(doc._id);
    setTitle(doc.title);
    setDescription(doc.description);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelEdit = () => {
    setEditingDocId(null);
    setTitle("");
    setDescription("");
    if (fileInputRef.current) fileInputRef.current.value = "";
    setErrorMsg("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) {
      setErrorMsg("Title is required.");
      return;
    }

    if (editingDocId) {
      setIsUploading(true);
      setErrorMsg("");
      try {
        const res = await fetch("/api/admin/documents", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ _id: editingDocId, title, description }),
        });
        if (res.ok) {
          cancelEdit();
          await fetchDocuments();
        } else {
          const errData = await res.json();
          setErrorMsg(errData.error || "Update failed.");
        }
      } catch (err) {
        setErrorMsg("An error occurred during update.");
      } finally {
        setIsUploading(false);
      }
      return;
    }

    const file = fileInputRef.current?.files?.[0];
    if (!file) {
      setErrorMsg("Please select a file to upload.");
      return;
    }

    setIsUploading(true);
    setErrorMsg("");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", file);

    try {
      const res = await fetch("/api/admin/documents", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        cancelEdit();
        await fetchDocuments();
      } else {
        const errData = await res.json();
        setErrorMsg(errData.error || "Upload failed.");
      }
    } catch (err) {
      setErrorMsg("An error occurred during upload.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this document?")) return;

    try {
      const res = await fetch(`/api/admin/documents?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setDocuments((prev) => prev.filter((d) => d._id !== id));
        if (selectedDocForLeads?._id === id) setSelectedDocForLeads(null);
      } else {
        alert("Failed to delete document.");
      }
    } catch (err) {
      alert("An error occurred during deletion.");
    }
  };

  const copyToClipboard = (id: string) => {
    const url = `${window.location.origin}/api/documents/download?id=${id}`;
    navigator.clipboard.writeText(url);
    alert("Download link copied to clipboard!");
  };

  if (loading) {
    return <div className="p-8 text-center text-slate-500">Loading documents...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Upload Section */}
      <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
          {editingDocId ? "Edit Document Metadata" : "Upload New Document"}
        </h3>
        {errorMsg && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">{errorMsg}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Title *</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Company Profile 2026"
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Description</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Brief description..."
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          {!editingDocId && (
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                File (PPT, PDF, DOCX) *
              </label>
              <input
                type="file"
                ref={fileInputRef}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                required
              />
            </div>
          )}

          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={isUploading}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg disabled:opacity-50"
            >
              {isUploading
                ? editingDocId
                  ? "Updating..."
                  : "Uploading..."
                : editingDocId
                ? "Update Metadata"
                : "Upload Document"}
            </button>
            {editingDocId && (
              <button
                type="button"
                onClick={cancelEdit}
                className="px-6 py-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-white font-medium rounded-lg"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Documents List */}
      <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Uploaded Documents</h3>

        {documents.length === 0 ? (
          <p className="text-slate-500">No documents uploaded yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800">
                  <th className="py-3 px-4 font-semibold text-slate-600 dark:text-slate-400">Title</th>
                  <th className="py-3 px-4 font-semibold text-slate-600 dark:text-slate-400">File Type</th>
                  <th className="py-3 px-4 font-semibold text-slate-600 dark:text-slate-400">Downloads</th>
                  <th className="py-3 px-4 font-semibold text-slate-600 dark:text-slate-400">Date Added</th>
                  <th className="py-3 px-4 font-semibold text-slate-600 dark:text-slate-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc) => (
                  <tr
                    key={doc._id}
                    className="border-b border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                  >
                    <td className="py-3 px-4">
                      <p className="font-medium text-slate-900 dark:text-white">{doc.title}</p>
                      {doc.description && <p className="text-sm text-slate-500">{doc.description}</p>}
                    </td>
                    <td className="py-3 px-4 text-slate-600 dark:text-slate-400">
                      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs">
                        {doc.fileName?.split(".").pop()?.toUpperCase() || "FILE"}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold">
                        {doc.downloadCount}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-600 dark:text-slate-400">
                      {new Date(doc.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1 flex-wrap">
                        <button
                          onClick={() => fetchLeads(doc)}
                          className="px-2 py-1 text-xs text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1"
                          title="View Download Leads"
                        >
                          <i className="fa-solid fa-users"></i> Leads
                        </button>
                        <button
                          onClick={() => handleEdit(doc)}
                          className="px-2 py-1 text-xs text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1"
                          title="Edit Document"
                        >
                          <i className="fa-solid fa-pen-to-square"></i> Edit
                        </button>
                        <button
                          onClick={() => copyToClipboard(doc._id)}
                          className="px-2 py-1 text-xs text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
                          title="Copy Public Link"
                        >
                          <i className="fa-solid fa-link"></i> Link
                        </button>
                        <button
                          onClick={() => handleDelete(doc._id)}
                          className="px-2 py-1 text-xs text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors flex items-center gap-1"
                          title="Delete Document"
                        >
                          <i className="fa-solid fa-trash"></i> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Download Leads Report */}
      {selectedDocForLeads && (
        <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                📥 Download Leads
              </h3>
              <p className="text-sm text-slate-500 mt-0.5">
                {selectedDocForLeads.title} — {leads.length} lead{leads.length !== 1 ? "s" : ""}
              </p>
            </div>
            <button
              onClick={() => setSelectedDocForLeads(null)}
              className="text-slate-400 hover:text-slate-600 text-xl"
            >
              ✕
            </button>
          </div>

          {leadsLoading ? (
            <p className="text-slate-500 text-sm">Loading leads...</p>
          ) : leads.length === 0 ? (
            <div className="text-center py-8 text-slate-400">
              <i className="fa-solid fa-inbox text-3xl mb-2 block"></i>
              <p>No leads yet. Share the download link to start collecting leads!</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                    <th className="py-3 px-4 font-semibold text-slate-600 dark:text-slate-400">#</th>
                    <th className="py-3 px-4 font-semibold text-slate-600 dark:text-slate-400">Name</th>
                    <th className="py-3 px-4 font-semibold text-slate-600 dark:text-slate-400">
                      <i className="fa-brands fa-whatsapp text-green-500 mr-1"></i>WhatsApp
                    </th>
                    <th className="py-3 px-4 font-semibold text-slate-600 dark:text-slate-400">Email</th>
                    <th className="py-3 px-4 font-semibold text-slate-600 dark:text-slate-400">IP / Location</th>
                    <th className="py-3 px-4 font-semibold text-slate-600 dark:text-slate-400">Downloaded At</th>
                    <th className="py-3 px-4 font-semibold text-slate-600 dark:text-slate-400">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead, i) => (
                    <tr
                      key={lead._id}
                      className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/30"
                    >
                      <td className="py-3 px-4 text-slate-400">{i + 1}</td>
                      <td className="py-3 px-4 font-medium text-slate-800 dark:text-white">{lead.name}</td>
                      <td className="py-3 px-4 text-slate-700 dark:text-slate-300">{lead.whatsapp}</td>
                      <td className="py-3 px-4 text-slate-600 dark:text-slate-400">
                        {lead.email || <span className="text-slate-300 italic">—</span>}
                      </td>
                      <td className="py-3 px-4 text-slate-500 font-mono text-xs">{lead.ip}</td>
                      <td className="py-3 px-4 text-slate-500 whitespace-nowrap">
                        {new Date(lead.downloadedAt).toLocaleString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                      <td className="py-3 px-4">
                        <a
                          href={`https://wa.me/${lead.whatsapp.replace(/\D/g, "")}?text=Hi%20${encodeURIComponent(lead.name)},%20thank%20you%20for%20downloading%20our%20Company%20Profile!`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 hover:bg-green-200 text-green-700 rounded text-xs font-medium transition-colors"
                        >
                          <i className="fa-brands fa-whatsapp"></i> Chat
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
