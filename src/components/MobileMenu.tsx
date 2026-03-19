"use client";
import { useState } from "react";

interface MobileMenuProps {
  nav: { solutions: string; platform: string; how: string; contact: string };
}

export default function MobileMenu({ nav }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-text-secondary hover:text-accent transition"
        aria-label="Toggle menu"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        )}
      </button>
      {open && (
        <nav className="absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg px-6 py-4 flex flex-col gap-4 text-sm font-medium text-text-secondary">
          <a href="#solutions" onClick={() => setOpen(false)} className="hover:text-accent transition">{nav.solutions}</a>
          <a href="#platform" onClick={() => setOpen(false)} className="hover:text-accent transition">{nav.platform}</a>
          <a href="#how" onClick={() => setOpen(false)} className="hover:text-accent transition">{nav.how}</a>
          <a href="mailto:mariana@revow.ai" onClick={() => setOpen(false)} className="hover:text-accent transition">{nav.contact}</a>
        </nav>
      )}
    </div>
  );
}
