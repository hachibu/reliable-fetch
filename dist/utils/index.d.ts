/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import { Jitter } from '../types';
export declare const randomNumber: () => number;
export declare const randomNumberBetween: (min: number, max: number) => number;
export declare const setTimeoutWithCancel: (callback: VoidFunction, ms?: number) => {
    id: NodeJS.Timeout;
    cancel: VoidFunction;
};
export declare const addJitter: (delay: number, jitter: Jitter) => number;
//# sourceMappingURL=index.d.ts.map