"use client";

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

const types = ["red", "yellow", "green", "blue"];

interface SimAlertsProps {
  labels: {
    label: string;
    title: string;
    critical: string;
    warning: string;
    ontrack: string;
    insight: string;
    msgs: string[];
  };
}

export default function SimAlerts({ labels }: SimAlertsProps) {
  const badgeLabels = [labels.critical, labels.warning, labels.ontrack, labels.insight];

  return (
    <div className="sim-card p-6 space-y-4">
      <div>
        <p className="text-[10px] text-text-muted uppercase tracking-widest font-medium">{labels.label}</p>
        <h3 className="text-base font-semibold text-text-primary mt-0.5">{labels.title}</h3>
      </div>
      <div className="space-y-2.5">
        {labels.msgs.map((msg, i) => (
          <div key={i} className={`${styles[types[i]]} rounded-lg px-4 py-3`}>
            <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-1.5 ${badges[types[i]]}`}>{badgeLabels[i]}</span>
            <p className="text-sm leading-relaxed opacity-90">{msg}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
