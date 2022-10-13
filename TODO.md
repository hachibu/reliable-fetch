# TODO

-   Add keywords to package.json
-   Add an unreliable chaos fetch method that fails X% of the time.
-   How will timeout compose with retry? How granular should the fluent API be? For example, retryTimes?

```ts
const res = await reliableFetch('https://google.com')
    .timeout(200)
    .retryTimes(3)
    .retryDelay(100)
    .retryBackoffStrategy('exponential')
    .run()
```
