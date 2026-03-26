/**
 * Optional logging for @bitmacro/relay-connect — forward entries to your UI or analytics.
 * Product-facing name: **BitMacro Connect**.
 */

export type RelayConnectLogLevel = "debug" | "info" | "warn" | "error";

/** One structured line the host app can render, store, or ship to telemetry. */
export type RelayConnectLogEntry = {
  /** Stable product label for dashboards and copy. */
  product: "BitMacro Connect";
  /** npm package that emitted the entry. */
  package: "@bitmacro/relay-connect";
  level: RelayConnectLogLevel;
  message: string;
  context?: Record<string, unknown>;
  timestamp: string;
};

export type RelayConnectLogSink = (entry: RelayConnectLogEntry) => void;

const LEVEL_ORDER: RelayConnectLogLevel[] = ["debug", "info", "warn", "error"];

let sink: RelayConnectLogSink | null = null;
let minLevel: RelayConnectLogLevel = "debug";

function levelIncluded(level: RelayConnectLogLevel): boolean {
  return LEVEL_ORDER.indexOf(level) >= LEVEL_ORDER.indexOf(minLevel);
}

/**
 * Register where logs go (React state, console, remote). Pass `null` to detach.
 * Safe to call from the browser or Node; typically once in a `useEffect` in the host app.
 */
export function setRelayConnectLogSink(
  next: RelayConnectLogSink | null,
  options?: { minLevel?: RelayConnectLogLevel }
): void {
  sink = next;
  if (options?.minLevel) minLevel = options.minLevel;
}

/** Lowest level still emitted (default `debug`). */
export function getRelayConnectLogMinLevel(): RelayConnectLogLevel {
  return minLevel;
}

/**
 * Emit a log entry if a sink is set and level passes the filter.
 * SDK modules should call this instead of `console.*` when behaviour should be observable by the host.
 */
export function relayConnectLog(
  level: RelayConnectLogLevel,
  message: string,
  context?: Record<string, unknown>
): void {
  if (!sink || !levelIncluded(level)) return;
  sink({
    product: "BitMacro Connect",
    package: "@bitmacro/relay-connect",
    level,
    message,
    context,
    timestamp: new Date().toISOString(),
  });
}
