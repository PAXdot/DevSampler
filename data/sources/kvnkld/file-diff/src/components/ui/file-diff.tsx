const ROWS = [
  { old: 12, cur: 12, type: "ctx", text: "export function getToken() {" },
  { old: 13, cur: null, type: "del", text: "  return localStorage.token;" },
  {
    old: null,
    cur: 13,
    type: "add",
    text: '  const t = cookies.get("session");',
  },
  {
    old: null,
    cur: 14,
    type: "add",
    text: '  if (!t) throw new Error("no session");',
  },
  { old: null, cur: 15, type: "add", text: "  return t;" },
  { old: 14, cur: 16, type: "ctx", text: "}" },
];

export default function FileDiff({ file = "src/auth.ts", rows = ROWS }) {
  const added = rows.filter((r) => r.type === "add").length;
  const removed = rows.filter((r) => r.type === "del").length;
  return (
    <div className="diff">
      <div className="diffHead">
        <span className="diffFileWrap">
          <svg
            className="diffIcon"
            viewBox="0 0 24 24"
            width="15"
            height="15"
            aria-hidden="true"
          >
            <path
              d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="diffFile">{file}</span>
        </span>
        <span className="diffStat">
          <span className="add">+{added}</span>
          <span className="del">-{removed}</span>
        </span>
      </div>
      <div className="diffBody">
        {rows.map((r, i) => (
          <div key={i} className={"diffRow " + r.type}>
            <span className="ln old">{r.old ?? ""}</span>
            <span className="ln new">{r.cur ?? ""}</span>
            <span className="sign">
              {r.type === "add" ? "+" : r.type === "del" ? "-" : ""}
            </span>
            <code>{r.text}</code>
          </div>
        ))}
      </div>
    </div>
  );
}
