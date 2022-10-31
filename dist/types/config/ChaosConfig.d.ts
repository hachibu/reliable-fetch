import Jitter from '../Jitter';
export interface ChaosDownConfig {
    status: number;
}
export interface ChaosSlowConfig {
    delay: number;
    jitter: Jitter;
}
export default interface ChaosConfig {
    rate: number;
    down: ChaosDownConfig;
    slow: ChaosSlowConfig;
}
//# sourceMappingURL=ChaosConfig.d.ts.map