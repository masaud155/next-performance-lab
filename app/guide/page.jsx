import FinalChecklist from "@/components/FinalChecklist";
import Footer from "@/components/Footer";
import GuideSection from "@/components/GuideSection";
import HabitRoadmap from "@/components/HabitRoadmap";
import Navbar from "@/components/Navbar";
import { commonMistakes, finalChecklist, guideSections, learningPath } from "@/data/guide";
import { AlertTriangle, BookOpen, Compass, Layers3, Rocket, Users } from "lucide-react";

const icons = [BookOpen, Users, Compass, Layers3, Rocket];

export const metadata = {
  title: "Guide | Next Performance Lab",
  description: "Learn how to use Next Performance Lab to study real-world Next.js performance habits."
};

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-ink text-slate-100">
      <Navbar />
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-lab-grid lab-grid opacity-25" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100">
              <BookOpen className="h-4 w-4" />
              Learning guide
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">How to Use Next Performance Lab</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Use this guide as a roadmap for studying the lab, reviewing real projects, and building a practical Next.js performance checklist.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_340px] lg:px-8">
        <div className="space-y-8">
          {guideSections.map((section, index) => (
            <GuideSection key={section.id} section={section} icon={icons[index]} />
          ))}
          <HabitRoadmap items={learningPath} />
          <MistakesCard mistakes={commonMistakes} />
          <FinalChecklist items={finalChecklist} />
        </div>

        <aside className="hidden lg:block">
          <div className="glass-panel sticky top-24 rounded-2xl p-5">
            <p className="mb-4 font-semibold text-white">Guide sections</p>
            <nav className="space-y-1">
              {guideSections.map((section) => (
                <a key={section.id} href={`#${section.id}`} className="focus-ring block rounded-xl px-3 py-2 text-sm text-slate-400 transition hover:bg-white/5 hover:text-cyan-100">
                  {section.title}
                </a>
              ))}
            </nav>
            <div className="mt-5 rounded-2xl border border-emerald-300/20 bg-emerald-300/8 p-4">
              <p className="font-semibold text-emerald-100">Best workflow</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Read one habit, inspect the code, move the slider, answer the quiz, then apply the takeaway to a real route.</p>
            </div>
          </div>
        </aside>
      </div>
      <Footer />
    </main>
  );
}

function MistakesCard({ mistakes }) {
  return (
    <section className="glass-panel rounded-2xl p-6 sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-xl border border-orange-300/20 bg-orange-300/10 text-orange-200">
          <AlertTriangle className="h-5 w-5" />
        </span>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white">Common Mistakes to Avoid</h2>
          <p className="text-sm text-slate-400">These are the patterns that quietly slow down real apps.</p>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {mistakes.map((mistake) => (
          <div key={mistake} className="rounded-xl border border-orange-300/15 bg-orange-300/8 p-4 text-sm text-slate-200">
            {mistake}
          </div>
        ))}
      </div>
    </section>
  );
}
