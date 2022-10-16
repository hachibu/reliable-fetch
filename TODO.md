# TODO

-   Add JSDoc comments to the ReliableFetch class to improve API discoverability which is one of your stated goals.
-   Refactor arguments for each reliability method into an interface and merge them into ReliableRequestInit.
-   Do a release once documentation is improved.
-   How will timeout compose with retry? How granular should the fluent API be? For example, retryTimes?

```ts
const res = await reliableFetch('https://google.com')
    .timeout(200)
    .retryTimes(3)
    .retryDelay(100)
    .retryBackoffStrategy('exponential')
    .run()
```
