# Class: ReliableFetch

## Constructors

### constructor

• **new ReliableFetch**(`input`, `init?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ReliableRequestInfo`](../README.md#reliablerequestinfo) |
| `init` | [`ReliableRequestInit`](../README.md#reliablerequestinit) |

#### Defined in

[index.ts:14](https://github.com/hachibu/reliable-fetch/blob/main/src/index.ts#L14)

## Properties

### init

• `Private` **init**: [`ReliableRequestInit`](../README.md#reliablerequestinit) = `{}`

#### Defined in

[index.ts:16](https://github.com/hachibu/reliable-fetch/blob/main/src/index.ts#L16)

___

### input

• `Private` **input**: [`ReliableRequestInfo`](../README.md#reliablerequestinfo)

#### Defined in

[index.ts:15](https://github.com/hachibu/reliable-fetch/blob/main/src/index.ts#L15)

## Methods

### chaos

▸ **chaos**(`config?`): `Promise`<`Response`\>

The request will behave chaotically (e.g. down, slow) at the configured
rate (e.g. set `config.rate` to `0.1` to impact ~10% of requests).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config?` | `Partial`<[`ChaosConfig`](../interfaces/ChaosConfig.md)\> | chaos config |

#### Returns

`Promise`<`Response`\>

#### Defined in

[index.ts:73](https://github.com/hachibu/reliable-fetch/blob/main/src/index.ts#L73)

___

### hedge

▸ **hedge**(`config?`): `Promise`<`Response`\>

The initial request will be aborted if it does not settle within the
configured timeout and hedged with another request (e.g. set
`config.timeout` to the 95th percentile response time to hedge 5% of
requests).

**`See`**

https://courses.cs.duke.edu//cps296.4/fall13/838-CloudPapers/dean_longtail.pdf

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config?` | `Partial`<[`HedgeConfig`](../interfaces/HedgeConfig.md)\> | hedge config |

#### Returns

`Promise`<`Response`\>

#### Defined in

[index.ts:57](https://github.com/hachibu/reliable-fetch/blob/main/src/index.ts#L57)

___

### on

▸ **on**(`eventName`, `listener`): [`ReliableFetch`](ReliableFetch.md)

Listen for a specific lifecycle event by event name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | [`EventName`](../README.md#eventname) | unique identifier for a lifecycle event |
| `listener` | [`EventListenerFunction`](../interfaces/EventListenerFunction.md) | callback function for when the lifecycle event is emitted |

#### Returns

[`ReliableFetch`](ReliableFetch.md)

#### Defined in

[index.ts:27](https://github.com/hachibu/reliable-fetch/blob/main/src/index.ts#L27)

___

### retry

▸ **retry**(`config?`): `Promise`<`Response`\>

The request will be retried based on the config.

**`See`**

https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config?` | `Partial`<[`RetryConfig`](../interfaces/RetryConfig.md)\> | retry config |

#### Returns

`Promise`<`Response`\>

#### Defined in

[index.ts:90](https://github.com/hachibu/reliable-fetch/blob/main/src/index.ts#L90)

___

### timeout

▸ **timeout**(`config?`): `Promise`<`Response`\>

The request will be aborted with an `AbortError` if it does not settle
within the configured timeout.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config?` | `Partial`<[`TimeoutConfig`](../interfaces/TimeoutConfig.md)\> | timeout config |

#### Returns

`Promise`<`Response`\>

#### Defined in

[index.ts:42](https://github.com/hachibu/reliable-fetch/blob/main/src/index.ts#L42)
