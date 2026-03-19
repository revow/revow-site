"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = Array.from({ length: 26 }, (_, i) => ({
  week: `W${i + 1}`,
  current: 2.8 + Math.sin(i / 4) * 0.8 + i * 0.06 + (Math.random() * 0.3),
  previous: 2.4 + Math.sin(i / 3.5) * 0.6 + i * 0.04,
  baseline: 3.2,
})).map(d => ({ ...d, current: +d.current.toFixed(2), previous: +d.previous.toFixed(2) }));

export default function SimConversion() {
  return (
    <div className="sim-card p-6 space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-text-muted uppercase tracking-wider">Funnel Intelligence</p>
          <h3 className="text-lg font-semibold text-text-primary mt-1">End-to-End Conversion</h3>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold text-text-primary">3.54%</p>
          <span className="text-xs font-medium text-emerald-400">+0.60pp vs prior year</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="glass rounded-lg p-3 text-center">
          <p className="text-xs text-text-muted">Current</p>
          <p className="text-lg font-bold text-accent">3.54%</p>
        </div>
        <div className="glass rounded-lg p-3 text-center">
          <p className="text-xs text-text-muted">Prior Year</p>
          <p className="text-lg font-bold text-text-secondary">2.94%</p>
        </div>
        <div className="glass rounded-lg p-3 text-center">
          <p className="text-xs text-text-muted">Target</p>
          <p className="text-lg font-bold text-text-secondary">3.21%</p>
          <span className="text-[10px] text-emerald-400">Above target</span>
        </div>
      </div>
      <div className="h-44">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
            <XAxis dataKey="week" tick={{ fill: "rgba(255,255,255,0.25)", fontSize: 10 }} axisLine={false} tickLine={false} interval={4} />
            <YAxis tick={{ fill: "rgba(255,255,255,0.25)", fontSize: 10 }} axisLine={false} tickLine={false} domain={[1.5, 5]} />
            <Tooltip contentStyle={{ background: "#0f1d32", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, color: "#f0f4f8", fontSize: 12 }} />
            <Line type="monotone" dataKey="baseline" stroke="rgba(0,229,255,0.3)" strokeDasharray="4 4" strokeWidth={1} dot={false} />
            <Line type="monotone" dataKey="previous" stroke="rgba(255,255,255,0.2)" strokeWidth={1} dot={false} />
            <Line type="monotone" dataKey="current" stroke="#00b4d8" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
