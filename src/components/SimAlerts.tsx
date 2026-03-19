"use client";

const alerts = [
  { type: "red", icon: "!", label: "Critical", msg: "Conversion drop detected in Stage 2 → Stage 3. Down 4.2pp vs baseline. Investigate qualification criteria." },
  { type: "yellow", icon: "⚡", label: "Warning", msg: "To hit target of 2,385 units, 19,011 more leads needed. Required pace: 317/business day." },
  { type: "green", icon: "✓", label: "On Track", msg: "Weekly conversion trending up — 3.3% avg over last 4 weeks. Maintain current strategy." },
  { type: "blue", icon: "i", label: "Insight", msg: "Revenue stable at +0.60pp vs D-364. Focus efforts on top-of-funnel volume for maximum impact." },
];

const colorMap: Record<string, { bg: string; border: string; icon: string }> = {
  red: { bg: "bg-red-500/8", border: "border-l-red-500", icon: "bg-red-500/20 text-red-400" },
  yellow: { bg: "bg-yellow-500/8", border: "border-l-yellow-500", icon: "bg-yellow-500/20 text-yellow-400" },
  green: { bg: "bg-emerald-500/8", border: "border-l-emerald-500", icon: "bg-emerald-500/20 text-emerald-400" },
  blue: { bg: "bg-accent/8", border: "border-l-accent", icon: "bg-accent/20 text-accent" },
};

export default function SimAlerts() {
  return (
    <div className="sim-card p-6 space-y-4">
      <div>
        <p className="text-xs text-text-muted uppercase tracking-wider">Alert Engine</p>
        <h3 className="text-lg font-semibold text-text-primary mt-1">Smart Alerts — Live</h3>
      </div>
      <div className="space-y-3">
        {alerts.map((a) => {
          const c = colorMap[a.type];
          return (
            <div key={a.msg} className={`${c.bg} border-l-3 ${c.border} rounded-r-lg px-4 py-3 flex items-start gap-3`}>
              <span className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${c.icon}`}>
                {a.icon}
              </span>
              <div>
                <span className="text-xs font-semibold text-text-primary">{a.label}</span>
                <p className="text-sm text-text-secondary mt-0.5 leading-relaxed">{a.msg}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
