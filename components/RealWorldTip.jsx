import { Hammer, TriangleAlert } from "lucide-react";

export default function RealWorldTip({ mistake, fix }) {
  return (
    <div className="grid gap-3">
      <div className="rounded-2xl border border-orange-300/20 bg-orange-300/8 p-5">
        <div className="mb-2 flex items-center gap-2 font-semibold text-orange-100">
          <TriangleAlert className="h-5 w-5" />
          Real-world mistake
        </div>
        <p className="text-sm leading-6 text-slate-200">{mistake}</p>
      </div>
      <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/8 p-5">
        <div className="mb-2 flex items-center gap-2 font-semibold text-emerald-100">
          <Hammer className="h-5 w-5" />
          Practical fix
        </div>
        <p className="text-sm leading-6 text-slate-200">{fix}</p>
      </div>
    </div>
  );
}
