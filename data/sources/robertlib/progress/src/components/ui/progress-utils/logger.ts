import isDevelopment from "./is-development";

const enabled = /* @__PURE__ */ isDevelopment();

const logger = {
  error: (...args: unknown[]) => {
    if (enabled) console.error(...args);
  },
  warn: (...args: unknown[]) => {
    if (enabled) console.warn(...args);
  },
};

export default logger;
