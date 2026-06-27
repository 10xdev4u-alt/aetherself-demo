export function resolvePath(obj: Record<string, unknown>, path: string): unknown {
  return path.split(".").reduce((o, k) => (o as Record<string, unknown>)?.[k], obj);
}
export function setPath(obj: Record<string, unknown>, path: string, value: unknown): void {
  const keys = path.split(".");
  const last = keys.pop()!;
  const target = keys.reduce((o, k) => (o[k] ??= {}), obj) as Record<string, unknown>;
  target[last] = value;
}
