# TODO

-   [ ] How does timeout compose with retry? And how fluent is the API (e.g. retryTimes)?

```ts
const res = await reliableFetch('https://google.com')
    .timeout(200)
    .retryTimes(3)
    .retryDelay(100)
    .retryBackoffStrategy('exponential')
    .run()
```
