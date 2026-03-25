# @bitmacro/relay-connect

TypeScript SDK for **NIP-46 (Nostr Connect)** and **NIP-07** flows used with [BitMacro Relay Manager](https://github.com/bitmacro): `relay-api` `/signer`, optional `relay-agent`, and browser extensions.

**Reference app (Next.js):** [relay-connect-web](https://github.com/bitmacro/relay-connect-web)

| Package              | Role                                      |
| -------------------- | ----------------------------------------- |
| `@bitmacro/relay-connect` | This repo — reusable client logic         |
| `relay-connect-web`  | Minimal UI + Next.js proxy to relay-api   |
| `relay-api`          | Central hub (private in production)       |

## Status

Initial scaffold (`0.1.0`): public API will grow as logic is extracted from `relay-connect-web` and consumers like `relay-panel`.

## Install

```bash
npm install @bitmacro/relay-connect
```

## Usage

```ts
import { RELAY_CONNECT_VERSION } from "@bitmacro/relay-connect";
```

## Development

```bash
npm install
npm run typecheck
npm run build
```

## License

MIT — see [LICENSE](./LICENSE).
