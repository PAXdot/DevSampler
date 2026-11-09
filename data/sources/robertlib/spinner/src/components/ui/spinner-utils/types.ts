import type appMessages from "@/components/ui/spinner-utils/app-en";

export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends readonly unknown[]
    ? T[K]
    : T[K] extends object
      ? DeepPartial<T[K]>
      : T[K];
};

export type PluralMessage = Partial<Record<Intl.LDMLPluralRule, string>> & {
  other: string;
};

export interface MessageCatalog {
  [key: string]: string | PluralMessage | MessageCatalog;
}

export type MessageShape<T> = T extends string
  ? string
  : T extends PluralMessage
    ? keyof T extends Intl.LDMLPluralRule
      ? PluralMessage
      : { [K in keyof T]: MessageShape<T[K]> }
    : { [K in keyof T]: MessageShape<T[K]> };

export type AppMessages = MessageShape<typeof appMessages>;

export type WeekDay = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type DatePatternToken =
  | "A"
  | "D"
  | "DD"
  | "H"
  | "HH"
  | "M"
  | "MM"
  | "W"
  | "WW"
  | "YYYY"
  | "h"
  | "hh"
  | "mm";

export interface DateFormats {
  date: string;
  dateTime: string;
  month: string;
  time: string;
  week: string;
}

export interface UIMessages {
  phoneInput: { country: string; invalid: string };
  repeatableField: {
    add: string;
    remove: string;
    moveUp: string;
    moveDown: string;
    minimum: PluralMessage;
    maximum: PluralMessage;
  };
  chart: {
    category: string;
    legend: string;
    noData: string;
    noValue: string;
    showData: string;
  };
  imageViewer: {
    image: string;
    images: string;
    loading: string;
    loadError: string;
    next: string;
    noImages: string;
    position: string;
    previous: string;
    resetZoom: string;
    title: string;
    zoom: string;
    zoomIn: string;
    zoomOut: string;
  };
  transferList: {
    addAll: string;
    addSelected: string;
    available: string;
    maximum: PluralMessage;
    minimum: PluralMessage;
    noItems: string;
    removeAll: string;
    removeSelected: string;
    searchAvailable: string;
    searchSelected: string;
    selected: string;
    selectVisible: string;
  };
  common: {
    cancel: string;
    close: string;
    confirm: string;
    delete: string;
    loading: string;
    no: string;
    yes: string;
  };
  accordion: { toggle: string };
  alert: { close: string };
  autocomplete: {
    clear: string;
    create: string;
    created: string;
    createError: string;
    createHint: string;
    creating: string;
    emptyOption: string;
    listLabel: string;
    loadError: string;
    loading: string;
    loadingSelected: string;
    maxSelections: PluralMessage;
    moreSelected: PluralMessage;
    noResults: string;
    resultCount: PluralMessage;
    selectAll: string;
  };
  avatar: {
    more: PluralMessage;
    status: { away: string; busy: string; offline: string; online: string };
    statusLabel: string;
  };
  badge: { overflow: string };
  breadcrumbs: { home: string; label: string; showAll: string };
  calendar: Record<string, unknown>;
  checkboxGroup: {
    max: PluralMessage;
    min: PluralMessage;
    selectAll: string;
  };
  chip: { remove: string };
  colorInput: Record<string, unknown>;
  colorScheme: { dark: string; label: string; light: string; system: string };
  commandPalette: Record<string, unknown>;
  confirmDialog: { ok: string; typeToConfirm: string };
  copyButton: { copied: string; copy: string; error: string };
  dataTable: Record<string, unknown>;
  dateCalendar: { selectedDays: PluralMessage };
  dateRangePicker: Record<string, unknown>;
  dateTimePicker: Record<string, unknown>;
  descriptionList: { moreInfo: string };
  dialog: { close: string };
  drawer: { label: string };
  errorBoundary: { retry: string; title: string };
  fileUpload: Record<string, unknown>;
  form: { labelSuffix: string };
  formDialog: {
    discard: string;
    discardMessage: string;
    discardTitle: string;
    keepEditing: string;
  };
  header: { back: string };
  input: {
    clear: string;
    maskIncomplete: string;
    passwordStrength: string;
    passwordStrengths: [string, string, string, string, string];
    showPassword: string;
  };
  link: { opensInNewTab: string };
  navbar: { toggleMenu: string; toggleSidebar: string };
  numberInput: {
    decrement: string;
    increment: string;
    invalidNumber: string;
    rangeOverflow: string;
    rangeUnderflow: string;
  };
  pagination: Record<string, unknown>;
  pinInput: { character: string; digit: string };
  rating: { none: string; value: PluralMessage };
  richTextEditor: Record<string, unknown>;
  select: { emptyOption: string };
  slider: { rangeEnd: string; rangeStart: string; rangeValue: string };
  sparkline: { label: string; summary: string };
  splitButton: { moreOptions: string };
  splitter: { resizePane: string };
  stepper: { completed: string; error: string; optional: string };
  tabs: { close: string };
  tagsInput: {
    duplicate: string;
    maxTags: PluralMessage;
    remove: string;
    required: string;
    suggestions: string;
  };
  textarea: {
    characterCount: string;
    charactersLeft: PluralMessage;
    charactersOver: PluralMessage;
  };
  timeline: { pending: string };
  toast: { close: string };
  treeSelect: Record<string, unknown>;
  treeView: Record<string, unknown>;
}

export type Messages = AppMessages & { ui: UIMessages };

export interface Locale {
  code: string;
  formats: DateFormats;
  messages: Messages;
  weekStartsOn: WeekDay;
}
