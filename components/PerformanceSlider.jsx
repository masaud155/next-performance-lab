"use client";

import { motion } from "framer-motion";

const stages = ["Bad", "Better", "Optimized"];

export default function PerformanceSlider({ value, onChange }) {
  const stage = value < 34 ? 0 : value < 75 ? 1 : 2;

  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/55 p-5">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-white">Performance Impact Slider</p>
          <p className="text-sm text-slate-400">Move from the common mistake toward a production-ready implementation.</p>
        </div>
        <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">{stages[stage]} · {value}%</span>
      </div>
      <input
        aria-label="Performance impact"
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="w-full accent-cyan-300"
      />
      <div className="mt-4 grid grid-cols-3 gap-2">
        {stages.map((item, index) => (
          <div key={item} className={`rounded-xl border p-3 text-center text-xs font-semibold uppercase tracking-[0.18em] ${stage === index ? "border-cyan-300/35 bg-cyan-300/10 text-cyan-100" : "border-white/10 bg-white/[0.03] text-slate-500"}`}>
            {item}
          </div>
        ))}
      </div>
      <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-orange-300 via-yellow-300 to-emerald-300"
          animate={{ width: `${value}%` }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
        />
      </div>
    </div>
  );
}
