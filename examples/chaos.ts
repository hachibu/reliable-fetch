import reliableFetch from '../src/index'

async function main() {
    await reliableFetch('https://google.com')
        .on('chaos', () => console.log('chaos triggered'))
        .chaos({ failureRate: 1 })
}

main()
