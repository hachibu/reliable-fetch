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
const errors_1 = require("../errors");
const fetchChaos = (input, init) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    let n = Math.random();
    let failureRate = 1 - ((_a = init === null || init === void 0 ? void 0 : init.failureRate) !== null && _a !== void 0 ? _a : 0);
    if (failureRate < 0 || failureRate > 1) {
        throw new errors_1.ArgumentError('failureRate: should be between 0 and 1');
    }
    else if (n > failureRate) {
        throw new errors_1.ChaosError(`${n.toFixed(2)} > ${failureRate} `);
    }
    return fetch(input, init);
});
exports.default = fetchChaos;
