"use client";

const alerts = [
  { type: "red", label: "Critical", msg: "Conversion drop detected in Stage 2 → Stage 3. Down 4.2pp vs baseline. Investigate qualification criteria." },
  { type: "yellow", label: "Warning", msg: "To hit target of 2,385 units, 19,011 more leads needed. Required pace: 317/business day." },
  { type: "green", label: "On Track", msg: "Weekly conversion trending up — 3.3% avg over last 4 weeks. Maintain current strategy." },
  { type: "blue", label: "Insight", msg: "Revenue stable at +0.60pp vs D-364. Focus efforts on top-of-funnel volume for maximum impact." },
];

const styles: Record<string, string> = {
  red: "bg-red-50 border-l-[3px] border-l-red-500 text-red-800",
  yellow: "bg-amber-50 border-l-[3px] border-l-amber-500 text-amber-800",
  green: "bg-emerald-50 border-l-[3px] border-l-emerald-500 text-emerald-800",
  blue: "bg-sky-50 border-l-[3px] border-l-accent text-sky-800",
};

const badges: Record<string, string> = {
  red: "bg-red-100 text-red-700",
  yellow: "bg-amber-100 text-amber-700",
  green: "bg-emerald-100 text-emerald-700",
  blue: "bg-sky-100 text-sky-700",
};

export default function SimAlerts() {
  return (
    <div className="sim-card p-6 space-y-4">
      <div>
        <p className="text-[10px] text-text-muted uppercase tracking-widest font-medium">Alert Engine</p>
        <h3 className="text-base font-semibold text-text-primary mt-0.5">Smart Alerts — Live</h3>
      </div>
      <div className="space-y-2.5">
        {alerts.map((a) => (
          <div key={a.msg} className={`${styles[a.type]} rounded-lg px-4 py-3`}>
            <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-1.5 ${badges[a.type]}`}>{a.label}</span>
            <p className="text-sm leading-relaxed opacity-90">{a.msg}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
