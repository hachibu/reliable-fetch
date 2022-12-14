import {
    BaseConfig,
    ChaosConfig,
    HedgeConfig,
    RetryConfig,
    TimeoutConfig,
} from './config'

type ReliableRequestInit = RequestInit &
    Partial<BaseConfig> &
    Partial<ChaosConfig> &
    Partial<HedgeConfig> &
    Partial<RetryConfig> &
    Partial<TimeoutConfig>

export default ReliableRequestInit
