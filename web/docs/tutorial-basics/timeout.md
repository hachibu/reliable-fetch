---
sidebar_position: 1
---

# Timeout

...

```ts title="examples/timeout.ts"
import reliableFetch from '@hachibu/reliable-fetch'

async function main() {
    await reliableFetch('https://google.com')
        .on('timeout', () => console.log('timeout triggered'))
        .timeout({ timeout: 10 })
        .catch(console.log)
}

main()
```
