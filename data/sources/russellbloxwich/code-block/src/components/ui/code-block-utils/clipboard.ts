/**
 * Verbatim excerpt of the `copyToClipboard` helper from
 * src/components/ui/clipboard-text.tsx in RussellBloxwich/cfui (MIT).
 * Extracted standalone because it is a small, self-contained, non-demoable
 * leaf utility with no sub-dependencies.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof window === "undefined") return false;

  // Try modern Clipboard API first
  if (navigator?.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fall through to fallback
    }
  }

  // Fallback using execCommand with selection preservation
  try {
    const selection = window.getSelection();
    const originalRange =
      selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : null;

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    textarea.style.top = "-9999px";
    textarea.style.opacity = "0";
    textarea.setAttribute("readonly", "");
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    textarea.setSelectionRange(0, text.length);

    let successful = false;
    try {
      successful = document.execCommand("copy");
    } catch {
      successful = false;
    }

    document.body.removeChild(textarea);

    // Restore original user selection
    if (selection && originalRange) {
      selection.removeAllRanges();
      selection.addRange(originalRange);
    }

    return Boolean(successful);
  } catch {
    return false;
  }
}
