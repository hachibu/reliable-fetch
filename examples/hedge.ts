import reliableFetch from '../src/index'

async function main() {
    const res = await reliableFetch('https://google.com').hedge({ timeout: 10 })

    console.log(res.status)
}

main()
