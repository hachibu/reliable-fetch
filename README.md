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

-   **[📦 NPM Package](https://www.npmjs.com/package/@hachibu/reliable-fetch)**
-   **[📖 Documentation](https://hachibu.github.io/reliable-fetch)**
-   **[💻 Examples](https://github.com/hachibu/reliable-fetch/tree/main/examples)**

## Features

### ✨️ API

-   Lifecycle hooks (e.g. post custom metrics)
-   Timeouts
    -   [Example](https://github.com/hachibu/reliable-fetch/blob/main/examples/timeout.ts)
-   Retries with caps, backoff and jitter
    -   [Example](https://github.com/hachibu/reliable-fetch/blob/main/examples/retry.ts)
    -   [Exponential Backoff And Jitter](https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter)
-   Hedged requests
    -   [Example](https://github.com/hachibu/reliable-fetch/blob/main/examples/hedge.ts)
    -   [The Tail at Scale](https://courses.cs.duke.edu//cps296.4/fall13/838-CloudPapers/dean_longtail.pdf)
-   Random chaos
    -   [Example](https://github.com/hachibu/reliable-fetch/blob/main/examples/chaos.ts)

### 🧪 Testing

-   Automated testing against Node v18 and v19
-   Greater than 90% test coverage

### 🏎️ Performance

-   Zero dependencies
-   Less than 2 kB minzipped (i.e. minified + gzipped)

### 🔒 Security

-   Automated dependency review, Dependabot alerts and code scanning with CodeQL
-   Security policy with a response SLA of 72 hours
-   Signature required for commits
-   2FA required for publishing NPM package

## Installation

### ⚠️ Warning

-   This library is under heavy development and the API could change at any time until version 1.0.0.
-   This library is only compatible with Node.js >= 18 and relies on the Node.js Fetch API which is an experimental feature.

### Install with NPM

```
npm i @hachibu/reliable-fetch
```

### Install with Yarn

```
yarn add @hachibu/reliable-fetch
```
