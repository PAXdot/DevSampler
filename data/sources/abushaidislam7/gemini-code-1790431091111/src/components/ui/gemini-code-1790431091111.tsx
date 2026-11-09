import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronDown, Check } from "lucide-react";

interface Language {
  code: string;
  label: string;
  flag: string;
}

const languages: Language[] = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "zh-CN", label: "简体中文", flag: "🇨🇳" },
  { code: "zh-TW", label: "繁體中文", flag: "🇨🇳" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "pt-BR", label: "Português (BR)", flag: "🇧🇷" },
  { code: "ko", label: "한국어", flag: "🇰🇷" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "tr", label: "Türkçe", flag: "🇹🇷" },
  { code: "id", label: "Bahasa Indonesia", flag: "🇮🇩" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "fa", label: "فارسی", flag: "🇮🇷" },
];

export const LanguageSelector = () => {
  const [selected, setSelected] = useState<Language>(languages[0]);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Morphing Container */}
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        className={cn(
          "overflow-hidden border border-gray-200/80 dark:border-neutral-700/80",
          "bg-white/80 dark:bg-neutral-900/85 backdrop-blur-xl shadow-lg",
          open ? "w-56 rounded-2xl p-1.5" : "w-auto rounded-full p-1"
        )}
      >
        {/* Closed View: Trigger */}
        {!open ? (
          <motion.button
            layout="position"
            key="trigger"
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 px-3 py-1 text-sm font-medium text-gray-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors"
          >
            <span>{selected.flag}</span>
            <span>{selected.label}</span>
            <ChevronDown className="h-4 w-4 text-gray-500 transition-transform" />
          </motion.button>
        ) : (
          /* Open View: Menu List */
          <motion.div
            key="menu"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="flex flex-col gap-0.5 max-h-64 overflow-y-auto pr-1 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-700 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-400 dark:hover:[&::-webkit-scrollbar-thumb]:bg-neutral-600 [scrollbar-width:thin] [scrollbar-color:rgba(156,163,175,0.5)_transparent]"
          >
            <div className="flex items-center justify-between px-3 py-1.5 mb-1 border-b border-gray-100 dark:border-neutral-800 text-xs font-semibold tracking-wide text-gray-400 dark:text-neutral-500 uppercase">
              <span>Select Language</span>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-neutral-300"
              >
                ✕
              </button>
            </div>

            {languages.map((lang) => {
              const isSelected = selected.code === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => {
                    setSelected(lang);
                    setOpen(false);
                  }}
                  className={cn(
                    "group relative flex items-center gap-2.5 w-full px-3 py-2 text-sm rounded-lg text-left transition-all",
                    isSelected
                      ? "text-blue-600 dark:text-blue-400 font-medium"
                      : "text-gray-700 dark:text-neutral-300 hover:bg-black/5 dark:hover:bg-white/5"
                  )}
                >
                  {/* Active highlight pill */}
                  {isSelected && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-blue-50 dark:bg-blue-950/40 rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  <span className="text-base">{lang.flag}</span>
                  <span className="flex-1">{lang.label}</span>

                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 25 }}
                    >
                      <Check className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </motion.div>
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};