'use strict'
var __createBinding =
    (this && this.__createBinding) ||
    (Object.create
        ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k
              var desc = Object.getOwnPropertyDescriptor(m, k)
              if (
                  !desc ||
                  ('get' in desc
                      ? !m.__esModule
                      : desc.writable || desc.configurable)
              ) {
                  desc = {
                      enumerable: true,
                      get: function () {
                          return m[k]
                      },
                  }
              }
              Object.defineProperty(o, k2, desc)
          }
        : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k
              o[k2] = m[k]
          })
var __exportStar =
    (this && this.__exportStar) ||
    function (m, exports) {
        for (var p in m)
            if (
                p !== 'default' &&
                !Object.prototype.hasOwnProperty.call(exports, p)
            )
                __createBinding(exports, m, p)
    }
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod }
    }
Object.defineProperty(exports, '__esModule', { value: true })
exports.fetchChaos =
    exports.fetchRetry =
    exports.fetchHedge =
    exports.fetchCircuitBreaker =
    exports.fetchTimeout =
    exports.ReliableFetch =
        void 0
const ReliableFetch_1 = __importDefault(require('./ReliableFetch'))
exports.ReliableFetch = ReliableFetch_1.default
const fetchTimeout_1 = __importDefault(require('./fetchTimeout'))
exports.fetchTimeout = fetchTimeout_1.default
const fetchCircuitBreaker_1 = __importDefault(require('./fetchCircuitBreaker'))
exports.fetchCircuitBreaker = fetchCircuitBreaker_1.default
const fetchHedge_1 = __importDefault(require('./fetchHedge'))
exports.fetchHedge = fetchHedge_1.default
const fetchRetry_1 = __importDefault(require('./fetchRetry'))
exports.fetchRetry = fetchRetry_1.default
const fetchChaos_1 = __importDefault(require('./fetchChaos'))
exports.fetchChaos = fetchChaos_1.default
const reliableFetch = (url, init) => new ReliableFetch_1.default(url, init)
exports.default = reliableFetch
__exportStar(require('./types'), exports)
__exportStar(require('./errors'), exports)
