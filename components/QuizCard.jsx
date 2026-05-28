"use client";

import { CheckCircle2, CircleHelp } from "lucide-react";
import { useState } from "react";

export default function QuizCard({ quiz }) {
  const [selected, setSelected] = useState(null);
  const correct = selected === quiz.answer;

  return (
    <div className="rounded-xl border border-line bg-panelSoft/70 p-5">
      <div className="mb-4 flex items-center gap-2">
        <CircleHelp className="h-5 w-5 text-yellow-300" />
        <h4 className="font-semibold text-white">Mini quiz</h4>
      </div>
      <p className="text-sm leading-6 text-slate-300">{quiz.question}</p>
      <div className="mt-4 grid gap-2 sm:grid-cols-3">
        {quiz.options.map((option) => {
          const active = selected === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => setSelected(option)}
              className={`rounded-lg border px-3 py-3 text-left text-sm transition ${active ? "border-cyan-300 bg-cyan-300/12 text-cyan-100" : "border-white/10 bg-white/[0.03] text-slate-300 hover:bg-white/[0.06]"}`}
            >
              {option}
            </button>
          );
        })}
      </div>
      {selected && (
        <div className={`mt-4 flex items-start gap-2 rounded-lg border p-3 text-sm ${correct ? "border-emerald-300/20 bg-emerald-300/8 text-emerald-100" : "border-orange-300/20 bg-orange-300/8 text-orange-100"}`}>
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{correct ? quiz.correct : quiz.incorrect}</span>
        </div>
      )}
    </div>
  );
}
