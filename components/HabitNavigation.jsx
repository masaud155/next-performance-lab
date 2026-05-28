import { ListChecks } from "lucide-react";

export default function HabitNavigation({ habits }) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 rounded-xl border border-line bg-panel/78 p-4 backdrop-blur">
        <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
          <ListChecks className="h-4 w-4 text-cyan-300" />
          Performance Habits
        </div>
        <nav className="space-y-1">
          {habits.map((habit) => (
            <a
              key={habit.id}
              href={`#${habit.id}`}
              className="block rounded-lg px-3 py-2 text-sm leading-5 text-slate-400 transition hover:bg-white/5 hover:text-cyan-100"
            >
              <span className="mr-2 text-cyan-300">{habit.number}.</span>
              {habit.navTitle}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
