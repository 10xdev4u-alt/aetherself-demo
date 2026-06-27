export function groupBy<T>(arr: T[], key: (item: T) => string): Record<string, T[]> {
  return arr.reduce((acc, item) => { const k = key(item); (acc[k] ??= []).push(item); return acc; }, {} as Record<string, T[]>);
}
export function uniqueBy<T>(arr: T[], key: (item: T) => string): T[] {
  const seen = new Set<string>(); return arr.filter(item => { const k = key(item); if (seen.has(k)) return false; seen.add(k); return true; });
}
