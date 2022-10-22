import reliableFetch from '../src/index'

async function main() {
    const res = await reliableFetch('https://google.com').retry()

    console.log(res.status)
}

main()
