import reliableFetch from '../src/index'

async function main() {
    await reliableFetch('https://google.com').chaos({ failureRate: 0.1 })
}

main()
