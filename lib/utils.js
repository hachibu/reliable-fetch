"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = void 0;
const sleep = (delay) => new Promise((resolve) => setTimeout(() => resolve(), delay));
exports.sleep = sleep;
