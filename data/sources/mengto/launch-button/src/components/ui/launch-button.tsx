import { Zap } from "lucide-react";

export default function LaunchButton() {
  return (
    <button className="group/btn relative">
      <div className="-inset-1 group-hover/btn:opacity-75 transition duration-500 bg-amber-500/40 opacity-40 rounded-xl absolute blur" />
      <div className="relative bg-gradient-to-b from-amber-200 via-amber-300 to-amber-500 text-amber-950 rounded-xl px-8 py-4 flex items-center gap-3 shadow-[0_0_0_1px_rgba(251,191,36,0.5),0_4px_0_#b45309,0_10px_15px_-3px_rgba(0,0,0,0.5)] active:translate-y-[2px] active:shadow-[0_0_0_1px_rgba(251,191,36,0.5),0_2px_0_#b45309] transition-all duration-150">
        <span className="text-lg font-medium tracking-tight">
          Initialize Launch
        </span>
        <Zap className="w-5 h-5 fill-amber-950/20 stroke-[1.5]" />
      </div>
    </button>
  );
}
