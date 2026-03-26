# @bitmacro/relay-connect

[![CI](https://github.com/bitmacro/relay-connect/actions/workflows/ci.yml/badge.svg)](https://github.com/bitmacro/relay-connect/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@bitmacro/relay-connect.svg)](https://www.npmjs.com/package/@bitmacro/relay-connect)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Node](https://img.shields.io/badge/node-%3E%3D20-brightgreen)](https://nodejs.org/)

**[→ Connect UI: relay-connect-web](https://github.com/bitmacro/relay-connect-web)**  
**[→ BitMacro: bitmacro.io](https://bitmacro.io)**

TypeScript SDK for **NIP-46 (Nostr Connect)** and **NIP-07** flows used with [BitMacro Relay Manager](https://bitmacro.io): `relay-api` `/signer`, optional `relay-agent`, and browser extensions.

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
