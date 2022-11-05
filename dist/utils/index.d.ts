/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import { Backoff, Jitter } from '../types';
export declare const randomNumber: () => number;
export declare const randomNumberBetween: (min: number, max: number) => number;
export declare const setTimeoutWithCancel: (callback: VoidFunction, ms?: number) => {
    id: NodeJS.Timeout;
    cancel: VoidFunction;
};
export declare const delayWithBackoff: (delay: number, attempt: number, backoff: Backoff) => number;
export declare const delayWithJitter: (delay: number, jitter: Jitter) => number;
//# sourceMappingURL=index.d.ts.map