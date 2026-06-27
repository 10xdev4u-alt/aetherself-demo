export class ApiError extends Error {
  constructor(public status: number, message: string) { super(message); this.name = "ApiError"; }
}
export class ConnectionError extends Error {
  constructor(message = "Daemon not reachable") { super(message); this.name = "ConnectionError"; }
}
export function handleError(err: unknown): string {
  if (err instanceof ApiError) return `API Error (${err.status}): ${err.message}`;
  if (err instanceof ConnectionError) return err.message;
  return "An unexpected error occurred";
}
