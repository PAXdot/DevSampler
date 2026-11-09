import {
  useCallback,
  useInsertionEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { flushSync } from "react-dom";
import { usePortalContainer } from "@/components/ui/select-utils/ui-context";

type FieldElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
type FieldValue = string | number | readonly string[];

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
    queueMicrotask(releaseDetached);
    return () => {
      visible.current = false;
    };
  }, [releaseDetached]);

  useInsertionEffect(() => {
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
        queueMicrotask(releaseDetached);
      };
    },
    [releaseDetached],
  );
}

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

function setDefaultChecked(input: HTMLInputElement, isDefault: boolean) {
  if (input.defaultChecked === isDefault) return;

  const { checked } = input;
  input.checked = checked;
  input.defaultChecked = isDefault;
}

function setResetValue(element: FieldElement, value: FieldValue | undefined) {
  const values = new Set(
    (Array.isArray(value) ? value : [value ?? ""]).map(String),
  );

  if (element instanceof HTMLSelectElement) {
    for (const option of element.options) {
      const isDefault = values.has(option.value);
      if (option.defaultSelected === isDefault) continue;

      const { selected } = option;
      option.selected = selected;
      option.defaultSelected = isDefault;
    }
  } else if (element instanceof HTMLInputElement && element.type === "radio") {
    setDefaultChecked(
      element,
      value !== undefined && values.has(element.value),
    );
  }
}

function readValue(element: FieldElement): FieldValue {
  return element instanceof HTMLSelectElement && element.multiple
    ? Array.from(element.selectedOptions, (option) => option.value)
    : element.value;
}

type WatchedProperty = "checked" | "indeterminate" | "value";

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
    if (Object.getOwnPropertyDescriptor(element, name)?.set !== setValue) {
      return;
    }
    if (own) Object.defineProperty(element, name, own);
    else Reflect.deleteProperty(element, name);
  };
}

const pendingResets = new WeakMap<Node, Set<Event>>();
const resetWatchers = new WeakMap<
  Node,
  Set<(form: EventTarget | null, event: Event) => void>
>();

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

function watchFormReset(
  element: Element,
  onReset: (event: Event) => void,
  formId?: string | (() => string | undefined),
  onCancel?: (event: Event) => void,
) {
  const root = element.getRootNode();
  const watchers = resetWatchers.get(root) ?? new Set();
  resetWatchers.set(root, watchers);
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
    const form = event.target;

    setTimeout(() => {
      pending.delete(event);
      for (const current of [...(resetWatchers.get(root) ?? [])]) {
        current(form, event);
      }
    });
  };

  root.addEventListener("reset", handleReset, true);
  root.addEventListener("reset", handleReset);

  return () => {
    watchers.delete(watcher);
    root.removeEventListener("reset", handleReset, true);
    root.removeEventListener("reset", handleReset);
  };
}

const holdsValue = (element: FieldElement) =>
  !(
    element instanceof HTMLInputElement &&
    (element.type === "checkbox" || element.type === "radio")
  );

function sameValue(a: FieldValue | undefined, b: FieldValue | undefined) {
  if (a === undefined || b === undefined) return false;

  const left = Array.isArray(a) ? a : [a];
  const right = Array.isArray(b) ? b : [b];
  return (
    left.length === right.length &&
    left.every((value, index) => String(value) === String(right[index]))
  );
}

const showsDefault = (
  written: FieldValue | undefined,
  defaultValue: FieldValue | undefined,
  shownDefault: FieldValue | undefined,
) => sameValue(written, defaultValue ?? "") || sameValue(written, shownDefault);

