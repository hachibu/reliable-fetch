"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChaosError = exports.ArgumentError = void 0;
const ArgumentError_1 = __importDefault(require("./ArgumentError"));
exports.ArgumentError = ArgumentError_1.default;
const ChaosError_1 = __importDefault(require("./ChaosError"));
exports.ChaosError = ChaosError_1.default;
