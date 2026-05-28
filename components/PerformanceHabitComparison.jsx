"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BadgeCheck, Brain, CheckCircle2, Columns2, Eye, FlaskConical, Layers3, Sparkles } from "lucide-react";
import { useState } from "react";
import CodeTabs from "./CodeTabs";
import GoodBadPanel from "./GoodBadPanel";
import PerformanceSlider from "./PerformanceSlider";
import QuizCard from "./QuizCard";
import RealWorldTip from "./RealWorldTip";

const comparisonModes = [
  { id: "split", label: "Side by side", icon: Columns2 },
  { id: "bad", label: "Bad only", icon: Eye },
  { id: "good", label: "Good only", icon: CheckCircle2 },
  { id: "diff", label: "Difference", icon: Layers3 }
];

export default function PerformanceHabitComparison({
  id,
  number,
  title,
  difficulty,
  impact,
  badTitle,
  goodTitle,
  badDescription,
  goodDescription,
  badCode,
  goodCode,
  badMetrics,
  goodMetrics,
  visualDemo,
  takeaways,
  beginnerExplanation,
  seniorExplanation,
  mistake,
  fix,
  productionTakeaway,
  quiz
}) {
  const [level, setLevel] = useState("beginner");
  const [mode, setMode] = useState("split");
  const [impactValue, setImpactValue] = useState(0);
  const [completed, setCompleted] = useState(false);

  const explanation = level === "beginner" ? beginnerExplanation : seniorExplanation;
  const showBad = mode === "split" || mode === "bad";
  const showGood = mode === "split" || mode === "good";

  return (
    <motion.section
      id={id}
      className="scroll-mt-24"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.45 }}
    >
      <div id={number === 1 ? "habits" : undefined} className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-200">
              <FlaskConical className="h-4 w-4" />
              Habit {number}
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-slate-300">{difficulty}</span>
            <span className="rounded-full border border-yellow-300/20 bg-yellow-300/10 px-3 py-1 text-sm text-yellow-100">{impact}</span>
            {completed && (
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-sm text-emerald-100">
                <CheckCircle2 className="h-4 w-4" />
                Completed
              </span>
            )}
          </div>
          <h2 className="max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
        </div>
      </div>

      <div className="glass-panel rounded-3xl p-4 sm:p-6">
        <div className="mb-6 grid gap-4 xl:grid-cols-[1fr_auto] xl:items-center">
          <div className="inline-grid gap-2 rounded-2xl border border-white/10 bg-slate-950/60 p-1 sm:grid-cols-2">
            {["beginner", "senior"].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setLevel(item)}
                className={`focus-ring rounded-xl px-3 py-2 text-sm font-semibold transition ${level === item ? "bg-cyan-300 text-slate-950" : "text-slate-300 hover:bg-white/5"}`}
              >
                {item === "beginner" ? "Beginner Explanation" : "Senior Engineer Explanation"}
              </button>
            ))}
          </div>
          <div className="grid gap-2 rounded-2xl border border-white/10 bg-slate-950/60 p-1 sm:grid-cols-4">
            {comparisonModes.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setMode(item.id)}
                className={`focus-ring inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition ${mode === item.id ? "bg-white text-slate-950" : "text-slate-300 hover:bg-white/5"}`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {mode === "diff" ? (
            <motion.div
              key="diff"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid gap-4 lg:grid-cols-3"
            >
              <DifferenceCard title="Bad practice" body={badDescription} tone="bad" />
              <DifferenceCard title="What changed" body={takeaways.changed} tone="neutral" />
              <DifferenceCard title="Good practice" body={goodDescription} tone="good" />
            </motion.div>
          ) : (
            <motion.div
              key={mode}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`grid gap-5 ${mode === "split" ? "xl:grid-cols-2" : "grid-cols-1"}`}
            >
              {showBad && (
                <GoodBadPanel
                  tone="bad"
                  title={badTitle}
                  description={badDescription}
                  metrics={badMetrics}
                  visualDemo={visualDemo}
                  progress={impactValue}
                />
              )}
              {showGood && (
                <GoodBadPanel
                  tone="good"
                  title={goodTitle}
                  description={goodDescription}
                  metrics={goodMetrics}
                  visualDemo={visualDemo}
                  progress={impactValue}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-6">
          <PerformanceSlider value={impactValue} onChange={setImpactValue} />
        </div>

        <div className="mt-6 grid gap-5 xl:grid-cols-[1.25fr_0.75fr]">
          <CodeTabs badCode={badCode} goodCode={goodCode} why={explanation} tip={productionTakeaway} />
          <div className="space-y-4">
            <Callout icon={Brain} title="What changed?" tone="cyan">
              {takeaways.changed}
            </Callout>
            <RealWorldTip mistake={mistake} fix={fix} />
            <Callout icon={Sparkles} title="Production takeaway" tone="green">
              {productionTakeaway}
            </Callout>
            <QuizCard quiz={quiz} habitId={id} onComplete={() => setCompleted(true)} />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function DifferenceCard({ title, body, tone }) {
  const toneClass = {
    bad: "border-orange-300/20 bg-orange-300/8",
    good: "border-emerald-300/20 bg-emerald-300/8",
    neutral: "border-cyan-300/20 bg-cyan-300/8"
  }[tone];

  return (
    <div className={`rounded-2xl border p-5 ${toneClass}`}>
      <h3 className="mb-3 flex items-center gap-2 font-semibold text-white">
        <BadgeCheck className="h-4 w-4 text-cyan-200" />
        {title}
      </h3>
      <p className="text-sm leading-7 text-slate-300">{body}</p>
    </div>
  );
}

function Callout({ icon: Icon, title, children, tone }) {
  const toneClass = {
    cyan: "border-cyan-300/20 bg-cyan-300/8",
    green: "border-emerald-300/20 bg-emerald-300/8"
  }[tone];

  return (
    <div className={`rounded-2xl border p-5 ${toneClass}`}>
      <div className="mb-2 flex items-center gap-2 font-semibold text-white">
        <Icon className="h-4 w-4 text-cyan-200" />
        {title}
      </div>
      <p className="text-sm leading-6 text-slate-200">{children}</p>
    </div>
  );
}
