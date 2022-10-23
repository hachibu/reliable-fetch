"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRandomJitter = exports.randomNumberBetween = void 0;
const randomNumberBetween = (min, max) => {
    return Math.random() * (max - min) + min;
};
exports.randomNumberBetween = randomNumberBetween;
const addRandomJitter = (delay) => {
    const jitter = (0, exports.randomNumberBetween)(0, delay * 0.2);
    return delay + jitter;
};
exports.addRandomJitter = addRandomJitter;
