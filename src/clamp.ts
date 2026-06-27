export function clamp(value: number, min: number, max: number): number { return Math.min(Math.max(value, min), max); }
export function lerp(a: number, b: number, t: number): number { return a + (b - a) * clamp(t, 0, 1); }
export function randomBetween(min: number, max: number): number { return Math.random() * (max - min) + min; }
