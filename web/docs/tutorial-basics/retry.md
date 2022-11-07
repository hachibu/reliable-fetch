---
sidebar_position: 2
---

# Retry

...

```ts title="examples/retry.ts"
import reliableFetch from '@hachibu/reliable-fetch'

async function main() {
    await reliableFetch('https://foo.bar')
        .on('retry', (attempt: number, delay: number) => {
            console.log('retry triggered:', { attempt, delay })
        })
        .retry({
            attempts: 3,
            delay: 100,
            backoff: 'exponential',
            jitter: 'full',
        })
}

main()
```