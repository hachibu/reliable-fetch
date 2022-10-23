import reliableFetch from '../src/index'

async function main() {
    const res = await reliableFetch('https://foo.bar')
        .on('retry', (attempt: number) => {
            console.log(`retry ${attempt} triggered`)
        })
        .retry({
            delay: 100,
            retries: 3,
            backoffStrategy: 'exponential',
            jitter: true,
        })

    console.log(res.status)
}

main()
