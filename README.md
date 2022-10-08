# Reliable Fetch ![reliable-fetch version](https://img.shields.io/badge/version-v0.0.0-yellow.svg)

An easy-to-use library for Node.js to make the fetch function more reliable.

## Features

-   Timeout
-   Circuit breaker
-   Request hedging
-   Retry with linear and exponential backoff

## What Problems Are We Solving?

| Problem                                                       | Solution                                                                             |
| :------------------------------------------------------------ | :----------------------------------------------------------------------------------- |
| Reliability functions are isolated across multiple libraries. | Unify under a single library.                                                        |
| Composition of reliability functions is not easy.             | Provide an easy-to-use [fluent API](https://en.wikipedia.org/wiki/Fluent_interface). |

## Fluent API Examples

Fetch with default fetch.

```ts
await reliableFetch(url).run()
```

Fetch with timeout.

```ts
await reliableFetch(url).timeout(2000).run()
```

Fetch with circuit breaker.

```ts
await reliableFetch(url).circuitBreaker().run()
```

Fetch with timeout and circuit breaker.

```ts
await reliableFetch(url).timeout(2000).circuitBreaker().run()
```
