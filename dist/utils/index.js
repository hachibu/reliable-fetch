"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = exports.fetchMockResponseWithDelay = exports.DEFAULT_DELAY = void 0;
const jest_fetch_mock_1 = __importDefault(require("jest-fetch-mock"));
exports.DEFAULT_DELAY = 500;
const fetchMockResponseWithDelay = (delay) => jest_fetch_mock_1.default.mockResponse(() => (0, exports.sleep)(delay !== null && delay !== void 0 ? delay : exports.DEFAULT_DELAY));
exports.fetchMockResponseWithDelay = fetchMockResponseWithDelay;
const sleep = (ms) => new Promise((resolve) => setTimeout(() => resolve(''), ms));
exports.sleep = sleep;
