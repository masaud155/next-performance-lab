import { TrendingDown, TrendingUp } from "lucide-react";

export default function MetricCard({ label, value, tone = "good" }) {
  const good = tone === "good";

  return (
    <div className={`rounded-lg border p-4 ${good ? "border-emerald-300/20 bg-emerald-300/8" : "border-orange-300/20 bg-orange-400/8"}`}>
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</span>
        {good ? <TrendingUp className="h-4 w-4 text-emerald-300" /> : <TrendingDown className="h-4 w-4 text-orange-300" />}
      </div>
      <p className={`mt-3 text-lg font-semibold ${good ? "text-emerald-100" : "text-orange-100"}`}>{value}</p>
    </div>
  );
}
