import {
  tokens,
  useThemeContext,
  usePal,
} from "@/components/ui/scroll-area-utils/theme";

function ScrollArea({ children, maxHeight = 200, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  return (
    <div
      style={{
        maxHeight,
        overflow: "auto",
        borderRadius: tokens.radius.sm,
        scrollbarWidth: "thin",
        scrollbarColor: `${pal.bgMuted} transparent`,
      }}
    >
      {children}
    </div>
  );
}

export default ScrollArea;
