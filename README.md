# Reliable Fetch

![unit tests](https://img.shields.io/github/workflow/status/hachibu/reliable-fetch/unit-tests/main?label=unit-tests)
![coverage](https://raw.githubusercontent.com/hachibu/reliable-fetch/main/coverage-badge.svg)
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

## ✨️ Features

-   An easy-to-use and well documented [fluent API](https://en.wikipedia.org/wiki/Fluent_interface)
-   Lifecycle hooks for logging custom errors and/or metrics
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

### Testing

-   Greater than 90% unit test coverage
-   Automated testing against Node v18 and v19

### Performance

-   Zero dependencies
-   Less than 2 kB minzipped (i.e. minified + gzipped)

### Security

-   Automated dependency review
-   Automated code scanning with CodeQL
-   2FA required for publishing NPM package

## 🏎️ Engine Compatibility

-   Node.js >= 18

## ⚠️ Warning

-   This library is under development. The API could change at any time until version 1.0.0.
-   This library relies on the Node.js Fetch API which is an experimental feature. This feature could change at any time.

## ⚙️ Installation

**Install with NPM**

```
npm i @hachibu/reliable-fetch
```

**Install with Yarn**

```
yarn add @hachibu/reliable-fetch
```

## 🔗 Links

-   **[📦 NPM Package](https://www.npmjs.com/package/@hachibu/reliable-fetch)**
-   **[📖 Documentation](https://hachibu.github.io/reliable-fetch)**
-   **[💻 Examples](https://github.com/hachibu/reliable-fetch/tree/main/examples)**
-   **[🤝 Contributing](https://github.com/hachibu/reliable-fetch/blob/main/CONTRIBUTING.md)**
