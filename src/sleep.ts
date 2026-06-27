export function sleep(ms: number): Promise<void> { return new Promise(r => setTimeout(r, ms)); }
export function sleepUntil(fn: () => boolean, interval = 100): Promise<void> {
  return new Promise(resolve => { const check = () => fn() ? resolve() : setTimeout(check, interval); check(); });
}
