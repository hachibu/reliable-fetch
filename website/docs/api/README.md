## Classes

- [ReliableFetch](classes/ReliableFetch.md)

## Interfaces

- [BaseConfig](interfaces/BaseConfig.md)
- [ChaosConfig](interfaces/ChaosConfig.md)
- [ChaosDownConfig](interfaces/ChaosDownConfig.md)
- [ChaosSlowConfig](interfaces/ChaosSlowConfig.md)
- [EventListenerFunction](interfaces/EventListenerFunction.md)
- [HedgeConfig](interfaces/HedgeConfig.md)
- [RetryConfig](interfaces/RetryConfig.md)
- [TimeoutConfig](interfaces/TimeoutConfig.md)

## Type Aliases

### Backoff

Ƭ **Backoff**: ``"constant"`` \| ``"exponential"``

#### Defined in

[types/Backoff.ts:1](https://github.com/hachibu/reliable-fetch/blob/main/src/types/Backoff.ts#L1)

___

### EventName

Ƭ **EventName**: ``"timeout"`` \| ``"retry"`` \| ``"hedge"`` \| ``"chaos:down"`` \| ``"chaos:slow"``

#### Defined in

[types/EventName.ts:1](https://github.com/hachibu/reliable-fetch/blob/main/src/types/EventName.ts#L1)

___

### Jitter

Ƭ **Jitter**: ``"none"`` \| ``"full"`` \| ``"equal"`` \| ``"decorrelated"``

#### Defined in

[types/Jitter.ts:1](https://github.com/hachibu/reliable-fetch/blob/main/src/types/Jitter.ts#L1)

___

### ReliableFetchFunction

Ƭ **ReliableFetchFunction**: (`input`: [`ReliableRequestInfo`](README.md#reliablerequestinfo), `init?`: [`ReliableRequestInit`](README.md#reliablerequestinit)) => `Promise`<`Response`\>

#### Type declaration

▸ (`input`, `init?`): `Promise`<`Response`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ReliableRequestInfo`](README.md#reliablerequestinfo) |
| `init?` | [`ReliableRequestInit`](README.md#reliablerequestinit) |

##### Returns

`Promise`<`Response`\>

#### Defined in

[types/ReliableFetchFunction.ts:4](https://github.com/hachibu/reliable-fetch/blob/main/src/types/ReliableFetchFunction.ts#L4)

___

### ReliableRequestInfo

Ƭ **ReliableRequestInfo**: `RequestInfo` \| `URL`

#### Defined in

[types/ReliableRequestInfo.ts:1](https://github.com/hachibu/reliable-fetch/blob/main/src/types/ReliableRequestInfo.ts#L1)

___

### ReliableRequestInit

Ƭ **ReliableRequestInit**: `RequestInit` & `Partial`<[`BaseConfig`](interfaces/BaseConfig.md)\> & `Partial`<[`ChaosConfig`](interfaces/ChaosConfig.md)\> & `Partial`<[`HedgeConfig`](interfaces/HedgeConfig.md)\> & `Partial`<[`RetryConfig`](interfaces/RetryConfig.md)\> & `Partial`<[`TimeoutConfig`](interfaces/TimeoutConfig.md)\>

#### Defined in

[types/ReliableRequestInit.ts:9](https://github.com/hachibu/reliable-fetch/blob/main/src/types/ReliableRequestInit.ts#L9)

## Functions

### default

▸ **default**(`url`, `init?`): [`ReliableFetch`](classes/ReliableFetch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | [`ReliableRequestInfo`](README.md#reliablerequestinfo) |
| `init?` | [`ReliableRequestInit`](README.md#reliablerequestinit) |

#### Returns

[`ReliableFetch`](classes/ReliableFetch.md)

#### Defined in

[index.ts:95](https://github.com/hachibu/reliable-fetch/blob/main/src/index.ts#L95)

___

### fetchChaos

▸ **fetchChaos**(`input`, `init?`): `Promise`<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ReliableRequestInfo`](README.md#reliablerequestinfo) |
| `init?` | [`ReliableRequestInit`](README.md#reliablerequestinit) |

#### Returns

`Promise`<`Response`\>

#### Defined in

[types/ReliableFetchFunction.ts:4](https://github.com/hachibu/reliable-fetch/blob/main/src/types/ReliableFetchFunction.ts#L4)

___

### fetchHedge

▸ **fetchHedge**(`input`, `init?`): `Promise`<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ReliableRequestInfo`](README.md#reliablerequestinfo) |
| `init?` | [`ReliableRequestInit`](README.md#reliablerequestinit) |

#### Returns

`Promise`<`Response`\>

#### Defined in

[types/ReliableFetchFunction.ts:4](https://github.com/hachibu/reliable-fetch/blob/main/src/types/ReliableFetchFunction.ts#L4)

___

### fetchRetry

▸ **fetchRetry**(`input`, `init?`): `Promise`<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ReliableRequestInfo`](README.md#reliablerequestinfo) |
| `init?` | [`ReliableRequestInit`](README.md#reliablerequestinit) |

#### Returns

`Promise`<`Response`\>

#### Defined in

[types/ReliableFetchFunction.ts:4](https://github.com/hachibu/reliable-fetch/blob/main/src/types/ReliableFetchFunction.ts#L4)

___

### fetchTimeout

▸ **fetchTimeout**(`input`, `init?`): `Promise`<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ReliableRequestInfo`](README.md#reliablerequestinfo) |
| `init?` | [`ReliableRequestInit`](README.md#reliablerequestinit) |

#### Returns

`Promise`<`Response`\>

#### Defined in

[types/ReliableFetchFunction.ts:4](https://github.com/hachibu/reliable-fetch/blob/main/src/types/ReliableFetchFunction.ts#L4)
