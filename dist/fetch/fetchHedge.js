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
const fetchTimeout_1 = __importDefault(require("./fetchTimeout"));
const fetchHedge = (input, init) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const config = {
        timeout: (_a = init === null || init === void 0 ? void 0 : init.timeout) !== null && _a !== void 0 ? _a : 0,
    };
    let response;
    try {
        response = yield (0, fetchTimeout_1.default)(input, Object.assign(Object.assign({}, init), config));
    }
    catch (error) {
        if (error instanceof Error) {
            if (error.name !== 'AbortError') {
                throw error;
            }
        }
        (_b = init === null || init === void 0 ? void 0 : init.eventEmitter) === null || _b === void 0 ? void 0 : _b.emit('hedge');
        response = yield fetch(input, init);
    }
    return response;
});
exports.default = fetchHedge;
