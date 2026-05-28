import { ArrowRight, Route } from "lucide-react";

export default function HabitRoadmap({ items }) {
  return (
    <section className="glass-panel rounded-2xl p-6 sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
          <Route className="h-5 w-5" />
        </span>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white">Learning Path</h2>
          <p className="text-sm text-slate-400">Follow the habits in order for the strongest mental model.</p>
        </div>
      </div>
      <div className="grid gap-3">
        {items.map((item, index) => (
          <div key={item} className="group flex items-center gap-4 rounded-xl border border-white/10 bg-slate-950/45 p-4 transition hover:border-cyan-300/35 hover:bg-cyan-300/5">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-cyan-300 text-sm font-bold text-slate-950">{index + 1}</span>
            <p className="flex-1 font-medium text-slate-100">{item}</p>
            <ArrowRight className="h-4 w-4 text-slate-500 transition group-hover:translate-x-1 group-hover:text-cyan-200" />
          </div>
        ))}
      </div>
    </section>
  );
}
