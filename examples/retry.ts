import reliableFetch from '../src/index'

async function main() {
    const res = await reliableFetch('https://foo.bar')
        .on('retry', (attempt: number) => {
            console.log(`retry ${attempt} triggered`)
        })
        .retry({
            attempts: 3,
            delay: 100,
            backoff: 'exponential',
            jitter: true,
        })

    console.log(res.status)
}

main()
