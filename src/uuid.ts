export function uuid(): string { return crypto.randomUUID(); }
export function shortId(): string { return Math.random().toString(36).slice(2, 10); }
