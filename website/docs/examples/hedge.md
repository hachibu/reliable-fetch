---
sidebar_position: 3
---

# Hedge

Hedge a fetch request.

```ts
import reliableFetch from '@hachibu/reliable-fetch'

async function main() {
    const response = await reliableFetch('https://google.com')
        .on('hedge', () => console.log('hedge triggered'))
        .hedge({ timeout: 10 })

    console.log(response.status)
}

main()
```

## Resources

- https://courses.cs.duke.edu//cps296.4/fall13/838-CloudPapers/dean_longtail.pdf
