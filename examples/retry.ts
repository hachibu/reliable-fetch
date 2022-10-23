import reliableFetch from '../src/index'

async function main() {
    await reliableFetch('https://foo.bar')
        .on('retry', (attempt: number, delay: number) => {
            console.log('retry triggered:', { attempt, delay })
        })
        .retry({
            attempts: 3,
            delay: 100,
            backoff: 'exponential',
            jitter: 'naive',
        })
}

main()
