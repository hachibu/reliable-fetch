"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = require("timers/promises");
const utils_1 = require("../utils");
const fetchRetry = (input, init) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f;
    const config = {
        delay: (_a = init === null || init === void 0 ? void 0 : init.delay) !== null && _a !== void 0 ? _a : 100,
        maxDelay: (_b = init === null || init === void 0 ? void 0 : init.maxDelay) !== null && _b !== void 0 ? _b : 10000,
        retries: (_c = init === null || init === void 0 ? void 0 : init.retries) !== null && _c !== void 0 ? _c : 1,
        maxRetries: (_d = init === null || init === void 0 ? void 0 : init.maxRetries) !== null && _d !== void 0 ? _d : 10,
        backoffStrategy: (_e = init === null || init === void 0 ? void 0 : init.backoffStrategy) !== null && _e !== void 0 ? _e : 'constant',
        jitter: (_f = init === null || init === void 0 ? void 0 : init.jitter) !== null && _f !== void 0 ? _f : true,
    };
    const retries = Math.min(config.retries, config.maxRetries);
    for (let i = 0; i < retries; i++) {
        try {
            return yield fetch(input, init);
        }
        catch (_g) { }
        const delay = Math.min(config.delay, config.maxDelay);
        yield (0, promises_1.setTimeout)(delay);
        if (config.backoffStrategy === 'exponential') {
            // 100, 200, 400, 800, 1600, ...
            config.delay = delay * Math.pow(2, i);
        }
        if (config.jitter) {
            config.delay = (0, utils_1.randomNumberWithinJitterPeriod)(config.delay);
        }
    }
    return fetch(input, init);
});
exports.default = fetchRetry;
