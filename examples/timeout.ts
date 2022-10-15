import reliableFetch from '@hachibu/reliable-fetch'

async function main() {
    await reliableFetch('https://google.com').timeout(10).run()
}

main()
