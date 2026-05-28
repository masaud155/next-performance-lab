"use client";

import { Check, ClipboardCheck } from "lucide-react";
import { useState } from "react";

export default function FinalChecklist({ items }) {
  const [checked, setChecked] = useState([]);
  const progress = Math.round((checked.length / items.length) * 100);

  function toggle(item) {
    setChecked((current) => (current.includes(item) ? current.filter((value) => value !== item) : [...current, item]));
  }

  return (
    <section className="glass-panel rounded-2xl p-6 sm:p-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-xl border border-emerald-300/20 bg-emerald-300/10 text-emerald-200">
            <ClipboardCheck className="h-5 w-5" />
          </span>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">Final Checklist</h2>
            <p className="text-sm text-slate-400">Use this before shipping a Next.js project.</p>
          </div>
        </div>
        <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">{progress}% ready</span>
      </div>
      <div className="mb-5 h-2 overflow-hidden rounded-full bg-slate-800">
        <div className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300 transition-all duration-500" style={{ width: `${progress}%` }} />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => {
          const active = checked.includes(item);
          return (
            <button
              key={item}
              type="button"
              onClick={() => toggle(item)}
              className={`focus-ring flex items-center gap-3 rounded-xl border p-4 text-left text-sm transition ${active ? "border-emerald-300/35 bg-emerald-300/10 text-emerald-100" : "border-white/10 bg-white/[0.03] text-slate-300 hover:bg-white/[0.06]"}`}
            >
              <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-md border ${active ? "border-emerald-300 bg-emerald-300 text-slate-950" : "border-white/15"}`}>
                {active && <Check className="h-4 w-4" />}
              </span>
              {item}
            </button>
          );
        })}
      </div>
    </section>
  );
}
