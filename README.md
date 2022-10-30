# Reliable Fetch

![unit tests](https://img.shields.io/github/workflow/status/hachibu/reliable-fetch/unit-tests/main?label=unit-tests)
![coverage](https://raw.githubusercontent.com/hachibu/reliable-fetch/main/coverage-badge.svg)
![minzipped size](https://img.shields.io/bundlephobia/minzip/@hachibu/reliable-fetch)

An easy-to-use [Node.js](https://nodejs.org/en/) library to make the [fetch function](https://developer.mozilla.org/en-US/docs/Web/API/fetch) more reliable.

```ts
import reliableFetch from '@hachibu/reliable-fetch'

async function main() {
    await reliableFetch('https://google.com')
        .on('timeout', () => console.log('timeout triggered'))
        .timeout({ timeout: 10 })
}
```

## 💡 Goals

-   Unify reliability functions from multiple libraries into a single library.
-   Design and document a [fluent API](https://en.wikipedia.org/wiki/Fluent_interface) where users can easily discover reliability functions.

## ✨️ Features

-   Lifecycle hooks
-   Timeouts
    -   [Example](https://github.com/hachibu/reliable-fetch/blob/main/examples/timeout.ts)
-   Retries with capping, backoff and jitter
    -   [Example](https://github.com/hachibu/reliable-fetch/blob/main/examples/retry.ts)
    -   [Exponential Backoff And Jitter](https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter)
-   Hedged requests
    -   [Example](https://github.com/hachibu/reliable-fetch/blob/main/examples/hedge.ts)
    -   [The Tail at Scale](https://courses.cs.duke.edu//cps296.4/fall13/838-CloudPapers/dean_longtail.pdf)
-   Random chaos
    -   [Example](https://github.com/hachibu/reliable-fetch/blob/main/examples/chaos.ts)

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

-   **[📖 Documentation](https://hachibu.github.io/reliable-fetch)**
-   **[💻 Examples](https://github.com/hachibu/reliable-fetch/tree/main/examples)**
-   **[🗺️ Roadmap](https://github.com/hachibu/reliable-fetch/blob/main/ROADMAP.md)**
-   **[🤝 Contributing](https://github.com/hachibu/reliable-fetch/blob/main/CONTRIBUTING.md)**
-   **[📦 NPM Package](https://www.npmjs.com/package/@hachibu/reliable-fetch)**
