/**
 * AetherSelf API client for the demo app.
 */

const BASE_URL = "http://127.0.0.1:4197";

export async function healthCheck(): Promise<boolean> {
  try {
    const res = await fetch(`${BASE_URL}/health`, { signal: AbortSignal.timeout(2000) });
    return res.ok;
  } catch {
    return false;
  }
}

export async function getWellKnown() {
  const res = await fetch(`${BASE_URL}/.well-known/aetherself`);
  return res.json();
}

export async function getToken(publicKey: string, signFn: (msg: string) => Promise<string>): Promise<string> {
  const helloRes = await fetch(`${BASE_URL}/v1/auth/hello`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ publicKey }),
  });
  const hello = (await helloRes.json()) as { challengeId: string; nonce: string };

  const signature = await signFn(hello.nonce);

  const responseRes = await fetch(`${BASE_URL}/v1/auth/response`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ challengeId: hello.challengeId, nonce: hello.nonce, signature }),
  });
  const session = (await responseRes.json()) as { token: string };
  return session.token;
}

export async function appendMemory(token: string, content: string, type = "fact") {
  const res = await fetch(`${BASE_URL}/v1/memory`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify({ type, content, timestamp: Date.now() }),
  });
  return res.json();
}

export async function getMemories(token: string, query?: string) {
  const params = query ? `?q=${encodeURIComponent(query)}` : "";
  const res = await fetch(`${BASE_URL}/v1/memory${params}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}
