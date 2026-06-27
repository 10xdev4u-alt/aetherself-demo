type Level = "debug" | "info" | "warn" | "error";
const LEVELS: Record<Level, number> = { debug: 0, info: 1, warn: 2, error: 3 };
let minLevel: Level = "info";
export function setLevel(level: Level) { minLevel = level; }
export const log = {
  debug: (...args: unknown[]) => LEVELS[minLevel] <= 0 && console.debug("[AS]", ...args),
  info: (...args: unknown[]) => LEVELS[minLevel] <= 1 && console.info("[AS]", ...args),
  warn: (...args: unknown[]) => LEVELS[minLevel] <= 2 && console.warn("[AS]", ...args),
  error: (...args: unknown[]) => LEVELS[minLevel] <= 3 && console.error("[AS]", ...args),
};
