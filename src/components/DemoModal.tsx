"use client";

import { useState } from "react";

interface DemoModalProps {
  labels: {
    title: string;
    sub: string;
    name: string;
    email: string;
    company: string;
    role: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
  };
  trigger: React.ReactNode;
}

export default function DemoModal({ labels, trigger }: DemoModalProps) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", company: "", role: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "demo-request" }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <span onClick={() => setOpen(true)} className="cursor-pointer">
        {trigger}
      </span>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => { setOpen(false); setStatus("idle"); }}
          />

          {/* Modal */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 animate-fade-in">
            {/* Close button */}
            <button
              onClick={() => { setOpen(false); setStatus("idle"); }}
              className="absolute top-4 right-4 text-text-muted hover:text-text-primary transition"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {status === "success" ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-text-primary">{labels.success}</p>
              </div>
            ) : (
              <>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-text-primary">
                  {labels.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">{labels.sub}</p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <input
                    type="text"
                    required
                    placeholder={labels.name}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-border px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent outline-none transition"
                  />
                  <input
                    type="email"
                    required
                    placeholder={labels.email}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-border px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent outline-none transition"
                  />
                  <input
                    type="text"
                    required
                    placeholder={labels.company}
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full rounded-lg border border-border px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent outline-none transition"
                  />
                  <input
                    type="text"
                    placeholder={labels.role}
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    className="w-full rounded-lg border border-border px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent outline-none transition"
                  />

                  {status === "error" && (
                    <p className="text-sm text-red-500">{labels.error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white hover:bg-accent-light transition disabled:opacity-60"
                  >
                    {status === "sending" ? labels.sending : labels.submit}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
