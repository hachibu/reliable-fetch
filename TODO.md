# TODO

How will timeout compose with retry? How granular should the fluent API be? For example, retryTimes?

```ts
const res = await reliableFetch('https://google.com')
    .timeout(200)
    .retryTimes(3)
    .retryDelay(100)
    .retryBackoffStrategy('exponential')
    .run()
```
