# @bitmacro/relay-connect

![BitMacro relay-connect](https://raw.githubusercontent.com/bitmacro/relay-connect/main/.github/social-preview.png)

[![CI](https://github.com/bitmacro/relay-connect/actions/workflows/ci.yml/badge.svg)](https://github.com/bitmacro/relay-connect/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@bitmacro/relay-connect.svg)](https://www.npmjs.com/package/@bitmacro/relay-connect)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Node](https://img.shields.io/badge/node-%3E%3D20-brightgreen)](https://nodejs.org/)

**[→ Connect UI: relay-connect-web](https://github.com/bitmacro/relay-connect-web)**  
**[→ BitMacro: bitmacro.io](https://bitmacro.io)**

**BitMacro Connect** is the product name; the npm package is **`@bitmacro/relay-connect`**. TypeScript SDK for **NIP-46 (Nostr Connect)** and **NIP-07** used with [BitMacro Relay Manager](https://bitmacro.io): `relay-api` `/signer`, optional `relay-agent`, and browser extensions.

**Reference app (Next.js):** [relay-connect-web](https://github.com/bitmacro/relay-connect-web)

| Package              | Role                                      |
| -------------------- | ----------------------------------------- |
| `@bitmacro/relay-connect` | This repo — reusable client logic         |
| `relay-connect-web`  | Minimal UI + Next.js proxy to relay-api   |
| `relay-api`          | Central hub (private in production)       |

## Status

Public API grows as logic is extracted from `relay-connect-web` and consumers like `relay-panel`.

## Install

```bash
npm install @bitmacro/relay-connect
```

## Usage

```ts
import {
  RELAY_CONNECT_PRODUCT_NAME,
  RELAY_CONNECT_VERSION,
  relayConnectLog,
  setRelayConnectLogSink,
} from "@bitmacro/relay-connect";

console.log(RELAY_CONNECT_PRODUCT_NAME, RELAY_CONNECT_VERSION); // BitMacro Connect — marketing name
```

### Logs → host app (browser or Node)

The SDK does not assume `console`. Register a **sink** once; your UI can append entries to state, forward to analytics, or print:

```ts
import {
  relayConnectLog,
  setRelayConnectLogSink,
  type RelayConnectLogEntry,
} from "@bitmacro/relay-connect";

setRelayConnectLogSink((entry: RelayConnectLogEntry) => {
  // entry.product === "BitMacro Connect"
  // entry.package === "@bitmacro/relay-connect"
  myPanel.push(entry);
});

relayConnectLog("info", "Custom flow step", { step: "pairing" });
```

Optional second argument: `setRelayConnectLogSink(sink, { minLevel: "warn" })`. Call `setRelayConnectLogSink(null)` to detach.

## Development

```bash
npm install
npm run typecheck
npm run build
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for setup and PR guidelines.  
Issues and PRs are welcome — bug fixes, UI improvements, and new relay-connect integrations.

This project is maintained by [BitMacro](https://bitmacro.io).

## Contributors

<a align="center" href="https://github.com/bitmacro/relay-connect/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=bitmacro/relay-connect" />
</a>

---

## License

Business Source License 1.1 (BSL-1.1). See [LICENSE](LICENSE).
