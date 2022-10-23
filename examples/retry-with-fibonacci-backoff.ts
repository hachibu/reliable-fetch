import reliableFetch from '../src/index'

async function main() {
    await reliableFetch('https://foo.bar')
        .on('retry', (attempt: number, delay: number) => {
            console.log('retry triggered:', { attempt, delay })
        })
        .retry({
            attempts: 10,
            delay: 1,
            backoff: 'fibonacci',
        })
}

main()
