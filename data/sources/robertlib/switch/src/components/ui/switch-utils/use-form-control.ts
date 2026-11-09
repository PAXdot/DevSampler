import {
  useCallback,
  useInsertionEffect,
  useLayoutEffect,
  useRef,
} from "react";

type FieldElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

/**
 * Keeps a field's DOM listeners while Activity hides it: its refs and
 * layout effects detach, but its form controls and state stay alive.
 * A replaced ref or removed element lets go after the commit; a real
 * unmount lets go at once, even when the field was already hidden.
 */
function useRetainedFieldWatch() {
  const watches = useRef(
    new Map<Element, { detached: boolean; stop: () => void }>(),
  );
  const visible = useRef(false);

  const releaseDetached = useCallback(() => {
    const current = watches.current;
    for (const [element, watch] of current) {
      if (!watch.detached || (!visible.current && element.isConnected)) {
        continue;
      }
      current.delete(element);
      watch.stop();
    }
  }, []);

  useLayoutEffect(() => {
    visible.current = true;
    // Revealing Activity reconnects only the refs still rendered. A ref
    // removed while hidden needs releasing even if its node stayed alive.
    queueMicrotask(releaseDetached);
    return () => {
      visible.current = false;
    };
  }, [releaseDetached]);

  useInsertionEffect(() => {
    // Hidden updates can remove a node whose ref already detached on hide.
    // There is no second ref cleanup, so check again after every commit.
    queueMicrotask(releaseDetached);
  });

  useInsertionEffect(() => {
    const current = watches.current;
    return () => {
      current.forEach((watch) => watch.stop());
      current.clear();
    };
  }, []);

  return useCallback(
    (element: Element, start: () => () => void) => {
      const current = watches.current;
      current.get(element)?.stop();
      const watch = { detached: false, stop: start() };
      current.set(element, watch);

      return () => {
        watch.detached = true;
        // Ref cleanup runs before the layout cleanup that tells us whether
        // Activity hid the field. Reattaching the same node replaces this
        // registration before this microtask gets a chance to remove it.
        queueMicrotask(releaseDetached);
      };
    },
    [releaseDetached],
  );
}

/** Points a `ref` prop at `element` - returns what detaches it again. */
export function attachRef<T>(
  ref: React.Ref<T> | undefined,
  element: T | null,
): () => void {
  if (typeof ref === "function") {
    const cleanup = ref(element);
    return typeof cleanup === "function" ? cleanup : () => ref(null);
  }

  if (ref) {
    ref.current = element;
    return () => {
      ref.current = null;
    };
  }

  return () => {};
}

/** Sets whether `form.reset()` checks a checkbox or a radio. */
function setDefaultChecked(input: HTMLInputElement, isDefault: boolean) {
  if (input.defaultChecked === isDefault) return;

  // Setting `checked` marks the input as changed by script - then its new
  // default leaves what it shows alone
  const { checked } = input;
  input.checked = checked;
  input.defaultChecked = isDefault;
}

type WatchedProperty = "checked" | "indeterminate" | "value";

/** A property of `element` - its own or that of its prototype. */
function findProperty(element: FieldElement, name: WatchedProperty) {
  for (
    let target: object | null = element;
    target;
    target = Object.getPrototypeOf(target)
  ) {
    const descriptor = Object.getOwnPropertyDescriptor(target, name);
    if (descriptor) return descriptor;
  }
  return undefined;
}

/**
 * Calls `onWrite` whenever a script sets the property `name` of `element` -
 * which fires no event: React Hook Form's `register()`, `setValue()` and
 * `reset()` set the `value` (the `checked` of a checkbox). Wraps the
 * property the way React tracks it, and passes every write on to it.
 * Returns what stops the watch.
 */
function watchPropertyWrites(
  element: FieldElement,
  name: WatchedProperty,
  onWrite: () => void,
) {
  const property = findProperty(element, name);
  const get = property?.get;
  const set = property?.set;
  if (!property || !get || !set) return () => {};

  const own = Object.getOwnPropertyDescriptor(element, name);
  let active = true;
  const setValue = function (this: FieldElement, next: unknown) {
    set.call(this, next);
    if (active) onWrite();
  };

  Object.defineProperty(element, name, {
    configurable: true,
    enumerable: property.enumerable,
    get() {
      return get.call(this);
    },
    set: setValue,
  });

  return () => {
    active = false;
    // Wrapped once more meanwhile - that wrapper keeps calling this one
    if (Object.getOwnPropertyDescriptor(element, name)?.set !== setValue) {
      return;
    }
    if (own) Object.defineProperty(element, name, own);
    else Reflect.deleteProperty(element, name);
  };
}

