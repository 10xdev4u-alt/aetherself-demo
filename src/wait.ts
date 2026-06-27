export function wait(ms: number): Promise<void> { return new Promise(r => setTimeout(r, ms)); }
export function waitFor(predicate: () => boolean, interval = 100, timeout = 5000): Promise<void> {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const check = () => { if (predicate()) return resolve(); if (Date.now() - start > timeout) return reject(new Error("Timeout")); setTimeout(check, interval); };
    check();
  });
}
