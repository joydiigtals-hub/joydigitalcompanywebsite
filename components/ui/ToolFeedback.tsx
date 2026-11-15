"use client";

import React, { useState } from "react";

interface ToolFeedbackProps {
  toolName: string;
}

export default function ToolFeedback({ toolName }: ToolFeedbackProps) {
  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [message, setMessage] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      setErrorMsg("Please select a rating star.");
      return;
    }
    if (!message.trim()) {
      setErrorMsg("Please write a short message.");
      return;
    }

    setSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/free-tools/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          toolName,
          rating,
          message,
          name: name.trim() || "Anonymous",
          email: email.trim() || "N/A"
        })
      });

      if (res.ok) {
        setSuccess(true);
        setMessage("");
        setName("");
        setEmail("");
        setRating(0);
      } else {
        throw new Error("Failed to submit feedback.");
      }
    } catch (err: any) {
      setErrorMsg("Could not send feedback. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-[#260B5E] border border-white/20 p-6 sm:p-8 rounded-[24px] shadow-2xl text-left relative overflow-hidden max-w-2xl mx-auto mt-12 text-white">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#C9F600]" />
      
      {success ? (
        <div className="text-center py-6">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-lg mx-auto mb-4">
            <i className="fa-solid fa-circle-check" />
          </div>
          <h4 className="text-sm font-black text-white mb-1">Thank you for your feedback!</h4>
          <p className="text-xs text-[#D9CCF5]/80 font-medium mb-4">Your rating has been logged in our feedback terminal.</p>
          <button
            onClick={() => setSuccess(false)}
            className="text-xs font-bold text-[#C9F600] hover:underline cursor-pointer"
          >
            Submit another feedback
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <h4 className="text-sm font-black text-white mb-1">Was this {toolName} helpful?</h4>
            <p className="text-xs text-[#D9CCF5]/80 font-medium leading-relaxed">
              We want to make our tools as useful as possible. Share your suggestions, bugs, or ratings.
            </p>
          </div>

          {/* Stars Selection */}
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold text-[#D9CCF5] uppercase tracking-wider block">Your Rating</span>
            <div className="flex items-center gap-1.5 py-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="text-lg cursor-pointer transition-all duration-150 transform hover:scale-115 focus:outline-none"
                  aria-label={`Rate ${star} Stars`}
                >
                  <i className={`fa-star ${(hoveredRating || rating) >= star ? "fa-solid text-amber-400" : "fa-regular text-white/30"}`} />
                </button>
              ))}
              {rating > 0 && (
                <span className="text-xs font-bold text-[#C9F600] ml-2 select-none">
                  ({rating} / 5 stars)
                </span>
              )}
            </div>
          </div>

          {/* Feedback details */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="feedback-msg-input" className="text-[10px] font-bold text-[#D9CCF5] uppercase block">
              Suggestions & Comments
            </label>
            <textarea
              id="feedback-msg-input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              required
              placeholder="What could we improve? Did you face any bugs?"
              className="text-xs bg-[#3B1580] border border-white/20 rounded-xl px-3.5 py-2.5 font-medium text-white placeholder-white/40 outline-none focus:border-[#C9F600] focus:ring-2 focus:ring-[#C9F600]/20 transition-all"
            />
          </div>

          {/* Contact Fields (optional) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="feedback-name-input" className="text-[10px] font-bold text-[#D9CCF5] uppercase block">
                Your Name (Optional)
              </label>
              <input
                type="text"
                id="feedback-name-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
                className="text-xs bg-[#3B1580] border border-white/20 rounded-xl px-3.5 py-2.5 font-medium text-white placeholder-white/40 outline-none focus:border-[#C9F600] focus:ring-2 focus:ring-[#C9F600]/20 transition-all"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="feedback-email-input" className="text-[10px] font-bold text-[#D9CCF5] uppercase block">
                Email Address (Optional)
              </label>
              <input
                type="email"
                id="feedback-email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="text-xs bg-[#3B1580] border border-white/20 rounded-xl px-3.5 py-2.5 font-medium text-white placeholder-white/40 outline-none focus:border-[#C9F600] focus:ring-2 focus:ring-[#C9F600]/20 transition-all"
              />
            </div>
          </div>

          {errorMsg && <p className="text-xs font-bold text-rose-400">{errorMsg}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="bg-[#C9F600] hover:bg-[#b8f000] disabled:opacity-50 text-[#120526] font-bold text-xs py-3 px-6 rounded-xl transition-all shadow-md shadow-[#C9F600]/20 flex items-center justify-center gap-1.5 cursor-pointer max-w-[160px]"
          >
            {submitting ? "Submitting..." : "Submit Feedback"}
          </button>
        </form>
      )}
    </div>
  );
}
