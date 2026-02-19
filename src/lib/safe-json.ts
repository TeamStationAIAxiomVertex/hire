export function safeJson<T>(value: T): T {
  return JSON.parse(
    JSON.stringify(value, (_k, v) => (typeof v === "function" ? undefined : v))
  );
}
