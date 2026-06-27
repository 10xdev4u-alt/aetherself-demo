export function compact<T>(arr: (T | null | undefined | false | 0 | "")[]): T[] {
  return arr.filter(Boolean) as T[];
}
export function flattenCompact<T>(arr: (T | T[] | null | undefined)[]): T[] {
  return compact(arr.flat());
}
