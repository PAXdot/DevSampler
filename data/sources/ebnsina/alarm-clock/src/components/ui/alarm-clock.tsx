import { useEffect, useMemo, useRef, useState } from "react";
import { Add01Icon, MinusSignIcon } from "@hugeicons/core-free-icons";
import Widget from "./alarm-clock-utils/widget";
import Button from "./alarm-clock-utils/button";
import Dialog from "./alarm-clock-utils/dialog";
import Icon from "./alarm-clock-utils/icon";
import Input from "./alarm-clock-utils/input";
import RollingNumber from "./alarm-clock-utils/rolling-number";
import Switch from "./alarm-clock-utils/switch";
import WheelPicker from "./alarm-clock-utils/wheel-picker";
import { announce } from "./alarm-clock-utils/announce";
import { chime } from "./alarm-clock-utils/chime";
import { load, save as store } from "./alarm-clock-utils/stored";
import { useNow } from "./alarm-clock-utils/use-now";

export interface Alarm {
  id: string;
  /** "HH:MM", 24-hour. */
  time: string;
  label: string;
  on: boolean;
  /** Offers Snooze when it rings. */
  snooze?: boolean;
  /** Rings once, then removes itself (a snooze). */
  once?: boolean;
}

interface AlarmClockProps {
  /** Initial alarms. */
  alarms?: Alarm[];
  /** Called whenever the alarm list changes (the React equivalent of Svelte's bind:alarms). */
  onAlarmsChange?: (alarms: Alarm[]) => void;
  /** Remember alarms in this browser under this key. */
  persist?: string;
  /** Minutes a snooze lasts. */
  snooze?: number;
  locale?: string;
  className?: string;
}

