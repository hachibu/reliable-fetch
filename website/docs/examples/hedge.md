---
sidebar_position: 3
---

# Hedge

```ts title="examples/hedge.ts"
import reliableFetch from '@hachibu/reliable-fetch'

async function main() {
    const response = await reliableFetch('https://google.com')
        .on('hedge', () => console.log('hedge triggered'))
        .hedge({ timeout: 10 })

    console.log(response.status)
}

main()
```
