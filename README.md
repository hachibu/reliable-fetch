# Reliable Fetch

An easy-to-use library for Node.js to make the fetch function more reliable.

This library is currently under development and should be considered incomplete and a work in progress.

**[📦 NPM Package](https://www.npmjs.com/package/@hachibu/reliable-fetch)**

**[📖 Documentation](https://hachibu.github.io/reliable-fetch)**

**[💻 Examples](https://github.com/hachibu/reliable-fetch/tree/main/examples)**

**💡 Goals**

-   Unify reliability functions from multiple libraries into a single library.
-   Design and document a [fluent API](https://en.wikipedia.org/wiki/Fluent_interface) where users can easily discover and compose reliability functions.

**🗺️ Roadmap**

-   [ ] Timeout
-   [ ] Circuit breaker
-   [ ] Retry with linear and exponential backoff
-   [ ] Request hedging
-   [ ] Random chaos

## Installation

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
    await reliableFetch('https://google.com').timeout(10).run()
}

main()
```
