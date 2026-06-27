export function capitalize(str: string): string { return str.charAt(0).toUpperCase() + str.slice(1); }
export function camelCase(str: string): string { return str.toLowerCase().replace(/[-_](.)/g, (_, c) => c.toUpperCase()); }
export function kebabCase(str: string): return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
