export function intersection<T>(a: T[], b: T[]): T[] { return a.filter(x => b.includes(x)); }
export function difference<T>(a: T[], b: T[]): T[] { return a.filter(x => !b.includes(x)); }
export function union<T>(...arrays: T[][]): T[] { return [...new Set(arrays.flat())]; }
