# Reliable Fetch ![NPM version](https://img.shields.io/npm/v/@hachibu/reliable-fetch) ![license](https://img.shields.io/github/license/hachibu/reliable-fetch)

An easy-to-use library for Node.js to make the fetch function more reliable. This library is currently under development and should be considered incomplete and a work in progress.

**[📦 NPM Package](https://www.npmjs.com/package/@hachibu/reliable-fetch)**

**[📖 Documentation](https://hachibu.github.io/reliable-fetch)**

**💡 Goals**

-   Unify reliability functions from multiple libraries into a single library.
-   Design a [fluent API](https://en.wikipedia.org/wiki/Fluent_interface) that allows users to easily discover and compose reliability functions.

**✨ Features**

-   Timeout
-   Circuit breaker
-   Retry with linear and exponential backoff
-   Request hedging

## Quick Start

### Installation

```
yarn add @hachibu/reliable-fetch
```

### Usage

```ts
import reliableFetch from '@hachibu/reliable-fetch'
;(async () => {
    const res = await reliableFetch('https://google.com').timeout(100).run()
})()
```
