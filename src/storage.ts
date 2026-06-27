const PREFIX = "aetherself-demo:";
export function save<T>(key: string, value: T): void { localStorage.setItem(PREFIX + key, JSON.stringify(value)); }
export function load<T>(key: string, fallback: T): T { const v = localStorage.getItem(PREFIX + key); return v ? JSON.parse(v) : fallback; }
export function remove(key: string): void { localStorage.removeItem(PREFIX + key); }
export function clear(): void { Object.keys(localStorage).filter(k => k.startsWith(PREFIX)).forEach(k => localStorage.removeItem(k)); }
