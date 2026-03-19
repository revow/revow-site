"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = Array.from({ length: 26 }, (_, i) => ({
  week: `W${i + 1}`,
  current: +(2.8 + Math.sin(i / 4) * 0.8 + i * 0.06 + (i > 15 ? 0.3 : 0)).toFixed(2),
  previous: +(2.4 + Math.sin(i / 3.5) * 0.6 + i * 0.04).toFixed(2),
  baseline: 3.2,
}));

interface SimConversionProps {
  labels: {
    label: string;
    title: string;
    current: string;
    prior: string;
    target: string;
    above: string;
  };
}

export default function SimConversion({ labels }: SimConversionProps) {
  return (
    <div className="sim-card p-6 space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] text-text-muted uppercase tracking-widest font-medium">{labels.label}</p>
          <h3 className="text-base font-semibold text-text-primary mt-0.5">{labels.title}</h3>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold text-text-primary">3.54%</p>
          <span className="text-xs font-semibold text-emerald-600">+0.60pp vs prior year</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2.5">
        <div className="rounded-xl bg-accent-bg border border-accent/10 p-3 text-center">
          <p className="text-[10px] text-text-muted font-medium">{labels.current}</p>
          <p className="text-lg font-bold text-accent">3.54%</p>
        </div>
        <div className="rounded-xl bg-bg-secondary border border-border p-3 text-center">
          <p className="text-[10px] text-text-muted font-medium">{labels.prior}</p>
          <p className="text-lg font-bold text-text-secondary">2.94%</p>
        </div>
        <div className="rounded-xl bg-bg-secondary border border-border p-3 text-center">
          <p className="text-[10px] text-text-muted font-medium">{labels.target}</p>
          <p className="text-lg font-bold text-text-secondary">3.21%</p>
          <span className="text-[10px] font-semibold text-emerald-600">{labels.above}</span>
        </div>
      </div>
      <div className="h-44">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e8ecf0" />
            <XAxis dataKey="week" tick={{ fill: "#8fa0b3", fontSize: 10 }} axisLine={false} tickLine={false} interval={4} />
            <YAxis tick={{ fill: "#8fa0b3", fontSize: 10 }} axisLine={false} tickLine={false} domain={[1.5, 5]} />
            <Tooltip contentStyle={{ background: "#fff", border: "1px solid #e8ecf0", borderRadius: 10, color: "#0b1d30", fontSize: 12, boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }} />
            <Line type="monotone" dataKey="baseline" stroke="#0093b4" strokeDasharray="4 4" strokeWidth={1} strokeOpacity={0.3} dot={false} />
            <Line type="monotone" dataKey="previous" stroke="#c0c8d0" strokeWidth={1.5} dot={false} />
            <Line type="monotone" dataKey="current" stroke="#0093b4" strokeWidth={2.5} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