export function useFormControl<T extends FieldElement = FieldElement>({
  commitBeforeChange = false,
  defaultValue,
  followScriptWrites = false,
  form,
  onChange,
  ref,
  shownDefault,
  value,
}: {
  commitBeforeChange?: boolean;
  defaultValue?: FieldValue;
  followScriptWrites?: boolean;
  form?: string;
  onChange?: React.ChangeEventHandler<T>;
  ref?: React.Ref<T>;
  shownDefault?: FieldValue;
  value?: FieldValue;
}) {
  const [enteredValue, setEnteredValue] = useState<FieldValue>();
  const isControlled = value !== undefined;
  const elements = useRef(new Set<T>());
  const retainWatch = useRetainedFieldWatch();
  const supersededResets = useRef(new WeakSet<Event>());
  const latest = useRef({
    defaultValue,
    form,
    entered: undefined as FieldValue | undefined,
    fromScript: false,
    isControlled,
    shownDefault,
    writeDuringReset: undefined as Event | undefined,
  });

  const handleChange = useCallback(
    (event: React.ChangeEvent<T>) => {
      const enter = () => {
        for (const element of elements.current) {
          supersedeResets(element, supersededResets.current, form);
        }
        const entered = readValue(event.target);
        latest.current.entered = entered;
        latest.current.fromScript = false;
        latest.current.writeDuringReset = undefined;
        setEnteredValue(entered);
      };

      if (commitBeforeChange && !isControlled) {
        flushSync(enter);
        onChange?.(event);
        return;
      }
      onChange?.(event);
      if (!isControlled) enter();
    },
    [commitBeforeChange, form, isControlled, onChange],
  );

  const fieldRef = useCallback(
    (element: T | null) => {
      const handleReset = (event: Event) => {
        if (supersededResets.current.has(event)) return;
        latest.current.entered = undefined;
        latest.current.fromScript = false;
        latest.current.writeDuringReset = undefined;
        setEnteredValue(undefined);
      };

      const handleCancelReset = (event: Event) => {
        const state = latest.current;
        if (state.writeDuringReset !== event) return;
        state.writeDuringReset = undefined;
        setEnteredValue(state.entered);
      };

      const handleWrite = () => {
        const state = latest.current;
        if (!element || state.isControlled) return;

        const dispatching = supersedeResets(
          element,
          supersededResets.current,
          state.form,
        );
        const written = readValue(element);
        if (
          state.entered === undefined &&
          showsDefault(written, state.defaultValue, state.shownDefault)
        ) {
          return;
        }

        state.entered = written;
        state.fromScript = true;
        state.writeDuringReset = dispatching;
        if (!dispatching) setEnteredValue(written);
      };

      const detachWatch = element
        ? retainWatch(element, () => {
            elements.current.add(element);
            const stopWatching =
              followScriptWrites && holdsValue(element)
                ? watchPropertyWrites(element, "value", handleWrite)
                : undefined;
            const stopResetWatch = watchFormReset(
              element,
              handleReset,
              () => latest.current.form,
              handleCancelReset,
            );
            return () => {
              elements.current.delete(element);
              stopResetWatch();
              stopWatching?.();
            };
          })
        : undefined;
      const detachRef = attachRef(ref, element);

      return () => {
        detachWatch?.();
        detachRef();
      };
    },
    [followScriptWrites, ref, retainWatch],
  );

  const resetValue = isControlled ? value : defaultValue;

  useInsertionEffect(() => {
    const state = latest.current;
    state.defaultValue = defaultValue;
    state.form = form;
    state.isControlled = isControlled;
    state.shownDefault = shownDefault;
  }, [defaultValue, form, isControlled, shownDefault]);

  useLayoutEffect(() => {
    const state = latest.current;
    if (
      !isControlled &&
      enteredValue === undefined &&
      state.fromScript &&
      showsDefault(state.entered, defaultValue, shownDefault)
    ) {
      state.entered = undefined;
      state.fromScript = false;
      setEnteredValue(undefined);
    }
  }, [defaultValue, enteredValue, isControlled, shownDefault]);

  useInsertionEffect(() => {
    for (const element of elements.current) {
      setResetValue(element, resetValue);
    }
  });

  useLayoutEffect(() => {
    for (const element of elements.current) {
      setResetValue(element, resetValue);
    }
  });

  const resolvedValue = isControlled ? value : (enteredValue ?? defaultValue);

  return {
    fieldRef,
    handleChange,
    hasValue: resolvedValue !== undefined,
    value: resolvedValue ?? "",
  };
}

export const isAriaInvalid = (value: React.AriaAttributes["aria-invalid"]) =>
  value !== undefined && value !== false && value !== "false";

export const checkedState = (
  checked: boolean | undefined,
  indeterminate?: boolean,
) => (indeterminate ? "indeterminate" : checked ? "checked" : "unchecked");

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

export function useCheckedControl({
  checked,
  form,
  indeterminate,
  ref,
}: {
  checked?: boolean;
  form?: string;
  indeterminate?: boolean;
  ref?: React.Ref<HTMLInputElement>;
}) {
  const element = useRef<HTMLInputElement | null>(null);
  const retainWatch = useRetainedFieldWatch();
  const latestForm = useRef(form);
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

    if (indeterminate !== undefined) {
      checkbox.indeterminate = indeterminate;
    } else if (wasIndeterminate.current) {
      checkbox.indeterminate = false;
    }
    wasIndeterminate.current = indeterminate === true;

    checkbox.dataset.state = checkedState(
      checkbox.checked,
      checkbox.indeterminate,
    );
  };

  useInsertionEffect(sync);
  useLayoutEffect(sync);

  return checkboxRef;
}

