---
sidebar_position: 1
---

# Timeout

Ensure that a fetch request times out.

```ts
import reliableFetch from '@hachibu/reliable-fetch'

async function main() {
    const timeout = 10 // milliseconds

    await reliableFetch('https://google.com')
        .on('timeout', () => console.log('timeout triggered'))
        .timeout({ timeout })
        .catch(console.log)
}

main()
```
