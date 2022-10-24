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
const fetchTimeout = (input, init) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const config = {
        timeout: (_a = init === null || init === void 0 ? void 0 : init.timeout) !== null && _a !== void 0 ? _a : 10000,
    };
    const controller = new AbortController();
    const { cancel } = (0, utils_1.setTimeoutWithCancel)(() => {
        var _a;
        controller.abort();
        (_a = init === null || init === void 0 ? void 0 : init.eventEmitter) === null || _a === void 0 ? void 0 : _a.emit('timeout');
    }, config.timeout);
    return fetch(input, Object.assign(Object.assign({}, init), { signal: controller.signal })).finally(cancel);
});
exports.default = fetchTimeout;
