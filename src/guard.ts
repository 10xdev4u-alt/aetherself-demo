export function assertDefined<T>(value: T | null | undefined, name: string): T {
  if (value == null) throw new Error(`${name} is required`);
  return value;
}
export function assertType<T>(value: unknown, check: (v: unknown) => boolean, name: string): T {
  if (!check(value)) throw new Error(`${name} has invalid type`);
  return value as T;
}
