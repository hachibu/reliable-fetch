"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTimeoutWithCancel = exports.randomNumberBetween = void 0;
const randomNumberBetween = (min, max) => {
    return Math.random() * (max - min) + min;
};
exports.randomNumberBetween = randomNumberBetween;
const setTimeoutWithCancel = (callback, ms) => {
    const id = setTimeout(callback, ms);
    const cancel = () => clearTimeout(id);
    return {
        id,
        cancel,
    };
};
exports.setTimeoutWithCancel = setTimeoutWithCancel;
