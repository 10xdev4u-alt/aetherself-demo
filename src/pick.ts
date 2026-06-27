export function pick<T extends Record<string, unknown>, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const result = {} as Pick<T, K>;
  for (const k of keys) if (k in obj) result[k] = obj[k];
  return result;
}
export function omit<T extends Record<string, unknown>, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  const result = { ...obj };
  for (const k of keys) delete result[k];
  return result as Omit<T, K>;
}
