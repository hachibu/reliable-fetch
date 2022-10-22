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
const fetchRetry = (input, init) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    var _b, _c, _d;
    const config = {
        strategy: (_b = init === null || init === void 0 ? void 0 : init.strategy) !== null && _b !== void 0 ? _b : 'linear',
        delayBetweenRetries: (_c = init === null || init === void 0 ? void 0 : init.delayBetweenRetries) !== null && _c !== void 0 ? _c : 100,
        maxRetries: (_d = init === null || init === void 0 ? void 0 : init.maxRetries) !== null && _d !== void 0 ? _d : 1,
    };
    for (let i = 0; i < config.maxRetries; i++) {
        try {
            return yield fetch(input, init);
        }
        catch (_e) { }
        yield (0, promises_1.setTimeout)(config.delayBetweenRetries);
        if (config.strategy === 'exponential') {
            (_a = config).delayBetweenRetries = Math.pow(_a.delayBetweenRetries, 2);
        }
    }
    return fetch(input, init);
});
exports.default = fetchRetry;
