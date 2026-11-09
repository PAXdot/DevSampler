/** Everything the library puts out as text (English default; only the
    entries this component uses are exercised, but the full type is kept so
    the module type-checks like the original). */
export interface Wording {
  clearInput: string;
  clearSelection: string;
  decreaseValue: string;
  increaseValue: string;
  comboboxPlaceholder: string;
  noMatches: string;
  multiSelectPlaceholder: string;
  multiSelectSearchPlaceholder: string;
  searchOptions: string;
  options: string;
  optionScope: string;
  optionScopeAll: string;
  optionScopeSelected: (count: number) => string;
  selectAll: string;
  selectNone: string;
  invertSelection: string;
  nothingSelected: string;
  removeSelectedValue: (beschriftung: string) => string;
  manageMoreSelected: (count: number) => string;
  multiSelectSummary: (gewaehlt: number, total: number) => string;
  optionCount: (count: number) => string;
  optionActive: (
    label: string,
    state: { selected?: boolean; disabled?: boolean; group?: string },
  ) => string;
  optionAdded: (label: string) => string;
  optionRemoved: (label: string) => string;
  palettePlaceholder: string;
  paletteField: string;
  palettePanel: string;
  paletteList: string;
  paletteNoFinds: string;
  paletteFindCount: (count: number) => string;
  paletteMoreFinds: (count: number) => string;
  paletteHintMove: string;
  paletteHintChoose: string;
  paletteHintClose: string;
  paletteKeyEsc: string;
  dockTools: string;
  dockGrip: string;
  dockPlace: (place: "top" | "right" | "bottom" | "left") => string;
  dockPlaced: (place: string) => string;
  dockNoPlace: (place: string) => string;
  datePlaceholder: string;
  datePanel: string;
  dateClear: string;
  dateTimePlaceholder: string;
  dateTimePanel: string;
  dateTimeClear: string;
  dateRangePlaceholder: string;
  dateRangePanel: string;
  dateRangeClear: string;
  dateTimeRangePanel: string;
  dateTimeRangeClear: string;
  previousMonth: string;
  nextMonth: string;
  quickSelect: string;
  today: string;
  now: string;
  clear: string;
  apply: string;
  allDay: string;
  timeOfDay: string;
  hour: string;
  minute: string;
  second: string;
  sideFrom: string;
  sideTo: string;
  startHour: string;
  startMinute: string;
  startSecond: string;
  endHour: string;
  endMinute: string;
  endSecond: string;
  timeFieldIncrease: (feld: string) => string;
  timeFieldDecrease: (feld: string) => string;
  chooseStartDate: string;
  chooseEndDate: string;
  days: (count: number) => string;
  daysSelected: (count: number) => string;
  rangePreview: (from: string, to: string, count: number) => string;
  daysAllDay: (count: number) => string;
  duration: (teile: readonly string[]) => string;
  hoursShort: (count: number) => string;
  minutesShort: (count: number) => string;
  timeMissingHint: (timeOfDay: string) => string;
  timeMissingHintSide: (side: string, timeOfDay: string) => string;
  timeAmbiguousHint: string;
  timeAmbiguousHintSide: (side: string) => string;
  timeEarlier: (versatz: string) => string;
  timeLater: (versatz: string) => string;
  weekdays: readonly string[];
  presets: {
    today: string;
    yesterday: string;
    last7Days: string;
    last30Days: string;
    thisMonth: string;
    previousMonth: string;
    thisQuarter: string;
    thisYear: string;
  };
  pagination: string;
  rows: string;
  rowsPerPage: string;
  pageOfPages: (page: number, total: number, formatted?: { page: string; total: string }) => string;
  previousPage: string;
  nextPage: string;
  filterReset: string;
  filterDone: string;
  columns: string;
  arrangeColumns: string;
  columnForward: (column: string) => string;
  columnBackward: (column: string) => string;
  pinColumnToStart: (column: string) => string;
  pinColumnToEnd: (column: string) => string;
  unpinColumn: (column: string) => string;
  columnForwardHint: string;
  columnBackwardHint: string;
  pinToStartHint: string;
  pinToEndHint: string;
  unpinHint: string;
  exportLabel: string;
  exportPageLabel: string;
  exportFileName: string;
  tableSearchPlaceholder: string;
  tableSearchLabel: string;
  filterColumn: (column: string) => string;
  filterHint: string;
  selectRow: (row: string) => string;
  selectAllRows: string;
  selectAllOnPage: string;
  expandRowNamed: (row: string) => string;
  collapseRowNamed: (row: string) => string;
  rowActions: string;
  rowAction: (aktion: string, row: string) => string;
  rowActionsMenu: (row: string) => string;
  editCell: (column: string, row: string) => string;
  newRow: string;
  saveRow: string;
  discardRow: string;
  deleteRow: string;
  deleteRowAsk: string;
  keepRow: string;
  saveOrDiscardFirst: string;
  cellAbsentValue: string;
  booleanYes: string;
  booleanNo: string;
  footerSum: string;
  footerAverage: string;
  footerMinimum: string;
  footerMaximum: string;
  footerRange: string;
  footerCount: string;
  footerDistinct: string;
  footerAggregate: string;
  grouping: string;
  groupBy: (label: string) => string;
  groupedBy: string;
  removeGrouping: string;
  removeGroupingLevel: (label: string) => string;
  foldAll: string;
  unfoldAll: string;
  groupNoValue: string;
  groupContinued: string;
  foldGroup: (name: string, count: string) => string;
  unfoldGroup: (name: string, count: string) => string;
  foldBranch: (row: string) => string;
  unfoldBranch: (row: string) => string;
  levelColumn: string;
  pathRow: string;
  footerTopLevel: string;
  selectGroup: (name: string) => string;
  calendarWeek: (week: number, year: number) => string;
  entries: (count: number, formatted: string) => string;
  selectedCount: (count: number, formatted: string) => string;
  noEntries: string;
  nothingMatchesFilters: string;
  treeSearchPlaceholder: string;
  treeNoMatches: string;
  conditions: string;
  removeConditionNamed: (label: string, value: string) => string;
  editConditionNamed: (label: string, value: string) => string;
  moreValues: (count: number, formatted: string) => string;
  filterFrom: string;
  filterTo: string;
  rangeFromTo: (from: string, to: string) => string;
  rangeFrom: (from: string) => string;
  rangeTo: (to: string) => string;
  rangeInvalid: string;
  resetAll: string;
  filteredOfTotal: (matches: string, total: string) => string;
  verdictOk: string;
  verdictWarning: string;
  verdictAlarm: string;
  verdictUnknown: string;
  statAbsentValue: string;
  target: string;
  deviationAbove: (betrag: string) => string;
  deviationBelow: (betrag: string) => string;
  deviationOnTarget: string;
  freshnessFresh: string;
  freshnessStale: string;
  freshnessDisconnected: string;
  asOfAgo: (duration: string) => string;
  asOfUnknown: string;
  alarms: string;
  noAlarms: string;
  noAlarmsDisconnected: string;
  acknowledgeAlarm: string;
  acknowledgeAlarms: (count: number) => string;
  priorityHigh: string;
  priorityMedium: string;
  priorityLow: string;
  lifecycleActiveUnacknowledged: string;
  lifecycleActiveAcknowledged: string;
  lifecycleResolvedUnacknowledged: string;
  lifecycleResolvedAcknowledged: string;
  floodHint: (count: number) => string;
  chatterHint: (count: number) => string;
  activeUnacknowledged: (count: number) => string;
  columnAlarm: string;
  columnLifecycleState: string;
  columnPriority: string;
  columnRaised: string;
  columnDuration: string;
  columnFrequency: string;
  columnAcknowledgement: string;
  columnAge: string;
  availabilitySnoozed: (until: string, by: string) => string;
  availabilitySnoozedShort: string;
  availabilitySuppressed: string;
  availabilityDisabled: string;
  hiddenAlarms: (count: number) => string;
  columnAvailability: string;
  close: string;
  closeToast: string;
  toastDeckCount: (count: number) => string;
  toastRegion: string;
  confirm: string;
  cancel: string;
  loading: string;
  fillLevel: string;
  progress: string;
  breadcrumb: string;
  breadcrumbFolded: string;
  splitter: string;
  stepDone: string;
  stepUpcoming: string;
  stepFailed: string;
  chooseFile: string;
  chooseFiles: string;
  dropFile: string;
  dropFiles: string;
  removeFile: (name: string) => string;
  fileNotAccepted: (name: string) => string;
  show: string;
  hide: string;
  moreActions: string;
  remove: string;
  removeTag: (beschriftung: string) => string;
}

