export function now(): number { return Date.now(); }
export function toISO(ts: number): string { return new Date(ts).toISOString(); }
export function fromISO(iso: string): number { return new Date(iso).getTime(); }
export function isExpired(ts: number, ttlMs: number): boolean { return Date.now() - ts > ttlMs; }
