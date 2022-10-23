"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomNumberBetween = void 0;
const randomNumberBetween = (min, max) => {
    return Math.random() * (max - min) + min;
};
exports.randomNumberBetween = randomNumberBetween;
