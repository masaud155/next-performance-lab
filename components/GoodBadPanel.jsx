"use client";

import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import MetricCard from "./MetricCard";
import PerformanceTimeline from "./PerformanceTimeline";

export default function GoodBadPanel({ tone, title, description, metrics, visualDemo, applied }) {
  const good = tone === "good" || applied;
  const Icon = good ? CheckCircle2 : AlertTriangle;

  return (
    <motion.div
      layout
      className={`rounded-xl border p-4 sm:p-5 ${good ? "border-emerald-300/24 bg-emerald-300/8" : "border-orange-300/24 bg-orange-400/8"}`}
    >
      <div className="mb-5 flex items-start gap-3">
        <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg ${good ? "bg-emerald-300/14 text-emerald-200" : "bg-orange-300/14 text-orange-200"}`}>
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-slate-300">{description}</p>
        </div>
      </div>

      <div className="rounded-lg border border-white/10 bg-slate-950/70 p-4">
        <PerformanceTimeline type={visualDemo?.type} optimized={good} applied={applied} />
        <p className={`mt-4 text-sm ${good ? "text-emerald-100" : "text-orange-100"}`}>{good ? visualDemo?.goodLabel : visualDemo?.badLabel}</p>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} tone={good ? "good" : "bad"} />
        ))}
      </div>
    </motion.div>
  );
}
