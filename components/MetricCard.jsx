import { Activity, TrendingDown, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function MetricCard({ label, value, tone = "good", progress = 100 }) {
  const good = tone === "good";
  const numeric = Number(String(value).match(/\d+(\.\d+)?/)?.[0]);
  const animatedValue = Number.isFinite(numeric) && !Number.isNaN(numeric)
    ? good
      ? Math.max(numeric, Math.round(numeric + (100 - progress) * 1.8))
      : Math.max(1, Math.round(numeric - progress * 0.9))
    : value;

  return (
    <motion.div
      whileHover={{ y: -3 }}
      className={`rounded-2xl border p-4 ${good ? "border-emerald-300/20 bg-emerald-300/8" : "border-orange-300/20 bg-orange-400/8"}`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</span>
        {good ? <TrendingUp className="h-4 w-4 text-emerald-300" /> : <TrendingDown className="h-4 w-4 text-orange-300" />}
      </div>
      <p className={`mt-3 text-2xl font-semibold tracking-tight ${good ? "text-emerald-100" : "text-orange-100"}`}>
        {Number.isFinite(numeric) && !Number.isNaN(numeric) ? `${animatedValue}${String(value).replace(String(numeric), "")}` : value}
      </p>
      <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
        <Activity className="h-3.5 w-3.5" />
        Live estimate
      </div>
    </motion.div>
  );
}
