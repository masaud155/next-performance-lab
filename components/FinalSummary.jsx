import { ArrowRight, Rocket } from "lucide-react";

export default function FinalSummary({ habits }) {
  return (
    <section id="summary" className="scroll-mt-24 glass-panel rounded-3xl p-6 sm:p-8">
      <div className="mb-8 max-w-3xl">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-yellow-300/20 bg-yellow-300/10 px-3 py-1 text-sm text-yellow-100">
          <Rocket className="h-4 w-4" />
          Final pattern
        </div>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">The Real Pattern Behind Fast Next.js Projects</h2>
        <p className="mt-4 leading-7 text-slate-300">
          Fast apps usually come from clean boundaries: server work stays on the server, client JavaScript stays small, data loading is planned, and decisions are measured before they become architecture.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {habits.map((habit) => (
          <article key={habit.id} className="group rounded-2xl border border-white/10 bg-slate-950/55 p-5 transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-slate-950/75">
            <div className="mb-3 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-300 text-sm font-bold text-slate-950">{habit.number}</span>
              <div>
                <h3 className="font-semibold text-white">{habit.navTitle}</h3>
                <p className="text-xs text-slate-500">{habit.difficulty} · {habit.impact}</p>
              </div>
            </div>
            <div className="grid gap-3 text-sm text-slate-300">
              <p><span className="font-semibold text-orange-200">Bad:</span> {habit.summary.bad}</p>
              <p><span className="font-semibold text-emerald-200">Good:</span> {habit.summary.good}</p>
              <p><span className="font-semibold text-cyan-200">Benefit:</span> {habit.summary.benefit}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-cyan-300/20 bg-cyan-300/8 p-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-lg font-semibold text-white">
          Clone this project, explore each habit, and use it as a visual guide for building faster Next.js apps.
        </p>
        <a href="#top" className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200">
          Restart Lab
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
