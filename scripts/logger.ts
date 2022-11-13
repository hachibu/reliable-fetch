type LoggerFunction = (...messages: string[]) => void

interface Logger {
    error: LoggerFunction
    fatal: LoggerFunction
    success: LoggerFunction
}

const logger: Logger = {
    error(...messages: string[]) {
        console.log('❌', ...messages)
    },
    fatal(...messages: string[]) {
        this.error(...messages)
        process.exit(1)
    },
    success(...messages: string[]) {
        console.log('✅', ...messages)
    },
}

export default logger
