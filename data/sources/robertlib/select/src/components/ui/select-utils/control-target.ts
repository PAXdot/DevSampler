const CONTROL_SELECTOR =
  "a[href], button, input, select, textarea, [contenteditable], [tabindex]";

export function isControlTarget(target: EventTarget, frame: Element) {
  if (!(target instanceof Node) || !frame.contains(target)) return true;

  for (
    let node = target instanceof Element ? target : null;
    node && node !== frame;
    node = node.parentElement
  ) {
    if (node.matches(CONTROL_SELECTOR)) return true;
  }
  return false;
}
