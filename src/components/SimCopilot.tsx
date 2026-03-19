"use client";

const messages = [
  { role: "user", text: "Why did conversion drop this week?" },
  { role: "ai", text: "Conversion from Qualified → Converted fell 4.2pp this week. Three factors detected:", list: [
    "Lead volume increased 22% but quality score dropped — likely due to the new campaign launched Monday",
    "Response time in Stage 2 increased from 2.1h to 4.8h average",
    "Bottleneck identified: 68% of delayed leads are stuck with the same 3 reps"
  ]},
  { role: "ai", text: "Recommended actions:", list: [
    "Review campaign targeting criteria — current CPL is 40% below threshold",
    "Redistribute Stage 2 queue — 3 reps are over capacity",
    "Set up alert for response time > 3h"
  ]},
];

export default function SimCopilot() {
  return (
    <div className="sim-card p-6 space-y-4">
      <div>
        <p className="text-[10px] text-text-muted uppercase tracking-widest font-medium">Revenue Copilot</p>
        <h3 className="text-base font-semibold text-text-primary mt-0.5">AI-Powered Diagnostics</h3>
      </div>
      <div className="space-y-3">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[88%] rounded-2xl px-4 py-3 ${m.role === "user" ? "bg-accent/10 text-text-primary border border-accent/15" : "bg-bg-secondary border border-border"}`}>
              {m.role === "ai" && <span className="text-[10px] font-bold text-accent uppercase tracking-wider">Revow AI</span>}
              <p className="text-sm text-text-secondary mt-1 leading-relaxed">{m.text}</p>
              {m.list && (
                <ul className="mt-2 space-y-1.5">
                  {m.list.map((item, j) => (
                    <li key={j} className="text-sm text-text-secondary flex gap-2">
                      <span className="text-accent shrink-0 mt-0.5 font-bold">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-border bg-bg-secondary px-4 py-3 flex items-center gap-3">
        <span className="text-text-muted text-sm">Ask about your revenue...</span>
        <span className="ml-auto text-accent/50 text-xs font-mono">⌘K</span>
      </div>
    </div>
  );
}
