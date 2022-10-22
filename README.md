# Reliable Fetch

![unit-tests](https://img.shields.io/github/workflow/status/hachibu/reliable-fetch/unit-tests/main?label=unit-tests)
![coverage](https://raw.githubusercontent.com/hachibu/reliable-fetch/main/coverage-badge.svg)

An easy-to-use [Node.js](https://nodejs.org/en/) library to make the [fetch function](https://developer.mozilla.org/en-US/docs/Web/API/fetch) more reliable.

```ts
import reliableFetch from '@hachibu/reliable-fetch'

async function main() {
    await reliableFetch('https://google.com').timeout({ timeout: 10 })
}
```

## 💡 Goals

-   Unify reliability functions from multiple libraries into a single library.
-   Design and document a [fluent API](https://en.wikipedia.org/wiki/Fluent_interface) where users can easily discover reliability functions.

## ✨️ Features

-   Timeout
-   Retry
-   Hedge
-   Chaos

## ⚠️ Warning

-   This library is under active design and development and should be considered a work-in-progress. This means that the API is not stable and could change without warning until version 1.0.0.
-   The Fetch API is an experimental feature in Node.js. This feature could change at any time.

## 🏎️ Engines

-   Node.js >= 18.

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
