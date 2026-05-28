import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";

export default function GuidePreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="glass-panel grid gap-6 rounded-2xl p-6 sm:p-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100">
            <BookOpen className="h-4 w-4" />
            New guide page
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Learn the lab like a performance review workflow.</h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-300">
            The guide explains who the project is for, how to read each comparison, what mistakes to avoid, and how to apply the habits before shipping a production route.
          </p>
          <a href="/guide" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-cyan-300 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200">
            Open Guide
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid gap-3">
          {["Roadmap layout", "Common mistakes", "Shipping checklist"].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/45 p-4">
              <CheckCircle2 className="h-5 w-5 text-emerald-300" />
              <span className="font-medium text-slate-200">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
