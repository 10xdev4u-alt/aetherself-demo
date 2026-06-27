export function sortBy<T>(arr: T[], key: (item: T) => string | number, dir: "asc" | "desc" = "asc"): T[] {
  return [...arr].sort((a, b) => { const ka = key(a), kb = key(b); return dir === "asc" ? (ka < kb ? -1 : ka > kb ? 1 : 0) : (kb < ka ? -1 : kb > ka ? 1 : 0); });
}
