"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BadgeCheck, Brain, CheckCircle2, Columns2, Eye, FlaskConical, Layers3, Sparkles, Wand2 } from "lucide-react";
import { useState } from "react";
import CodeTabs from "./CodeTabs";
import CompactModeToggle from "./CompactModeToggle";
import GoodBadPanel from "./GoodBadPanel";
import MetricComparison from "./MetricComparison";
import PerformanceSlider from "./PerformanceSlider";
import QuizCard from "./QuizCard";
import RealWorldTip from "./RealWorldTip";
import ViewModeToggle from "./ViewModeToggle";

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
  mistake,
  fix,
  productionTakeaway,
  quiz
}) {
  const [mode, setMode] = useState("split");
  const [detailed, setDetailed] = useState(false);
  const [impactValue, setImpactValue] = useState(0);
  const [completed, setCompleted] = useState(false);

  const explanation = beginnerExplanation;
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
      <div id={number === 1 ? "habits" : undefined} className="mb-5 grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-200">
              <FlaskConical className="h-4 w-4" />
              Habit {number}
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-slate-300">{difficulty}</span>
            {completed && (
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-sm text-emerald-100">
                <CheckCircle2 className="h-4 w-4" />
                Completed
              </span>
            )}
          </div>
          <h2 className="text-gradient max-w-5xl text-3xl font-semibold tracking-tight sm:text-4xl xl:text-5xl">{title}</h2>
          <p className="mt-3 max-w-4xl text-base leading-7 text-slate-300">{goodDescription}</p>
        </div>
        <CompactModeToggle detailed={detailed} onChange={setDetailed} />
      </div>

      <div className="glass-panel relative overflow-hidden rounded-3xl p-4 sm:p-6">
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
        <div className="mb-6 grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <ViewModeToggle modes={comparisonModes} active={mode} onChange={setMode} />
          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-slate-950/50 px-3 py-2 text-sm text-slate-400 lg:flex">
            <Wand2 className="h-4 w-4 text-cyan-300" />
            Focused review
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
                  code={badCode}
                  metrics={badMetrics}
                  visualDemo={visualDemo}
                  progress={impactValue}
                  detailed={detailed}
                />
              )}
              {showGood && (
                <GoodBadPanel
                  tone="good"
                  title={goodTitle}
                  description={goodDescription}
                  code={goodCode}
                  metrics={goodMetrics}
                  visualDemo={visualDemo}
                  progress={impactValue}
                  detailed={detailed}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-6 grid gap-5 xl:grid-cols-[1fr_360px]">
          <MetricComparison badMetrics={badMetrics} goodMetrics={goodMetrics} />
          <PerformanceSlider value={impactValue} onChange={setImpactValue} />
        </div>

        {detailed && (
          <div className="mt-6 grid gap-5 xl:grid-cols-[minmax(0,1fr)_420px]">
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
        )}
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
