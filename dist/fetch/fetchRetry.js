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
const utils_1 = require("../utils");
const fetchRetry = (input, init) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    let backoff = (_a = init === null || init === void 0 ? void 0 : init.backoff) !== null && _a !== void 0 ? _a : 'linear';
    let delay = (_b = init === null || init === void 0 ? void 0 : init.delay) !== null && _b !== void 0 ? _b : 100;
    let retries = (_c = init === null || init === void 0 ? void 0 : init.retries) !== null && _c !== void 0 ? _c : 1;
    for (let i = 0; i < retries; i++) {
        try {
            let response = yield fetch(input, init);
            return response;
        }
        catch (_d) { }
        yield (0, utils_1.sleep)(delay);
        if (backoff === 'exponential') {
            delay = Math.pow(delay, 2);
        }
    }
    return fetch(input, init);
});
exports.default = fetchRetry;
