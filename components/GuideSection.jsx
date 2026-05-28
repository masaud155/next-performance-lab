import { CheckCircle2 } from "lucide-react";

export default function GuideSection({ section, icon: Icon }) {
  return (
    <section id={section.id} className="glass-panel rounded-2xl p-6 sm:p-8">
      <div className="mb-4 flex items-center gap-3">
        {Icon && (
          <span className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
            <Icon className="h-5 w-5" />
          </span>
        )}
        <h2 className="text-2xl font-semibold tracking-tight text-white">{section.title}</h2>
      </div>
      <p className="text-base leading-8 text-slate-300">{section.body}</p>
      {section.bullets && (
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {section.bullets.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm text-slate-200">
              <CheckCircle2 className="h-4 w-4 text-emerald-300" />
              {item}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
