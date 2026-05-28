export default function ViewModeToggle({ modes, active, onChange }) {
  return (
    <div className="grid gap-2 rounded-2xl border border-white/10 bg-slate-950/60 p-1 sm:grid-cols-4">
      {modes.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onChange(item.id)}
          className={`focus-ring inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition ${active === item.id ? "bg-white text-slate-950" : "text-slate-300 hover:bg-white/5"}`}
        >
          <item.icon className="h-4 w-4" />
          {item.label}
        </button>
      ))}
    </div>
  );
}
