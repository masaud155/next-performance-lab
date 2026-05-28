"use client";

import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import CodeBlock from "./CodeBlock";
import MetricCard from "./MetricCard";
import TimelineDemo from "./TimelineDemo";

export default function GoodBadPanel({ tone, title, description, code, metrics, visualDemo, applied, progress = 0 }) {
  const good = tone === "good" || applied;
  const Icon = good ? CheckCircle2 : AlertTriangle;

  return (
    <motion.div
      layout
      whileHover={{ y: -4 }}
      className={`relative overflow-hidden rounded-2xl border p-4 sm:p-5 ${good ? "border-emerald-300/24 bg-emerald-300/8" : "border-orange-300/24 bg-orange-400/8"}`}
    >
      <div className={`absolute inset-x-0 top-0 h-px ${good ? "bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent" : "bg-gradient-to-r from-transparent via-orange-300/70 to-transparent"}`} />
      <div className="mb-5 flex items-start gap-3">
        <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${good ? "bg-emerald-300/14 text-emerald-200" : "bg-orange-300/14 text-orange-200"}`}>
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-slate-300">{description}</p>
        </div>
      </div>

      <div className="mb-4 rounded-2xl border border-white/10 bg-slate-950/45 p-3">
        <div className="mb-3 flex items-center justify-between px-1">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Architecture snapshot</p>
          <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${good ? "bg-emerald-300/10 text-emerald-100" : "bg-orange-300/10 text-orange-100"}`}>
            {good ? "Optimized" : "Problem"}
          </span>
        </div>
        <CodeBlock code={code} tone={good ? "good" : "bad"} compact />
      </div>

      <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
        <TimelineDemo type={visualDemo?.type} mode={good ? "good" : "bad"} progress={progress} />
        <p className={`mt-4 text-sm ${good ? "text-emerald-100" : "text-orange-100"}`}>{good ? visualDemo?.goodLabel : visualDemo?.badLabel}</p>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} tone={good ? "good" : "bad"} progress={progress} />
        ))}
      </div>
    </motion.div>
  );
}
