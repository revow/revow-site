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
    <div className="sim-card p-6 space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] text-text-muted uppercase tracking-widest font-medium">Revenue Monitoring</p>
          <h3 className="text-base font-semibold text-text-primary mt-0.5">Acquisition Funnel — Real-Time</h3>
        </div>
        <div className="flex gap-4 text-[11px] text-text-muted">
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-accent" />Current</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-gray-300" />Baseline</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-accent-light opacity-40" />Target</span>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2.5">
        {stages.map((s) => (
          <div key={s.label} className="rounded-xl bg-bg-secondary p-3 text-center border border-border/60">
            <p className="text-[10px] text-text-muted font-medium">{s.label}</p>
            <p className="text-lg font-bold text-text-primary mt-0.5">{s.value}</p>
            <div className="flex items-center justify-center gap-1.5 mt-0.5">
              <span className="text-[10px] text-text-muted">{s.pct}</span>
              <span className={`text-[10px] font-semibold ${s.delta.startsWith("+") ? "text-emerald-600" : "text-red-500"}`}>{s.delta}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0093b4" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#0093b4" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e8ecf0" />
            <XAxis dataKey="month" tick={{ fill: "#8fa0b3", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#8fa0b3", fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ background: "#fff", border: "1px solid #e8ecf0", borderRadius: 10, color: "#0b1d30", fontSize: 12, boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }} />
            <Area type="monotone" dataKey="target" stroke="#00b4d8" fill="none" strokeDasharray="4 4" strokeWidth={1.5} strokeOpacity={0.35} />
            <Area type="monotone" dataKey="baseline" stroke="#c0c8d0" fill="none" strokeDasharray="3 3" strokeWidth={1} />
            <Area type="monotone" dataKey="current" stroke="#0093b4" fill="url(#colorCurrent)" strokeWidth={2.5} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
