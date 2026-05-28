"use client";

import { ArrowRight, BadgeCheck, Brain, FlaskConical, RotateCcw, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import GoodBadPanel from "./GoodBadPanel";
import CodeBlock from "./CodeBlock";
import QuizCard from "./QuizCard";

const tabs = ["Bad Code", "Good Code", "Explanation"];

export default function PerformanceHabitComparison({
  id,
  number,
  title,
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
  productionTakeaway,
  quiz
}) {
  const [level, setLevel] = useState("beginner");
  const [activeTab, setActiveTab] = useState("Bad Code");
  const [improvement, setImprovement] = useState(0);
  const [applied, setApplied] = useState(false);

  const explanation = level === "beginner" ? beginnerExplanation : seniorExplanation;
  const currentCode = useMemo(() => {
    if (activeTab === "Bad Code") return badCode;
    if (activeTab === "Good Code") return goodCode;
    return explanation;
  }, [activeTab, badCode, goodCode, explanation]);

  function applyOptimization() {
    setApplied(true);
    setImprovement(100);
  }

  function resetOptimization() {
    setApplied(false);
    setImprovement(0);
  }

  return (
    <section id={id} className="scroll-mt-24">
      <div id={number === 1 ? "habits" : undefined} className="mb-6">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-200">
          <FlaskConical className="h-4 w-4" />
          Habit {number}
        </div>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      </div>

      <div className="rounded-2xl border border-line bg-panel/76 p-4 shadow-glow sm:p-6">
        <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="inline-flex rounded-lg border border-white/10 bg-slate-950/60 p-1">
            {["beginner", "senior"].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setLevel(item)}
                className={`rounded-md px-3 py-2 text-sm font-medium capitalize transition ${level === item ? "bg-cyan-300 text-slate-950" : "text-slate-300 hover:bg-white/5"}`}
              >
                {item === "beginner" ? "Beginner Explanation" : "Senior Engineer Explanation"}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={applyOptimization}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
            >
              <Sparkles className="h-4 w-4" />
              Apply Optimization
            </button>
            <button
              type="button"
              onClick={resetOptimization}
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10"
              aria-label="Reset optimization"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-2">
          <GoodBadPanel
            tone="bad"
            title={applied ? goodTitle : badTitle}
            description={applied ? goodDescription : badDescription}
            metrics={applied ? goodMetrics : badMetrics}
            visualDemo={visualDemo}
            applied={applied}
          />
          <GoodBadPanel
            tone="good"
            title={goodTitle}
            description={goodDescription}
            metrics={goodMetrics}
            visualDemo={visualDemo}
          />
        </div>

        <div className="mt-6 rounded-xl border border-white/10 bg-slate-950/55 p-5">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-white">Performance slider</p>
              <p className="text-sm text-slate-400">Drag from the slow implementation toward the optimized version.</p>
            </div>
            <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100">{improvement}% improved</span>
          </div>
          <input
            aria-label="Performance improvement"
            type="range"
            min="0"
            max="100"
            value={improvement}
            onChange={(event) => setImprovement(Number(event.target.value))}
            className="w-full accent-cyan-300"
          />
          <div className="mt-3 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-500">
            <span>Slow app</span>
            <ArrowRight className="h-4 w-4 text-cyan-300" />
            <span>Optimized app</span>
          </div>
          <motion.div className="mt-4 h-2 rounded-full bg-slate-800">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-orange-300 via-yellow-300 to-emerald-300"
              animate={{ width: `${improvement}%` }}
            />
          </motion.div>
        </div>

        <div className="mt-6 grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-xl border border-white/10 bg-slate-950/55 p-4">
            <div className="mb-4 flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition ${activeTab === tab ? "bg-cyan-300 text-slate-950" : "bg-white/5 text-slate-300 hover:bg-white/10"}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <CodeBlock code={currentCode} tone={activeTab === "Bad Code" ? "bad" : activeTab === "Good Code" ? "good" : "neutral"} />
          </div>

          <div className="space-y-4">
            <Callout icon={Brain} title="What changed?" tone="cyan">
              {takeaways.changed}
            </Callout>
            <Callout icon={BadgeCheck} title="Real-world mistake" tone="orange">
              {mistake}
            </Callout>
            <Callout icon={Sparkles} title="Production takeaway" tone="green">
              {productionTakeaway}
            </Callout>
            <QuizCard quiz={quiz} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Callout({ icon: Icon, title, children, tone }) {
  const toneClass = {
    cyan: "border-cyan-300/20 bg-cyan-300/8 text-cyan-100",
    orange: "border-orange-300/20 bg-orange-300/8 text-orange-100",
    green: "border-emerald-300/20 bg-emerald-300/8 text-emerald-100"
  }[tone];

  return (
    <div className={`rounded-xl border p-4 ${toneClass}`}>
      <div className="mb-2 flex items-center gap-2 font-semibold text-white">
        <Icon className="h-4 w-4" />
        {title}
      </div>
      <p className="text-sm leading-6 text-slate-200">{children}</p>
    </div>
  );
}