function* fieldsetsAround(element: Element) {
  for (
    let fieldset = element.parentElement?.closest("fieldset");
    fieldset;
    fieldset = fieldset.parentElement?.closest("fieldset")
  ) {
    yield fieldset;
  }
}

function isDisabledByFieldset(element: Element) {
  for (const fieldset of fieldsetsAround(element)) {
    if (
      fieldset.disabled &&
      !fieldset.querySelector(":scope > legend")?.contains(element)
    ) {
      return true;
    }
  }
  return false;
}

export function useFieldsetDisabled() {
  const [disabled, setDisabled] = useState(false);

  const ref = useCallback((element: Element | null) => {
    if (!element) return;

    const update = () => setDisabled(isDisabledByFieldset(element));
    update();

    const observer = new MutationObserver(update);
    for (const fieldset of fieldsetsAround(element)) {
      observer.observe(fieldset, {
        attributeFilter: ["disabled"],
        childList: true,
      });
    }

    return () => observer.disconnect();
  }, []);

  return [disabled, ref] as const;
}

function findForm(element: Element, formId: string) {
  const root = element.getRootNode() as Document | ShadowRoot;
  const form = root.getElementById?.(formId);
  return form instanceof HTMLFormElement ? form : null;
}

function ownerFormOf(element: Element, formId?: string) {
  if (formId !== undefined) return findForm(element, formId);
  if ("form" in element) {
    return element.form instanceof HTMLFormElement ? element.form : null;
  }
  return element.closest("form");
}

export function useOmitFormValue(name: string | undefined, formId?: string) {
  const latest = useRef({ formId, name });
  const retainWatch = useRetainedFieldWatch();
  const getPortalContainer = usePortalContainer();

  useInsertionEffect(() => {
    latest.current = { formId, name };
  });

  const dropValue = useCallback((event: Event) => {
    const { formId: currentForm, name: currentName } = latest.current;
    const form = event.composedPath()[0] ?? event.target;
    if (
      currentName === undefined ||
      !(form instanceof HTMLFormElement) ||
      (currentForm !== undefined && findForm(form, currentForm) !== form)
    ) {
      return;
    }

    if (
      Array.from(form.elements).some(
        (control) =>
          control instanceof HTMLInputElement &&
          control.type === "radio" &&
          control.name === currentName,
      )
    ) {
      (event as FormDataEvent).formData.delete(currentName);
    }
  }, []);

  useInsertionEffect(() => {
    document.addEventListener("formdata", dropValue, true);
    return () => document.removeEventListener("formdata", dropValue, true);
  }, [dropValue]);

  const portalWatch = useRef({
    active: false,
    getPortalContainer,
    root: null as ShadowRoot | null,
  });
  const dropFromRoot = useCallback(
    (event: Event) => dropValue(event),
    [dropValue],
  );
  const syncPortalRoot = useCallback(() => {
    const watch = portalWatch.current;
    if (!watch.active) return;
    const node = watch.getPortalContainer().getRootNode();
    const root = node instanceof ShadowRoot ? node : null;
    if (watch.root === root) return;
    watch.root?.removeEventListener("formdata", dropFromRoot, true);
    watch.root = root;
    root?.addEventListener("formdata", dropFromRoot, true);
  }, [dropFromRoot]);

  useInsertionEffect(() => {
    const watch = portalWatch.current;
    watch.active = true;
    return () => {
      watch.active = false;
      watch.root?.removeEventListener("formdata", dropFromRoot, true);
      watch.root = null;
    };
  }, [dropFromRoot]);

  useInsertionEffect(() => {
    portalWatch.current.getPortalContainer = getPortalContainer;
    queueMicrotask(syncPortalRoot);
  });
  useLayoutEffect(syncPortalRoot);

  return useCallback(
    (element: Element | null) => {
      if (!element) return;

      const root = element.getRootNode();
      return retainWatch(element, () => {
        if (!(root instanceof ShadowRoot)) return () => {};
        root.addEventListener("formdata", dropValue, true);
        return () => root.removeEventListener("formdata", dropValue, true);
      });
    },
    [dropValue, retainWatch],
  );
}

export function useFormReset(onReset: () => void, formId?: string) {
  const latest = useRef({ formId, onReset });
  const retainWatch = useRetainedFieldWatch();

  useInsertionEffect(() => {
    latest.current = { formId, onReset };
  });

  return useCallback(
    (element: Element | null) => {
      if (!element) return;

      return retainWatch(element, () =>
        watchFormReset(
          element,
          () => latest.current.onReset(),
          () => latest.current.formId,
        ),
      );
    },
    [retainWatch],
  );
}
