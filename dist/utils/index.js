"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomJitter = void 0;
const randomJitter = (n) => {
    const maxJitter = n * 0.2;
    const min = n - maxJitter;
    const max = n + maxJitter;
    return Math.random() * (max - min) + min;
};
exports.randomJitter = randomJitter;
