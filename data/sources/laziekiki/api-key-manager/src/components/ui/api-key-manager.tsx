"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, Copy, Eye, EyeOff, KeyRound, Plus, X } from "lucide-react";

export interface ApiKey {
  id: string;
  name: string;
  key: string;
  created: string;
  lastUsed: string;
  scopes: string[];
}

export interface ApiKeysProps {
  keys?: ApiKey[];
  onCreate?: () => Promise<{ key: ApiKey; secret: string }> | { key: ApiKey; secret: string };
  onRevoke?: (key: ApiKey) => void;
  className?: string;
}

const DEFAULT_KEYS: ApiKey[] = [
  { id: "1", name: "Production", key: "sk_live_••••••••4a2f", created: "Sep 2, 2026", lastUsed: "2 min ago", scopes: ["read", "write"] },
  { id: "2", name: "Vercel preview", key: "sk_test_••••••••91bd", created: "Aug 18, 2026", lastUsed: "Yesterday", scopes: ["read"] },
  { id: "3", name: "Data sync", key: "sk_live_••••••••e773", created: "Jul 29, 2026", lastUsed: "6 days ago", scopes: ["read", "events"] },
];

function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

async function defaultCreate() {
  const suffix = crypto.randomUUID().replaceAll("-", "");
  const secret = `sk_live_${suffix.slice(0, 24)}`;
  return {
    secret,
    key: {
      id: suffix,
      name: "New secret key",
      key: `${secret.slice(0, 8)}••••••••${secret.slice(-4)}`,
      created: "Sep 11, 2026",
      lastUsed: "Never",
      scopes: ["read", "write"],
    },
  };
}

