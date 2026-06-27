export function range(start: number, end: number, step = 1): number[] {
  const result: number[] = [];
  for (let i = start; i < end; i += step) result.push(i);
  return result;
}
export function sum(arr: number[]): number { return arr.reduce((a, b) => a + b, 0); }
export function average(arr: number[]): number { return arr.length ? sum(arr) / arr.length : 0; }
