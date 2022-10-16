import reliableFetch from '../src/index'

async function main() {
    await reliableFetch('https://google.com').timeout({ timeout: 10 }).run()
}

main()
