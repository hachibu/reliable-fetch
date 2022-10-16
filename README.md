# Reliable Fetch ![coverage](https://raw.githubusercontent.com/hachibu/reliable-fetch/main/coverage-badge.svg)

An easy-to-use library for Node.js to make the fetch function more reliable.

This library is currently under development and should be considered incomplete and a work in progress.

**[📖 Documentation](https://hachibu.github.io/reliable-fetch)**

**[💻 Examples](https://github.com/hachibu/reliable-fetch/tree/main/examples)**

**[🤝 Contributing](https://github.com/hachibu/reliable-fetch/blob/main/CONTRIBUTING.md)**

**💡 Goals**

-   Unify reliability functions from multiple libraries into a single library.
-   Design and document a [fluent API](https://en.wikipedia.org/wiki/Fluent_interface) where users can easily discover and compose reliability functions.

**✨️ Features**

-   Timeout

**🗺️ Roadmap**

-   [ ] Request hedging
-   [ ] Random chaos
-   [ ] Retry with linear and exponential backoff
-   [ ] Circuit breaker

## Installation

**[📦 NPM Package](https://www.npmjs.com/package/@hachibu/reliable-fetch)**

### NPM

```
npm i @hachibu/reliable-fetch
```

### Yarn

```
yarn add @hachibu/reliable-fetch
```

## Usage

```ts
// examples/timeout.ts
import reliableFetch from '@hachibu/reliable-fetch'

async function main() {
    await reliableFetch('https://google.com').timeout({ timeout: 10 }).run()
}

main()
```
