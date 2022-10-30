/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
export declare const randomNumber: () => number;
export declare const randomNumberBetween: (min: number, max: number) => number;
export declare const setTimeoutWithCancel: (callback: VoidFunction, ms?: number) => {
    id: NodeJS.Timeout;
    cancel: VoidFunction;
};
