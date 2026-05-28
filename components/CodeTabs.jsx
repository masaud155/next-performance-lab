"use client";

import { Lightbulb, TerminalSquare } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import CodeBlock from "./CodeBlock";

const tabLabels = ["Bad Code", "Good Code", "Why It Matters", "Real Project Tip"];

export default function CodeTabs({ badCode, goodCode, why, tip }) {
  const [active, setActive] = useState("Bad Code");

  const content = useMemo(() => {
    if (active === "Bad Code") return { code: badCode, tone: "bad" };
    if (active === "Good Code") return { code: goodCode, tone: "good" };
    if (active === "Why It Matters") return { prose: why, icon: Lightbulb };
    return { prose: tip, icon: TerminalSquare };
  }, [active, badCode, goodCode, why, tip]);

  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/55 p-4">
      <div role="tablist" aria-label="Code comparison tabs" className="mb-4 grid gap-2 sm:grid-cols-4">
        {tabLabels.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={active === tab}
            onClick={() => setActive(tab)}
            className={`focus-ring rounded-xl px-3 py-2 text-sm font-semibold transition ${active === tab ? "bg-cyan-300 text-slate-950" : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.08]"}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={active} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.18 }}>
          {content.code ? (
            <CodeBlock code={content.code} tone={content.tone} />
          ) : (
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/8 p-5">
              <div className="mb-3 flex items-center gap-2 font-semibold text-white">
                <content.icon className="h-5 w-5 text-cyan-200" />
                {active}
              </div>
              <p className="leading-7 text-slate-300">{content.prose}</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