export default function AlarmClock({
  alarms: initialAlarms = [],
  onAlarmsChange,
  persist,
  snooze = 5,
  locale = "en",
  className,
}: AlarmClockProps) {
  const [alarms, setAlarms] = useState<Alarm[]>(initialAlarms);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = persist && load<Alarm[] | null>(persist, null);
    if (Array.isArray(saved)) setAlarms(saved);
    setMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (mounted && persist) store(persist, alarms);
  }, [alarms, mounted, persist]);

  useEffect(() => {
    onAlarmsChange?.(alarms);
  }, [alarms, onAlarmsChange]);

  const nowMs = useNow();
  const t = mounted ? new Date(nowMs) : undefined;
  const hhmm = (d: Date) =>
    `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
  const timeFmt = useMemo(
    () =>
      new Intl.DateTimeFormat(locale, { hour: "numeric", minute: "2-digit" }),
    [locale],
  );
  const show = (time: string) => timeFmt.format(new Date(`2000-01-01T${time}`));

  // When the next alarm rings, in words: "in 7 hr, 12 min".
  const next = useMemo(() => {
    if (!t) return undefined;
    const mins = t.getHours() * 60 + t.getMinutes();
    const waits = alarms
      .filter((a) => a.on)
      .map((a) => {
        const [h, m] = a.time.split(":").map(Number);
        return (h * 60 + m - mins + 1440) % 1440 || 1440;
      });
    if (!waits.length) return undefined;
    const w = Math.min(...waits);
    const unit = (u: string, n: number) =>
      new Intl.NumberFormat(locale, {
        style: "unit",
        unit: u,
        unitDisplay: "short",
      }).format(n);
    return [
      Math.floor(w / 60) && unit("hour", Math.floor(w / 60)),
      w % 60 && unit("minute", w % 60),
    ]
      .filter(Boolean)
      .join(", ");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t, alarms, locale]);

  // Ringing: checked every second; each alarm rings once in its minute.
  const [ringing, setRinging] = useState<Alarm | undefined>(undefined);
  const rangAt = useRef("");
  const repeat = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (!t || ringing) return;
    const key = hhmm(t);
    if (key === rangAt.current) return;
    const due = alarms.find((a) => a.on && a.time === key);
    if (!due) return;
    rangAt.current = key;
    setRinging(due);
    announce(`${due.label || "Alarm"}, ${show(due.time)}`, "assertive");
    chime(2);
    repeat.current = setInterval(() => chime(2), 2500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  function stop(snoozed = false) {
    clearInterval(repeat.current);
    const rang = ringing;
    setRinging(undefined);
    if (!rang) return;
    setAlarms((prev) => {
      let nextList = prev.filter((a) => !(a.once && a.id === rang.id));
      if (snoozed) {
        const at = new Date(Date.now() + snooze * 60_000);
        nextList = [
          ...nextList,
          {
            id: crypto.randomUUID(),
            time: hhmm(at),
            label: rang.label,
            on: true,
            once: true,
          },
        ];
        announce(`Snoozed until ${show(hhmm(at))}`);
      }
      return nextList;
    });
  }

  useEffect(() => {
    return () => clearInterval(repeat.current);
  }, []);

  // Adding one, in a sheet with wheels, as on iOS.
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState(false);
  const hour12 = useMemo(
    () =>
      ["h11", "h12"].includes(
        new Intl.DateTimeFormat(locale, { hour: "numeric" }).resolvedOptions()
          .hourCycle ?? "",
      ),
    [locale],
  );
  const pad = (n: number) => String(n).padStart(2, "0");
  const [wHour, setWHour] = useState(5);
  const [wMinute, setWMinute] = useState(30);
  const [wPm, setWPm] = useState(0);
  const [newLabel, setNewLabel] = useState("");
  const [newSnooze, setNewSnooze] = useState(true);
  const periods = useMemo(
    () =>
      [9, 21].map(
        (h) =>
          new Intl.DateTimeFormat(locale, { hour: "numeric", hourCycle: "h12" })
            .formatToParts(new Date(2000, 0, 1, h))
            .find((p) => p.type === "dayPeriod")?.value ?? "",
      ),
    [locale],
  );

  function openSheet() {
    const now = new Date();
    setWHour(hour12 ? now.getHours() % 12 || 12 : now.getHours());
    setWMinute(now.getMinutes());
    setWPm(now.getHours() >= 12 ? 1 : 0);
    setNewLabel("");
    setNewSnooze(true);
    setAdding(true);
  }

  function save() {
    const h24 = hour12 ? (wHour % 12) + (wPm ? 12 : 0) : wHour;
    const time = `${pad(h24)}:${pad(wMinute)}`;
    setAlarms((prev) =>
      [
        ...prev,
        {
          id: crypto.randomUUID(),
          time,
          label: newLabel.trim(),
          on: true,
          snooze: newSnooze,
        },
      ].sort((a, b) => a.time.localeCompare(b.time)),
    );
    announce(`Alarm set for ${show(time)}`);
    setAdding(false);
  }

  // The time split into its number and its period, for the large-and-small iOS type.
  const split = (time: string) => {
    const parts = timeFmt.formatToParts(new Date(`2000-01-01T${time}`));
    const period = parts.find((p) => p.type === "dayPeriod")?.value ?? "";
    const main = parts
      .filter((p) => p.type !== "dayPeriod")
      .map((p) => p.value)
      .join("")
      .trim();
    return { main, period };
  };

  return (
    <>
      <Widget
        label="Alarm clock"
        tone="var(--ui-accent)"
        max="48rem"
        className={className}
      >
        <div className="alarms">
          <div className="bar">
            <Button
              variant="ghost"
              aria-pressed={editing}
              disabled={!alarms.length}
              onClick={() => setEditing((v) => !v)}
            >
              {editing ? "Done" : "Edit"}
            </Button>
            <Button
              variant="secondary"
              square
              aria-label="Add alarm"
              onClick={openSheet}
            >
              <Icon icon={Add01Icon} size={20} />
            </Button>
          </div>
          <header>
            <p className="now">
              <time dateTime={t?.toISOString()}>
                {t ? (
                  <RollingNumber value={timeFmt.format(t)} />
                ) : (
                  "\u2013\u2013:\u2013\u2013"
                )}
              </time>
            </p>
            <p className="next" aria-live="polite">
              {next ? `Next alarm in ${next}` : "No alarms on"}
            </p>
          </header>

          {alarms.length > 0 && (
            <ul className="list" aria-label="Alarms">
              {alarms.map((a) => {
                const t2 = split(a.time);
                return (
                  <li
                    key={a.id}
                    className={["alarm", !a.on && "off"]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {editing && (
                      <button
                        type="button"
                        className="remove"
                        aria-label={`Delete ${a.label || "alarm"} at ${show(a.time)}`}
                        onClick={() => {
                          setAlarms((prev) => {
                            const nextList = prev.filter((x) => x !== a);
                            if (!nextList.length) setEditing(false);
                            return nextList;
                          });
                        }}
                      >
                        <Icon icon={MinusSignIcon} size={14} strokeWidth={3} />
                      </button>
                    )}
                    <div className="what">
                      <span className="time">
                        {t2.main}
                        {t2.period && <small>{t2.period}</small>}
                      </span>
                      <span className="label">
                        {a.label || "Alarm"}
                        {a.once ? " (snoozed)" : ""}
                      </span>
                    </div>
                    <Switch
                      checked={a.on}
                      onCheckedChange={(on) =>
                        setAlarms((prev) =>
                          prev.map((x) => (x.id === a.id ? { ...x, on } : x)),
                        )
                      }
                      aria-label={`${a.label || "Alarm"} at ${show(a.time)}`}
                    />
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </Widget>

      <Dialog
        open={adding}
        title="Add alarm"
        onClose={() => setAdding(false)}
        footer={
          <>
            <Button variant="secondary" onClick={() => setAdding(false)}>
              Cancel
            </Button>
            <Button onClick={save}>Save</Button>
          </>
        }
      >
        <div className="sheet">
          <div className="wheels" role="group" aria-label="Time">
            <span className="band" aria-hidden="true" />
            <WheelPicker
              label="Hour"
              items={Array.from({ length: hour12 ? 12 : 24 }, (_, i) => {
                const v = hour12 ? i + 1 : i;
                return { value: v, label: String(v) };
              })}
              value={wHour}
              onValueChange={setWHour}
            />
            <WheelPicker
              label="Minute"
              items={Array.from({ length: 60 }, (_, i) => ({
                value: i,
                label: pad(i),
              }))}
              value={wMinute}
              onValueChange={setWMinute}
            />
            {hour12 && (
              <WheelPicker
                label="AM or PM"
                items={periods.map((p, i) => ({ value: i, label: p }))}
                value={wPm}
                onValueChange={setWPm}
              />
            )}
          </div>
          <Input
            label="Label"
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
            placeholder="Alarm"
          />
          <Switch checked={newSnooze} onCheckedChange={setNewSnooze}>
            Snooze
          </Switch>
        </div>
      </Dialog>

      <Dialog
        open={!!ringing}
        title={ringing?.label || "Alarm"}
        description={ringing ? show(ringing.time) : undefined}
        onClose={() => ringing && stop()}
        footer={
          <>
            {ringing?.snooze !== false && (
              <Button variant="secondary" onClick={() => stop(true)}>
                Snooze {snooze} min
              </Button>
            )}
            <Button onClick={() => stop()}>Stop</Button>
          </>
        }
      />
    </>
  );
}
