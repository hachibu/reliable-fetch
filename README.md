<img src="https://raw.githubusercontent.com/hachibu/reliable-fetch/main/website/static/img/logo.svg" width="30%">

# Reliable Fetch

An easy-to-use [Node.js](https://nodejs.org) library to make the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) more reliable with timeouts, retries, and more.

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

-   Timeouts
-   Retries with caps, backoff and jitter
-   Hedged requests
-   Random chaos
-   Lifecycle hooks

**[📖 Documentation](https://hachibu.github.io/reliable-fetch)**

**[💻 Examples](https://github.com/hachibu/reliable-fetch-examples)**

**[📦 NPM Package](https://www.npmjs.com/package/@hachibu/reliable-fetch)**
