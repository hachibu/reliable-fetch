import reliableFetch from '@hachibu/reliable-fetch'

async function main() {
    const response = await reliableFetch('https://google.com')
        .on('chaos:down', (status) =>
            console.log('chaos:down triggered', { status })
        )
        .on('chaos:slow', (delay) =>
            console.log('chaos:slow triggered', { delay })
        )
        .chaos({
            rate: 0.5,
            down: {
                status: 503,
            },
            slow: {
                delay: 1000,
                jitter: 'full',
            },
        })

    console.log(response.status)
}

main()
