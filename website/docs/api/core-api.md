---
sidebar_position: 1
---

# Core API

Core API functions and types.

## Functions

### reliableFetch

```ts
reliableFetch: (
    url: ReliableRequestInfo,
    init?: ReliableRequestInit
) => ReliableFetch;
```

### fetchChaos

```ts
fetchChaos: ReliableFetchFunction;
```

### fetchHedge

```ts
fetchHedge: ReliableFetchFunction;
```

### fetchRetry

```ts
fetchRetry: ReliableFetchFunction;
```

### fetchTimeout

```ts
fetchTimeout: ReliableFetchFunction;
```

## Types

### ReliableFetchFunction

```ts
type ReliableFetchFunction = (
    input: ReliableRequestInfo,
    init?: ReliableRequestInit
) => Promise<Response>;
```

### ReliableRequestInfo

```ts
type ReliableRequestInfo = RequestInfo | URL;
```

### ReliableRequestInit

```ts
type ReliableRequestInit = RequestInit
    & Partial<BaseConfig>
    & Partial<ChaosConfig>
    & Partial<HedgeConfig>
    & Partial<RetryConfig>
    & Partial<TimeoutConfig>;
```

### BaseConfig

```ts
interface BaseConfig {
    eventEmitter: EventEmitter;
}
```

### ChaosConfig

```ts
interface ChaosConfig {
    rate: number;
    down: ChaosDownConfig;
    slow: ChaosSlowConfig;
}

interface ChaosDownConfig {
    status: number;
}

interface ChaosSlowConfig {
    delay: number;
    jitter: Jitter;
}
```

### HedgeConfig

```ts
interface HedgeConfig {
    timeout: number;
}
```

### RetryConfig

```ts
interface RetryConfig {
    attempts: number;
    maxAttempts: number;
    delay: number;
    maxDelay: number;
    backoff: Backoff;
    jitter: Jitter;
}
```

### TimeoutConfig

```ts
interface TimeoutConfig {
    timeout: number;
}
```

### Backoff

```ts
type Backoff = 'constant' | 'exponential';
```

### Jitter

```ts
type Jitter = 'none' | 'full' | 'equal' | 'decorrelated';
```