function CopyButton({ value, label = "Copy" }: { value: string; label?: string }) {
  const [copied, setCopied] = React.useState(false);

  const copy = async () => {
    await navigator.clipboard?.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy ${label.toLowerCase()}`}
      className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-2.5 text-[11px] font-medium text-zinc-600 shadow-[0_1px_1px_rgba(0,0,0,.03)] hover:bg-zinc-50 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={copied ? "check" : "copy"}
          initial={{ opacity: 0, scale: 0.7, rotate: -12 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.7, rotate: 12 }}
          transition={{ duration: 0.13 }}
        >
          {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
        </motion.span>
      </AnimatePresence>
      <span>{copied ? "Copied" : label}</span>
    </button>
  );
}

function ScopeList({ scopes }: { scopes: string[] }) {
  return (
    <span className="grid w-[92px] grid-cols-2 gap-1">
      {scopes.map((scope) => (
        <span key={scope} className="grid h-6 min-w-0 place-items-center rounded-md border border-zinc-200 px-1.5 text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
          <span className="block font-mono text-[9.5px] leading-none">{scope}</span>
        </span>
      ))}
    </span>
  );
}

function RevokeAction({ active, onStart, onCancel, onConfirm }: { active: boolean; onStart: () => void; onCancel: () => void; onConfirm: () => void }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      {active ? (
        <motion.span key="confirm" initial={{ opacity: 0, x: 4 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 4 }} className="inline-flex h-7 items-center gap-1">
          <button type="button" onClick={onCancel} className="inline-flex h-7 items-center rounded-md px-2 text-[10.5px] text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800">Cancel</button>
          <button type="button" onClick={onConfirm} className="inline-flex h-7 items-center rounded-md bg-zinc-950 px-2 text-[10.5px] font-medium text-white dark:bg-white dark:text-zinc-950">Confirm</button>
        </motion.span>
      ) : (
        <motion.button key="revoke" initial={{ opacity: 0 }} animate={{ opacity: .7 }} exit={{ opacity: 0 }} type="button" onClick={onStart} className="inline-flex h-7 items-center rounded-md px-2 text-[10.5px] font-medium text-zinc-400 transition-opacity hover:bg-zinc-100 hover:text-zinc-800 group-hover:!opacity-100 focus:!opacity-100 dark:hover:bg-zinc-800 dark:hover:text-zinc-200">Revoke</motion.button>
      )}
    </AnimatePresence>
  );
}

export function ApiKeys({ keys: suppliedKeys = DEFAULT_KEYS, onCreate, onRevoke, className }: ApiKeysProps) {
  const reduce = useReducedMotion();
  const [keys, setKeys] = React.useState(suppliedKeys);
  const [secret, setSecret] = React.useState<string | null>(null);
  const [revoking, setRevoking] = React.useState<string | null>(null);
  const [creating, setCreating] = React.useState(false);
  const [secretVisible, setSecretVisible] = React.useState(false);

  const createKey = async () => {
    setCreating(true);
    try {
      const created = await (onCreate?.() ?? defaultCreate());
      setKeys((current) => [created.key, ...current]);
      setSecret(created.secret);
      setSecretVisible(false);
    } finally {
      setCreating(false);
    }
  };

  const revoke = (key: ApiKey) => {
    setKeys((current) => current.filter((item) => item.id !== key.id));
    setRevoking(null);
    onRevoke?.(key);
  };

  return (
    <section className={cn("w-full", className)}>
      <div className="mb-6 flex items-end justify-between gap-5">
        <div>
          <h1 className="text-[21px] font-semibold tracking-[-0.025em] text-zinc-950 dark:text-zinc-50">API keys</h1>
          <p className="mt-1.5 text-[13px] leading-5 text-zinc-500 dark:text-zinc-400">Keys authenticate requests to your account.</p>
        </div>
        <button
          type="button"
          data-slot="create-api-key"
          onClick={createKey}
          disabled={creating}
          className="group inline-flex h-9 shrink-0 items-center gap-1.5 rounded-lg bg-zinc-950 px-3 text-[12px] font-medium text-white shadow-sm transition-transform hover:bg-zinc-800 active:scale-[.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 disabled:opacity-50 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 dark:focus-visible:ring-offset-zinc-950"
        >
          <Plus className="size-3.5 transition-transform duration-200 group-hover:rotate-90" /> {creating ? "Creating…" : "Create key"}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {secret ? (
          <motion.div
            initial={reduce ? false : { opacity: 0, height: 0, y: -4 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0, y: -4 }}
            className="mb-4 overflow-hidden"
          >
            <div className="rounded-xl border border-zinc-300 bg-zinc-50 p-3.5 dark:border-zinc-700 dark:bg-zinc-900">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-lg border border-zinc-200 bg-white text-zinc-600 shadow-[0_1px_1px_rgba(0,0,0,.03)] dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300">
                  <KeyRound className="size-3.5" strokeWidth={1.75} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[12px] font-semibold text-zinc-900 dark:text-zinc-100">Copy your secret key now</p>
                      <p className="mt-0.5 text-[11.5px] text-zinc-500 dark:text-zinc-400">You won’t be able to see it again.</p>
                    </div>
                    <button type="button" onClick={() => setSecret(null)} aria-label="Dismiss secret key" className="grid size-6 shrink-0 place-items-center rounded-md text-zinc-400 hover:bg-zinc-200/70 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"><X className="size-3.5" /></button>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white p-1.5 pl-2.5 dark:border-zinc-700 dark:bg-zinc-950">
                    <div className="min-w-0 flex-1 overflow-hidden">
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.code
                          key={secretVisible ? "visible" : "hidden"}
                          initial={reduce ? false : { opacity: 0, filter: "blur(4px)", y: 2 }}
                          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                          exit={reduce ? { opacity: 0 } : { opacity: 0, filter: "blur(4px)", y: -2 }}
                          transition={{ duration: 0.14 }}
                          className="block truncate text-[11.5px] text-zinc-700 dark:text-zinc-200"
                        >
                          {secretVisible ? secret : `${secret.slice(0, 8)}${"•".repeat(16)}${secret.slice(-4)}`}
                        </motion.code>
                      </AnimatePresence>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSecretVisible((value) => !value)}
                      aria-label={secretVisible ? "Hide secret key" : "Reveal secret key"}
                      className="grid size-8 place-items-center rounded-lg text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-200"
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.span key={secretVisible ? "hide" : "show"} initial={{ opacity: 0, scale: .75 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .75 }} transition={{ duration: .12 }}>
                          {secretVisible ? <EyeOff className="size-3.5" /> : <Eye className="size-3.5" />}
                        </motion.span>
                      </AnimatePresence>
                    </button>
                    <CopyButton value={secret} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,.025)] dark:border-zinc-800 dark:bg-zinc-950">
        <div className="hidden overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:block">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50/70 text-[10px] font-medium uppercase tracking-[0.09em] text-zinc-400 dark:border-zinc-800 dark:bg-zinc-900/50">
                <th className="h-10 px-4 py-0 align-middle font-medium">Name</th>
                <th className="h-10 px-4 py-0 align-middle font-medium">Secret key</th>
                <th className="h-10 px-4 py-0 align-middle font-medium">Created</th>
                <th className="h-10 px-4 py-0 align-middle font-medium">Last used</th>
                <th className="h-10 w-[132px] px-4 py-0 align-middle font-medium">Scopes</th>
                <th className="h-10 w-24 px-4 py-0 align-middle"><span className="sr-only">Actions</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {keys.map((key) => (
                  <tr
                    key={key.id}
                    className="group text-[12px] hover:bg-zinc-50/60 dark:hover:bg-zinc-900/35"
                  >
                    <td className="h-16 whitespace-nowrap px-4 py-0 align-middle font-medium text-zinc-900 dark:text-zinc-100">
                      <span className="flex items-center gap-2.5"><span className="grid size-7 place-items-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-400 transition-transform duration-200 group-hover:-rotate-6 dark:border-zinc-800 dark:bg-zinc-900"><KeyRound className="size-3.5" /></span>{key.name}</span>
                    </td>
                    <td className="h-16 whitespace-nowrap px-4 py-0 align-middle"><code className="text-[11px] text-zinc-500 dark:text-zinc-400">{key.key}</code></td>
                    <td className="h-16 whitespace-nowrap px-4 py-0 align-middle text-zinc-500">{key.created}</td>
                    <td className="h-16 whitespace-nowrap px-4 py-0 align-middle text-zinc-500">{key.lastUsed}</td>
                    <td className="h-16 w-[132px] whitespace-nowrap px-4 py-0 align-middle">
                      <ScopeList scopes={key.scopes} />
                    </td>
                    <td className="h-16 whitespace-nowrap px-4 py-0 text-right align-middle">
                      <RevokeAction active={revoking === key.id} onStart={() => setRevoking(key.id)} onCancel={() => setRevoking(null)} onConfirm={() => revoke(key)} />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="divide-y divide-zinc-100 sm:hidden dark:divide-zinc-800">
          {keys.map((key) => (
            <div key={key.id} className="group p-4">
              <div className="flex min-w-0 items-center gap-2.5">
                <span className="grid size-7 shrink-0 place-items-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-400 dark:border-zinc-800 dark:bg-zinc-900"><KeyRound className="size-3.5" /></span>
                <span className="min-w-0 flex-1 truncate text-[12px] font-medium text-zinc-900 dark:text-zinc-100">{key.name}</span>
                <RevokeAction active={revoking === key.id} onStart={() => setRevoking(key.id)} onCancel={() => setRevoking(null)} onConfirm={() => revoke(key)} />
              </div>
              <code className="mt-3 block rounded-lg bg-zinc-50 px-2.5 py-2 text-[10.5px] text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">{key.key}</code>
              <div className="mt-3 flex items-end justify-between gap-3">
                <div className="flex gap-5 text-[10px] text-zinc-400">
                  <span><span className="block uppercase tracking-wider">Created</span><span className="mt-1 block text-zinc-500">{key.created}</span></span>
                  <span><span className="block uppercase tracking-wider">Last used</span><span className="mt-1 block text-zinc-500">{key.lastUsed}</span></span>
                </div>
                <ScopeList scopes={key.scopes} />
              </div>
            </div>
          ))}
        </div>
        {!keys.length ? <div className="px-6 py-12 text-center"><KeyRound className="mx-auto size-5 text-zinc-300 dark:text-zinc-700" /><p className="mt-2 text-[12px] font-medium text-zinc-700 dark:text-zinc-300">No API keys</p><p className="mt-1 text-[11px] text-zinc-400">Create a key to authenticate your first request.</p></div> : null}
      </div>
    </section>
  );
}
