/**
 * Format a timestamp to relative time (e.g., "2m ago").
 */
export function timeAgo(timestamp: number): string {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);

  if (seconds < 60) return "just now";
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  return `${Math.floor(seconds / 86400)}d ago`;
}

/**
 * Truncate a string to max length.
 */
export function truncate(str: string, max: number): string {
  return str.length > max ? str.slice(0, max) + "..." : str;
}

/**
 * Generate a random color from a string (for avatars).
 */
export function stringToColor(str: string): string {
  let hash = 0;
  for (const char of str) hash = char.charCodeAt(0) + ((hash << 5) - hash);
  const h = hash % 360;
  return `hsl(${h}, 60%, 50%)`;
}
