export function deepMerge<T extends Record<string, unknown>>(target: T, source: Partial<T>): T {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    const val = source[key as keyof T];
    if (val && typeof val === "object" && !Array.isArray(val)) {
      result[key as keyof T] = deepMerge(result[key as keyof T] as Record<string, unknown>, val as Record<string, unknown>) as T[keyof T];
    } else if (val !== undefined) {
      result[key as keyof T] = val as T[keyof T];
    }
  }
  return result;
}
