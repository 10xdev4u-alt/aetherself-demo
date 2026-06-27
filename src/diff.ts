export function diff<T>(a: T[], b: T[]): { added: T[]; removed: T[] } {
  const setA = new Set(a); const setB = new Set(b);
  return { added: b.filter(x => !setA.has(x)), removed: a.filter(x => !setB.has(x)) };
}
