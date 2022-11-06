<img src="https://raw.githubusercontent.com/hachibu/reliable-fetch/main/images/reliable-fetch-logo.svg" width="30%">

# Reliable Fetch

![unit tests](https://img.shields.io/github/workflow/status/hachibu/reliable-fetch/unit-tests/main?label=unit-tests)
![minzipped size](https://img.shields.io/bundlephobia/minzip/@hachibu/reliable-fetch)
![license](https://img.shields.io/github/license/hachibu/reliable-fetch?color=blue)

An easy-to-use [Node.js](https://nodejs.org/en/) library to make the [fetch function](https://developer.mozilla.org/en-US/docs/Web/API/fetch) more reliable.

```ts
import reliableFetch from '@hachibu/reliable-fetch'

async function main() {
    await reliableFetch('https://google.com')
        .on('timeout', () => console.log('timeout triggered'))
        .timeout({ timeout: 10 })
}
```

-   **✨ Features**
    -   Lifecycle hooks
    -   Timeouts
    -   Retries with caps, backoff and jitter
    -   Hedged requests
    -   Random chaos
-   **[📖 Documentation](https://hachibu.github.io/reliable-fetch)**
-   **[💻 Examples](https://github.com/hachibu/reliable-fetch/tree/main/examples)**
-   **[📦 NPM Package](https://www.npmjs.com/package/@hachibu/reliable-fetch)**

## Installation

**⚠️ Warning:** This library is only compatible with Node.js v18+ and relies on the native Fetch API which is an experimental feature.

```
npm i @hachibu/reliable-fetch@latest
```
