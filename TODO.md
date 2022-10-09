# TODO

-   [ ] How does timeout compose with retry? And how fluent is the API (e.g. retryTimes)?
-   [ ] Make `yarn install reliable-fetch` work
-   [ ] Make `yarn install @types/reliable-fetch` work

```ts
import reliableFetch from 'reliable-fetch'

const res = await reliableFetch('https://google.com')
    .timeout(200)
    .retryTimes(3)
    .retryDelay(100)
    .retryBackoffStrategy('exponential')
    .run()
```
