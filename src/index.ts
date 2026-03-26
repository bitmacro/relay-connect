/**
 * @bitmacro/relay-connect — **BitMacro Connect** — NIP-46 / NIP-07 client helpers.
 * Reference UI: https://github.com/bitmacro/relay-connect-web
 */

export {
  RELAY_CONNECT_PACKAGE_NAME,
  RELAY_CONNECT_PRODUCT_NAME,
  RELAY_CONNECT_VERSION,
} from "./meta.js";
export {
  getRelayConnectLogMinLevel,
  relayConnectLog,
  setRelayConnectLogSink,
  type RelayConnectLogEntry,
  type RelayConnectLogLevel,
  type RelayConnectLogSink,
} from "./logger.js";
