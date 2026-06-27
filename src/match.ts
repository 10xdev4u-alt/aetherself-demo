export function match(str: string, pattern: RegExp): string[] { return str.match(pattern) ?? []; }
export function includes(str: string, search: string): boolean { return str.toLowerCase().includes(search.toLowerCase()); }
export function startsWith(str: string, prefix: string): boolean { return str.startsWith(prefix); }
export function endsWith(str: string, suffix: string): boolean { return str.endsWith(suffix); }
