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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const opossum_1 = __importDefault(require("opossum"));
const fetchCircuitBreaker = (input, init) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const config = {
        fallback: (_a = init === null || init === void 0 ? void 0 : init.fallback) !== null && _a !== void 0 ? _a : undefined,
    };
    const breaker = new opossum_1.default(fetch, init);
    if (config.fallback) {
        breaker.fallback(config.fallback);
    }
    return breaker.fire(input, init);
});
exports.default = fetchCircuitBreaker;
