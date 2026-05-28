export default function CompactModeToggle({ detailed, onChange }) {
  return (
    <div className="grid rounded-2xl border border-white/10 bg-slate-950/60 p-1 sm:grid-cols-2">
      {[
        { value: false, label: "Compact" },
        { value: true, label: "Detailed" }
      ].map((item) => (
        <button
          key={item.label}
          type="button"
          onClick={() => onChange(item.value)}
          className={`focus-ring rounded-xl px-3 py-2 text-sm font-semibold transition ${detailed === item.value ? "bg-cyan-300 text-slate-950" : "text-slate-300 hover:bg-white/5"}`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
