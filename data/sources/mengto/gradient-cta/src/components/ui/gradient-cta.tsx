import { Send } from "lucide-react";

export default function GradientCta() {
  return (
    <button
      className="group shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 overflow-hidden font-medium text-orange-900 bg-gradient-to-r from-[#FFEBB1] to-[#FFC438] rounded-xl pt-4 pr-8 pb-4 pl-8 relative shadow-lg"
      style={{
        boxShadow:
          "0 15px 33px -12px rgba(255,162,42,0.9), inset 0 4px 6.3px rgba(252,220,134,1), inset 0 -5px 6.3px rgba(255,162,38,1)",
        borderRadius: "9999px",
      }}
    >
      <div className="group-hover:translate-y-0 transition-transform duration-300 bg-white/20 absolute top-0 right-0 bottom-0 left-0 translate-y-full" />
      <span className="relative flex items-center gap-2">
        Start Free Pilot
        <Send className="w-4 h-4" />
      </span>
    </button>
  );
}
