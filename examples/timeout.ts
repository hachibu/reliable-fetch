import reliableFetch from '@hachibu/reliable-fetch'
;(async () => {
    await reliableFetch('https://google.com').timeout(100).run()
})()
