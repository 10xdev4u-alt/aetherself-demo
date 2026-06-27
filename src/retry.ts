export async function retry<T>(fn: () => Promise<T>, maxAttempts = 3, delayMs = 1000): Promise<T> {
  for (let i = 0; i < maxAttempts; i++) {
    try { return await fn(); } catch (e) { if (i === maxAttempts - 1) throw e; await new Promise(r => setTimeout(r, delayMs * (i + 1))); }
  }
  throw new Error("Unreachable");
}
