import AppShell from "@/components/AppShell";
import FinalChecklist from "@/components/FinalChecklist";
import HabitRoadmap from "@/components/HabitRoadmap";
import SectionContainer from "@/components/SectionContainer";
import { finalChecklist, guideSections, learningPath } from "@/data/guide";
import { ArrowRight, BookOpen, CheckCircle2, Compass, Users } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Guide | Next Performance Lab",
  description: "Learn how to use Next Performance Lab to study real-world Next.js performance habits."
};

export default function GuidePage() {
  const quickSections = guideSections.slice(0, 3);

  return (
    <AppShell>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-lab-grid lab-grid opacity-20" />
        <SectionContainer className="relative py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100">
                <BookOpen className="h-4 w-4" />
                Learning guide
              </div>
              <h1 className="text-gradient max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">How to Use Next Performance Lab</h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                A short roadmap for using the lab as a practical Next.js performance review workflow.
              </p>
            </div>
            <div className="glass-panel rounded-3xl p-5">
              <p className="font-semibold text-white">Quick start</p>
              <div className="mt-4 grid gap-3">
                {["Start at habit 1", "Compare bad vs good", "Open Detailed mode when you want code, tips, and quiz feedback"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-sm text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      <SectionContainer className="space-y-8 py-12 lg:py-16">
        <div className="grid gap-5 lg:grid-cols-3">
          {quickSections.map((section, index) => {
            const Icon = [BookOpen, Users, Compass][index];
            return (
              <article key={section.id} className="glass-panel rounded-3xl p-6">
                <span className="mb-5 grid h-11 w-11 place-items-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="text-xl font-semibold text-white">{section.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">{section.body}</p>
              </article>
            );
          })}
        </div>

        <HabitRoadmap items={learningPath} />
        <FinalChecklist items={finalChecklist} />

        <section className="glass-panel flex flex-col gap-4 rounded-3xl p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">Ready to practice?</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">Use the compact mode for fast review, then open detailed mode when you want the full implementation lesson.</p>
          </div>
          <Link href="/#habits" className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200">
            Start habits
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </SectionContainer>
    </AppShell>
  );
}
