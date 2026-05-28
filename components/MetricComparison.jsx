import { ArrowRight } from "lucide-react";

export default function MetricComparison({ badMetrics, goodMetrics }) {
  return (
    <div className="grid gap-3 lg:grid-cols-3">
      {badMetrics.map((bad, index) => {
        const good = goodMetrics[index];
        return (
          <div key={bad.label} className="rounded-2xl border border-white/10 bg-slate-950/45 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{bad.label}</p>
            <div className="mt-3 flex items-center gap-3">
              <span className="min-w-0 flex-1 truncate rounded-xl border border-orange-300/20 bg-orange-300/8 px-3 py-2 text-sm font-semibold text-orange-100">{bad.value}</span>
              <ArrowRight className="h-4 w-4 shrink-0 text-cyan-300" />
              <span className="min-w-0 flex-1 truncate rounded-xl border border-emerald-300/20 bg-emerald-300/8 px-3 py-2 text-sm font-semibold text-emerald-100">{good?.value}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