// Reset events waiting for every listener to have had a chance to cancel
// them, including later listeners on the same root and on the window
const pendingResets = new WeakMap<Node, Set<Event>>();
// The callbacks watching resets in a document or shadow root. A field
// rendered with a new ref during a reset (a state update of `onReset`
// renders before the event reaches the root) watches anew - the watchers
// alive when the reset settles count.
const resetWatchers = new WeakMap<
  Node,
  Set<(form: EventTarget | null, event: Event) => void>
>();

/**
 * A value written after form.reset() returns wins over its deferred reset,
 * e.g. React Hook Form restoring its defaults. Returns a reset still being
 * dispatched: its default action may yet overwrite the write.
 */
function supersedeResets(
  element: Element,
  superseded: WeakSet<Event>,
  formId?: string,
) {
  let dispatching: Event | undefined;
  for (const event of pendingResets.get(element.getRootNode()) ?? []) {
    if (event.eventPhase === Event.NONE) superseded.add(event);
    else if (event.target === ownerFormOf(element, formId)) dispatching = event;
  }
  return dispatching;
}

/**
 * Calls `onReset` after a reset of the current form of `element` that was
 * not canceled. Listens at the document or shadow root, so a form mounted
 * later, replaced or renamed is followed without reattaching the field.
 * Settles a task later, after every listener can cancel the reset. A
 * microtask is too early: a browser can run it between event listeners.
 * Capture also catches resets stopped before they bubble to the root.
 * `onCancel` lets a field keep script writes made during a canceled reset.
 */
function watchFormReset(
  element: Element,
  onReset: (event: Event) => void,
  formId?: string | (() => string | undefined),
  onCancel?: (event: Event) => void,
) {
  const root = element.getRootNode();
  const watchers = resetWatchers.get(root) ?? new Set();
  resetWatchers.set(root, watchers);
  // A function of its own - the same callback may watch twice
  const watcher = (form: EventTarget | null, event: Event) => {
    const currentFormId = typeof formId === "function" ? formId() : formId;
    if (!form || form !== ownerFormOf(element, currentFormId)) return;
    if (event.defaultPrevented) onCancel?.(event);
    else onReset(event);
  };
  watchers.add(watcher);

  const handleReset = (event: Event) => {
    const pending = pendingResets.get(root) ?? new Set<Event>();
    if (pending.has(event)) return;
    pending.add(event);
    pendingResets.set(root, pending);
    // A shadow-root event loses its target once dispatch has finished.
    const form = event.target;

    setTimeout(() => {
      pending.delete(event);
      // A callback may synchronously render and attach new watchers. They
      // must not be visited again by this reset.
      for (const current of [...(resetWatchers.get(root) ?? [])]) {
        current(form, event);
      }
    });
  };

  root.addEventListener("reset", handleReset, true);
  // Also catch a reset whose first watcher was attached after capture,
  // e.g. by a render in the form's onReset.
  root.addEventListener("reset", handleReset);

  return () => {
    watchers.delete(watcher);
    root.removeEventListener("reset", handleReset, true);
    root.removeEventListener("reset", handleReset);
  };
}

/** The form with `formId` in the same document or shadow root as `element`. */
function findForm(element: Element, formId: string) {
  const root = element.getRootNode() as Document | ShadowRoot;
  const form = root.getElementById?.(formId);
  return form instanceof HTMLFormElement ? form : null;
}

/** An explicit form association, including none, overrides the ancestor form. */
function ownerFormOf(element: Element, formId?: string) {
  if (formId !== undefined) return findForm(element, formId);
  if ("form" in element) {
    return element.form instanceof HTMLFormElement ? element.form : null;
  }
  return element.closest("form");
}

/**
 * Whether an `aria-invalid` of the page marks a field as invalid - `"true"`,
 * `"grammar"`, `"spelling"`, not `"false"`.
 */
