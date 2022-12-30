---
sidebar_position: 2
---

# Fluent API

Fluent object-oriented API.

## Constructor

```ts
new ReliableFetch(
    input: ReliableRequestInfo,
    init?: ReliableRequestInit
): ReliableFetch;
```

## Methods

### chaos

```ts
chaos(config?: Partial<ChaosConfig>): Promise<Response>;
```

### hedge

```ts
hedge(config?: Partial<HedgeConfig>): Promise<Response>;
```

### retry
```ts
retry(config?: Partial<RetryConfig>): Promise<Response>;
```

### timeout

```ts
timeout(config?: Partial<TimeoutConfig>): Promise<Response>;
```

### on

```ts
on(eventName: EventName, listener: EventListenerFunction): ReliableFetch;
```
