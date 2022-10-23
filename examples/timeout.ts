import reliableFetch from '../src/index'

async function main() {
    await reliableFetch('https://google.com')
        .on('timeout', () => console.log('timeout triggered'))
        .timeout({ timeout: 10 })
}

main()
