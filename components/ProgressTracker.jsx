"use client";

import { CheckCircle2, Circle, Trophy } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProgressTracker({ habits }) {
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    function readProgress() {
      const stored = window.localStorage.getItem("next-performance-lab-progress");
      setCompleted(stored ? JSON.parse(stored) : []);
    }

    readProgress();
    window.addEventListener("performance-lab-progress", readProgress);
    window.addEventListener("storage", readProgress);
    return () => {
      window.removeEventListener("performance-lab-progress", readProgress);
      window.removeEventListener("storage", readProgress);
    };
  }, []);

  const percent = Math.round((completed.length / habits.length) * 100);

  return (
    <aside className="hidden xl:block">
      <div className="sticky top-24 space-y-4">
        <div className="glass-panel rounded-2xl p-5">
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-300 text-slate-950">
              <Trophy className="h-5 w-5" />
            </span>
            <div>
              <p className="font-semibold text-white">Lab progress</p>
              <p className="text-sm text-slate-400">{completed.length} of {habits.length} completed</p>
            </div>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-slate-800">
            <div className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300 transition-all duration-500" style={{ width: `${percent}%` }} />
          </div>
          <p className="mt-3 text-right text-sm font-medium text-cyan-100">{percent}%</p>
        </div>
        <div className="glass-panel rounded-2xl p-4">
          <nav className="space-y-1">
            {habits.map((habit) => {
              const done = completed.includes(habit.id);
              return (
                <a key={habit.id} href={`#${habit.id}`} className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white">
                  {done ? <CheckCircle2 className="h-4 w-4 text-emerald-300" /> : <Circle className="h-4 w-4 text-slate-600" />}
                  <span className="line-clamp-1">{habit.navTitle}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </aside>
  );
}
