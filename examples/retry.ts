import reliableFetch from '../src/index'

async function main() {
    const res = await reliableFetch('https://google.com').retry({
        delay: 100,
        retries: 3,
        strategy: 'exponential',
        jitter: true,
    })

    console.log(res.status)
}

main()