export const isAriaInvalid = (value: React.AriaAttributes["aria-invalid"]) =>
  value !== undefined && value !== false && value !== "false";

/**
 * The `data-state` of a checkbox (a switch, an option of a group) - what it
 * shows: `checked`, `unchecked` or `indeterminate` (partly checked).
 */
export const checkedState = (
  checked: boolean | undefined,
  indeterminate?: boolean,
) => (indeterminate ? "indeterminate" : checked ? "checked" : "unchecked");

/**
 * Keeps the `data-state` of `checkbox` telling its state - also when the
 * state changes without a render: a click on an uncontrolled checkbox, a
 * reset of its form, a script setting `checked` (React Hook Form) or
 * `indeterminate`. Returns what stops it.
 */
function watchCheckedState(
  checkbox: HTMLInputElement,
  formId?: string | (() => string | undefined),
) {
  const update = () => {
    checkbox.dataset.state = checkedState(
      checkbox.checked,
      checkbox.indeterminate,
    );
  };
  const stopChecked = watchPropertyWrites(checkbox, "checked", update);
  const stopIndeterminate = watchPropertyWrites(
    checkbox,
    "indeterminate",
    update,
  );
  const stopReset = watchFormReset(checkbox, update, formId);
  checkbox.addEventListener("change", update);
  update();

  return () => {
    checkbox.removeEventListener("change", update);
    stopReset();
    stopIndeterminate();
    stopChecked();
  };
}

/**
 * For a checkbox that works controlled (`checked` + `onChange`) and
 * uncontrolled (`defaultChecked`) like a native one: makes `form.reset()` -
 * also the one after a React form action - leave a controlled checkbox
 * showing `checked`. (An uncontrolled one goes back to `defaultChecked` by
 * itself.) Also sets `indeterminate`, which exists only as a DOM property,
 * and keeps `data-state` telling what the checkbox shows (`checkedState` -
 * render it too, for the first paint and the server).
 *
 * Put the returned ref on the checkbox - it keeps its own `ref` prop working.
 */
export function useCheckedControl({
  checked,
  form,
  indeterminate,
  ref,
}: {
  checked?: boolean;
  /** Follows resets of the checkbox's current form. */
  form?: string;
  /**
   * Left alone while `undefined` - the page may set it itself - after
   * clearing it once when it goes from `true` to `undefined`
   * (`indeterminate={partly || undefined}`).
   */
  indeterminate?: boolean;
  ref?: React.Ref<HTMLInputElement>;
}) {
  const element = useRef<HTMLInputElement | null>(null);
  const retainWatch = useRetainedFieldWatch();
  const latestForm = useRef(form);
  // Whether the last render made the checkbox partly checked
  const wasIndeterminate = useRef(false);

  useInsertionEffect(() => {
    latestForm.current = form;
  }, [form]);

  const checkboxRef = useCallback(
    (checkbox: HTMLInputElement | null) => {
      const detachWatch = checkbox
        ? retainWatch(checkbox, () => {
            element.current = checkbox;
            const stopState = watchCheckedState(
              checkbox,
              () => latestForm.current,
            );
            return () => {
              if (element.current === checkbox) element.current = null;
              stopState();
            };
          })
        : undefined;
      const detachRef = attachRef(ref, checkbox);

      return () => {
        detachRef();
        detachWatch?.();
      };
    },
    [ref, retainWatch],
  );

  const sync = () => {
    const checkbox = element.current;
    if (!checkbox) return;

    if (checked !== undefined) setDefaultChecked(checkbox, checked);

    // A click clears it - every render puts it back while the prop says so.
    // The prop going away takes back the partly checked state it set.
    if (indeterminate !== undefined) {
      checkbox.indeterminate = indeterminate;
    } else if (wasIndeterminate.current) {
      checkbox.indeterminate = false;
    }
    wasIndeterminate.current = indeterminate === true;

    // A render writes the `data-state` of the props - the checkbox may show
    // another one (an uncontrolled checkbox the user clicked)
    checkbox.dataset.state = checkedState(
      checkbox.checked,
      checkbox.indeterminate,
    );
  };

  // Retained checkboxes still submit and reset while Activity is hidden.
  useInsertionEffect(sync);
  // Ref callbacks attach new checkboxes after insertion effects.
  useLayoutEffect(sync);

  return checkboxRef;
}
