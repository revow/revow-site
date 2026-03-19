"use client";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", current: 4200, baseline: 3800, target: 5000 },
  { month: "Feb", current: 8900, baseline: 7600, target: 10000 },
  { month: "Mar", current: 14500, baseline: 12800, target: 16000 },
  { month: "Apr", current: 21200, baseline: 18400, target: 23000 },
  { month: "May", current: 28800, baseline: 24200, target: 30000 },
  { month: "Jun", current: 35100, baseline: 30800, target: 38000 },
  { month: "Jul", current: 39400, baseline: 35200, target: 44000 },
  { month: "Aug", current: 42100, baseline: 38600, target: 48000 },
];

const stages = [
  { label: "Leads", value: "48,359", pct: "—", delta: "+12.4%" },
  { label: "Qualified", value: "35,035", pct: "72.4%", delta: "+8.1%" },
  { label: "Converted", value: "27,364", pct: "78.1%", delta: "+3.2%" },
  { label: "Revenue", value: "1,712", pct: "6.3%", delta: "-2.0%" },
];

export default function SimFunnel() {
  return (
    <div className="sim-card p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-text-muted uppercase tracking-wider">Revenue Monitoring</p>
          <h3 className="text-lg font-semibold text-text-primary mt-1">Acquisition Funnel — Real-Time</h3>
        </div>
        <div className="flex gap-4 text-xs text-text-muted">
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-accent" />Current</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-text-muted" />Baseline</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-accent-glow opacity-40" />Target</span>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {stages.map((s) => (
          <div key={s.label} className="glass rounded-lg p-3 text-center">
            <p className="text-xs text-text-muted">{s.label}</p>
            <p className="text-xl font-bold text-text-primary mt-1">{s.value}</p>
            <div className="flex items-center justify-center gap-2 mt-1">
              <span className="text-xs text-text-muted">{s.pct}</span>
              <span className={`text-xs font-medium ${s.delta.startsWith("+") ? "text-emerald-400" : "text-red-400"}`}>{s.delta}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="h-52">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00b4d8" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#00b4d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
            <XAxis dataKey="month" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ background: "#0f1d32", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, color: "#f0f4f8", fontSize: 12 }} />
            <Area type="monotone" dataKey="target" stroke="rgba(0,229,255,0.3)" fill="none" strokeDasharray="4 4" strokeWidth={1.5} />
            <Area type="monotone" dataKey="baseline" stroke="rgba(255,255,255,0.2)" fill="none" strokeDasharray="3 3" strokeWidth={1} />
            <Area type="monotone" dataKey="current" stroke="#00b4d8" fill="url(#colorCurrent)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
