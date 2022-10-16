import reliableFetch from '../src/index'

async function main() {
    const res = await reliableFetch('https://google.com').retry({
        strategy: 'linear',
        delayBetweenRetries: 100,
        maxRetries: 1,
    })

    console.log(res.status)
}

main()
