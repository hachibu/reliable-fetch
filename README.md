<img src="https://raw.githubusercontent.com/hachibu/reliable-fetch/main/web/static/img/logo.svg" width="30%">

# Reliable Fetch

![minzipped size](https://img.shields.io/bundlephobia/minzip/@hachibu/reliable-fetch)
![license](https://img.shields.io/github/license/hachibu/reliable-fetch?color=blue)

An easy-to-use [Node.js](https://nodejs.org) library to make the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) more reliable.

```typescript
import reliableFetch from '@hachibu/reliable-fetch'

async function main() {
    const timeout = 10 // milliseconds

    await reliableFetch('https://google.com')
        .on('timeout', () => console.log('timeout triggered'))
        .timeout({ timeout })
        .catch(console.log)
}
```

**✨ Features**

-   Lifecycle hooks
-   Timeouts
-   Retries with caps, backoff and jitter
-   Hedged requests
-   Random chaos

**[📖 Documentation](https://hachibu.github.io/reliable-fetch)**

**[💻 Examples](https://github.com/hachibu/reliable-fetch-examples)**

**[📦 NPM Package](https://www.npmjs.com/package/@hachibu/reliable-fetch)**

## Installation

**⚠️ Warning:** This library is only compatible with Node.js v18+ and relies on the native Fetch API which is an experimental feature.

```
npm i @hachibu/reliable-fetch@latest
```
