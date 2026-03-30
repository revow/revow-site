"use client";

import { useState, useEffect, type FormEvent } from "react";

interface ContactFormProps {
  variant: "ebook" | "contact";
  onSuccess?: () => void;
  labels: {
    name: string;
    email: string;
    company: string;
    role: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
  };
}

export default function ContactForm({ variant, onSuccess, labels }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Note: collectForms removed — it auto-maps the "name" field to firstname
  // causing duplication. We use identify + server-side API instead.

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      role: (form.elements.namedItem("role") as HTMLInputElement).value,
      source: variant,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Request failed");
      }

      // HubSpot: identify visitor so page views are linked to this contact
      const _hsq = (window as any)._hsq = (window as any)._hsq || [];
      _hsq.push(["identify", { email: data.email, firstname: data.name.split(" ")[0], lastname: data.name.split(" ").slice(1).join(" "), company: data.company }]);
      _hsq.push(["trackPageView"]);

      setStatus("success");
      onSuccess?.();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : labels.error);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-accent-bg border border-accent/20 p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <p className="text-lg font-semibold text-text-primary">{labels.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          name="name"
          type="text"
          required
          placeholder={labels.name}
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition"
        />
      </div>
      <div>
        <input
          name="email"
          type="email"
          required
          placeholder={labels.email}
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition"
        />
      </div>
      <div>
        <input
          name="company"
          type="text"
          required
          placeholder={labels.company}
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition"
        />
      </div>
      <div>
        <input
          name="role"
          type="text"
          placeholder={labels.role}
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMsg || labels.error}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white hover:bg-accent-light transition shadow-md shadow-accent/20 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? labels.sending : labels.submit}
      </button>
    </form>
  );
}
