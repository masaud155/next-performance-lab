import { Gauge, TrendingDown, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function MetricCard({ label, value, tone = "good", progress = 100 }) {
  const good = tone === "good";
  const strength = good ? progress : 100 - progress;
  const barWidth = Math.max(18, Math.min(100, strength));

  return (
    <motion.div
      whileHover={{ x: 4 }}
      className={`relative overflow-hidden rounded-2xl border px-4 py-3 ${
        good
          ? "border-emerald-300/18 bg-emerald-300/[0.055]"
          : "border-orange-300/18 bg-orange-300/[0.055]"
      }`}
    >
      <div className={`absolute inset-y-3 left-0 w-1 rounded-r-full ${good ? "bg-emerald-300" : "bg-orange-300"}`} />
      <div className="flex items-center gap-4">
        <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl border ${
          good
            ? "border-emerald-300/20 bg-emerald-300/10 text-emerald-200"
            : "border-orange-300/20 bg-orange-300/10 text-orange-200"
        }`}>
          {good ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <p className="text-sm font-medium leading-5 text-slate-400">{label}</p>
            <p className={`text-lg font-bold leading-6 ${good ? "text-emerald-50" : "text-orange-50"}`}>{value}</p>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <div className="h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-slate-800/90">
              <motion.div
                className={`h-full rounded-full ${good ? "bg-gradient-to-r from-cyan-300 to-emerald-300" : "bg-gradient-to-r from-orange-300 to-red-400"}`}
                animate={{ width: `${barWidth}%` }}
                transition={{ duration: 0.35 }}
              />
            </div>
            <span className="inline-flex shrink-0 items-center gap-1.5 text-xs text-slate-500">
              <Gauge className={`h-3.5 w-3.5 ${good ? "text-emerald-300/80" : "text-orange-300/80"}`} />
              {good ? "Improved" : "Risk"}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
