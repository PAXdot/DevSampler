/**
 * Minimal standalone stand-in for components-ui's full UIProvider / i18n
 * context (locale catalog, router adapter, portal container) - this draft
 * ships only the Chip component on its own, so only the slice of that
 * context Chip actually reads is reproduced here: the accessible name of
 * the remove button. The text ("Remove") is copied verbatim from the
 * library's English locale (src/i18n/ui/en.ts, messages.ui.chip.remove) and
 * is exactly what the real useMessages() hook returns when no UIProvider
 * wraps the component - i.e. Chip's real standalone/default behavior.
 */
export function useMessages() {
  return {
    ui: {
      chip: {
        remove: "Remove",
      },
    },
  };
}