/** The instance shipped by default. English. */
export const DEFAULT_WORDING: Wording = {
  clearInput: "Clear input",
  clearSelection: "Clear selection",
  decreaseValue: "Decrease value",
  increaseValue: "Increase value",
  comboboxPlaceholder: "Search or select",
  noMatches: "No matches",
  multiSelectPlaceholder: "Select",
  multiSelectSearchPlaceholder: "Search",
  searchOptions: "Search options",
  options: "Options",
  optionScope: "View",
  optionScopeAll: "All",
  optionScopeSelected: (count) => `Selected (${count})`,
  selectAll: "All",
  selectNone: "None",
  invertSelection: "Invert",
  nothingSelected: "Nothing selected",
  removeSelectedValue: (beschriftung) => `Remove ${beschriftung}`,
  manageMoreSelected: (count) => `Manage all ${count} selected`,
  multiSelectSummary: (gewaehlt, total) => `${gewaehlt} / ${total}`,
  optionCount: (count) => (count === 1 ? "1 option" : `${count} options`),
  optionActive: (label, { selected, disabled, group }) =>
    [label, group, selected && "selected", disabled && "unavailable"].filter(Boolean).join(", "),
  optionAdded: (label) => `${label} added`,
  optionRemoved: (label) => `${label} removed`,
  palettePlaceholder: "Search …",
  paletteField: "Search",
  palettePanel: "Command palette",
  paletteList: "Finds",
  paletteNoFinds: "Nothing found",
  paletteFindCount: (count) => (count === 1 ? "1 find" : `${count} finds`),
  paletteMoreFinds: (count) => (count === 1 ? "1 more find" : `${count} more finds`),
  paletteHintMove: "select",
  paletteHintChoose: "open",
  paletteHintClose: "close",
  paletteKeyEsc: "Esc",
  dockTools: "Tools",
  dockGrip: "Move dock",
  dockPlace: (place) => ({ top: "top", right: "right", bottom: "bottom", left: "left" })[place],
  dockPlaced: (place) => `Dock at the ${place}`,
  dockNoPlace: (place) => `No room for the dock on the ${place}`,
  datePlaceholder: "Select date",
  datePanel: "Select date",
  dateClear: "Clear date",
  dateTimePlaceholder: "Select date and time",
  dateTimePanel: "Select date and time",
  dateTimeClear: "Clear date and time",
  dateRangePlaceholder: "Select range",
  dateRangePanel: "Select range",
  dateRangeClear: "Clear range",
  dateTimeRangePanel: "Select range with time",
  dateTimeRangeClear: "Clear range with time",
  previousMonth: "Previous month",
  nextMonth: "Next month",
  quickSelect: "Quick select",
  today: "Today",
  now: "Now",
  clear: "Clear",
  apply: "Apply",
  allDay: "All day",
  timeOfDay: "Time",
  hour: "Hour",
  minute: "Minute",
  second: "Second",
  sideFrom: "From",
  sideTo: "To",
  startHour: "Start hour",
  startMinute: "Start minute",
  startSecond: "Start second",
  endHour: "End hour",
  endMinute: "End minute",
  endSecond: "End second",
  timeFieldIncrease: (feld) => `Increase ${feld}`,
  timeFieldDecrease: (feld) => `Decrease ${feld}`,
  chooseStartDate: "Select start date",
  chooseEndDate: "Select end date – backwards is allowed",
  days: (count) => `${count} ${count === 1 ? "day" : "days"}`,
  daysSelected: (count) => `${count} ${count === 1 ? "day" : "days"} selected`,
  rangePreview: (from, to, count) => `${from} – ${to} · ${count} ${count === 1 ? "day" : "days"}`,
  daysAllDay: (count) => `${count} ${count === 1 ? "day" : "days"} (all day)`,
  duration: (teile) => `Duration: ${teile.join(" ")}`,
  hoursShort: (count) => `${count} ${count === 1 ? "hr" : "hrs"}`,
  minutesShort: (count) => `${count} min`,
  timeMissingHint: (timeOfDay) =>
    `This time does not exist on this day (start of daylight saving time). ${timeOfDay} is used instead.`,
  timeMissingHintSide: (side, timeOfDay) =>
    `${side}: This time does not exist on this day (start of daylight saving time). ${timeOfDay} is used instead.`,
  timeAmbiguousHint: "This time occurs twice on this day (end of daylight saving time):",
  timeAmbiguousHintSide: (side) => `${side}: This time occurs twice on this day (end of daylight saving time):`,
  timeEarlier: (versatz) => `Earlier (${versatz})`,
  timeLater: (versatz) => `Later (${versatz})`,
  weekdays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  presets: {
    today: "Today",
    yesterday: "Yesterday",
    last7Days: "Last 7 days",
    last30Days: "Last 30 days",
    thisMonth: "This month",
    previousMonth: "Previous month",
    thisQuarter: "This quarter",
    thisYear: "This year",
  },
  pagination: "Pagination",
  rows: "Rows",
  rowsPerPage: "Rows per page",
  pageOfPages: (page, total, formatted) => `Page ${formatted?.page ?? page} of ${formatted?.total ?? total}`,
  previousPage: "Back",
  nextPage: "Next",
  filterReset: "Reset",
  filterDone: "Done",
  columns: "Columns",
  arrangeColumns: "Show, hide and arrange columns",
  columnForward: (column) => `Move ${column} forward`,
  columnBackward: (column) => `Move ${column} backward`,
  pinColumnToStart: (column) => `Pin ${column} to start`,
  pinColumnToEnd: (column) => `Pin ${column} to end`,
  unpinColumn: (column) => `Unpin ${column}`,
  columnForwardHint: "Move forward",
  columnBackwardHint: "Move backward",
  pinToStartHint: "Pin to start",
  pinToEndHint: "Pin to end",
  unpinHint: "Unpin",
  exportLabel: "Export",
  exportPageLabel: "Export page",
  exportFileName: "table.csv",
  tableSearchPlaceholder: "Search …",
  tableSearchLabel: "Search table",
  filterColumn: (column) => `Filter ${column}`,
  filterHint: "Filter",
  selectRow: (row) => `Select ${row}`,
  selectAllRows: "Select all",
  selectAllOnPage: "Select all on this page",
  expandRowNamed: (row) => `Expand ${row}`,
  collapseRowNamed: (row) => `Collapse ${row}`,
  rowActions: "Actions",
  rowAction: (aktion, row) => `${aktion}: ${row}`,
  rowActionsMenu: (row) => `Actions: ${row}`,
  editCell: (column, row) => `Edit ${column}: ${row}`,
  newRow: "New row",
  saveRow: "Save",
  discardRow: "Discard",
  deleteRow: "Delete",
  deleteRowAsk: "Delete?",
  keepRow: "Keep",
  saveOrDiscardFirst: "Save or discard this row first",
  cellAbsentValue: "No value",
  booleanYes: "Yes",
  booleanNo: "No",
  footerSum: "Sum",
  footerAverage: "Average",
  footerMinimum: "Minimum",
  footerMaximum: "Maximum",
  footerRange: "Range",
  footerCount: "Count",
  footerDistinct: "Distinct values",
  footerAggregate: "Aggregate",
  grouping: "Grouping",
  groupBy: (label) => `Group by ${label}`,
  groupedBy: "Grouped by",
  removeGrouping: "Remove grouping",
  removeGroupingLevel: (label) => `Stop grouping by ${label}`,
  foldAll: "Fold all",
  unfoldAll: "Unfold all",
  groupNoValue: "No value",
  groupContinued: "continued",
  foldGroup: (name, count) => `Fold ${name}, ${count}`,
  unfoldGroup: (name, count) => `Unfold ${name}, ${count}`,
  foldBranch: (row) => `Fold rows under ${row}`,
  unfoldBranch: (row) => `Unfold rows under ${row}`,
  levelColumn: "Level",
  pathRow: "on the path to a match",
  footerTopLevel: "Top level only",
  selectGroup: (name) => `Select ${name}`,
  calendarWeek: (week, year) => `Week ${week}, ${year}`,
  entries: (count, formatted) => (count === 1 ? "1 entry" : `${formatted} entries`),
  selectedCount: (_count, formatted) => `${formatted} selected`,
  noEntries: "No entries",
  nothingMatchesFilters: "Nothing matches the search and filters",
  treeSearchPlaceholder: "Search the tree …",
  treeNoMatches: "Nothing matches the search.",
  conditions: "Active filters",
  removeConditionNamed: (label, value) => `Remove ${label}: ${value}`,
  editConditionNamed: (label, value) => `Edit ${label}: ${value}`,
  moreValues: (_count, formatted) => `+${formatted}`,
  filterFrom: "From",
  filterTo: "To",
  rangeFromTo: (from, to) => `${from}–${to}`,
  rangeFrom: (from) => `from ${from}`,
  rangeTo: (to) => `to ${to}`,
  rangeInvalid: "“From” lies after “To”.",
  resetAll: "Reset",
  filteredOfTotal: (matches, total) => `${matches} of ${total}`,
  verdictOk: "OK",
  verdictWarning: "Warning limit exceeded",
  verdictAlarm: "Alarm limit exceeded",
  verdictUnknown: "No value",
  statAbsentValue: "—",
  target: "Target",
  deviationAbove: (betrag) => `${betrag} above target`,
  deviationBelow: (betrag) => `${betrag} below target`,
  deviationOnTarget: "on target",
  freshnessFresh: "Fresh",
  freshnessStale: "Stale",
  freshnessDisconnected: "No connection",
  asOfAgo: (dauer) => `As of: ${dauer}`,
  asOfUnknown: "As-of time unknown",
  alarms: "Alarms",
  noAlarms: "No alarms",
  noAlarmsDisconnected: "No alarms – the connection is down",
  acknowledgeAlarm: "Acknowledge",
  acknowledgeAlarms: (count) => (count === 1 ? "Acknowledge 1 alarm" : `Acknowledge ${count} alarms`),
  priorityHigh: "High",
  priorityMedium: "Medium",
  priorityLow: "Low",
  lifecycleActiveUnacknowledged: "Active, unacknowledged",
  lifecycleActiveAcknowledged: "Active, acknowledged",
  lifecycleResolvedUnacknowledged: "Resolved, unacknowledged",
  lifecycleResolvedAcknowledged: "Resolved, acknowledged",
  floodHint: (count) => `Alarm flood: ${count} in quick succession`,
  chatterHint: (count) => `${count}×`,
  activeUnacknowledged: (count) =>
    count === 1 ? "1 active alarm, unacknowledged" : `${count} active alarms, unacknowledged`,
  columnAlarm: "Alarm",
  columnLifecycleState: "State",
  columnPriority: "Priority",
  columnRaised: "Raised",
  columnDuration: "Duration",
  columnFrequency: "Frequency",
  columnAcknowledgement: "Acknowledgement",
  columnAge: "Age",
  availabilitySnoozed: (until, by) => `Snoozed until ${until} by ${by}`,
  availabilitySnoozedShort: "Snoozed",
  availabilitySuppressed: "Suppressed",
  availabilityDisabled: "Disabled",
  hiddenAlarms: (count) => `Hidden: ${count}`,
  columnAvailability: "Availability",
  close: "Close",
  closeToast: "Close message",
  toastDeckCount: (count) => `${count} messages, show all`,
  toastRegion: "Messages (Alt+T)",
  confirm: "Confirm",
  cancel: "Cancel",
  loading: "Loading",
  fillLevel: "Fill level",
  progress: "Progress",
  breadcrumb: "Breadcrumb",
  breadcrumbFolded: "Show the levels in between",
  splitter: "Resize the panes",
  stepDone: "Done",
  stepUpcoming: "Upcoming",
  stepFailed: "Failed",
  chooseFile: "Choose a file",
  chooseFiles: "Choose files",
  dropFile: "or drop it here",
  dropFiles: "or drop them here",
  removeFile: (name) => `Remove ${name}`,
  fileNotAccepted: (name) => `${name} is not an accepted type`,
  show: "Show",
  hide: "Hide",
  moreActions: "More actions",
  remove: "Remove",
  removeTag: (beschriftung) => `Remove ${beschriftung}`,
};
