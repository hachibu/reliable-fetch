"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomNumberWithinJitterPeriod = exports.randomNumberBetween = void 0;
const randomNumberBetween = (min, max) => {
    return Math.random() * (max - min) + min;
};
exports.randomNumberBetween = randomNumberBetween;
const randomNumberWithinJitterPeriod = (n) => {
    const maxJitter = n * 0.2;
    const min = n - maxJitter;
    const max = n + maxJitter;
    return (0, exports.randomNumberBetween)(min, max);
};
exports.randomNumberWithinJitterPeriod = randomNumberWithinJitterPeriod;
