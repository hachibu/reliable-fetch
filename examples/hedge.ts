import reliableFetch from '../src/index'

async function main() {
    const res = await reliableFetch('https://google.com')
        .on('hedge', () => console.log('hedge triggered'))
        .hedge({ timeout: 10 })

    console.log(res.status)
}

main()
