import util from 'util'
import cp from 'child_process'

const exec = util.promisify(cp.exec)

const pass = (message: string) => {
    console.error('✅ ', message)
}

const fail = (message: string) => {
    console.error('❌ ', message)
}

type Rule = NumberRule

interface NumberRule {
    key: string
    max: number
    fmt: (v: number) => string
}

const RULES: Rule[] = [
    {
        key: 'entryCount',
        max: 50,
        fmt: (v) => `${v} files`,
    },
    {
        key: 'unpackedSize',
        max: 25000,
        fmt: (v) => `${v} B`,
    },
]

async function main() {
    const command = 'npm pack --dry-run --json'
    const { stdout, stderr } = await exec(command)
    if (stderr) {
        fail(stderr)
        process.exit(1)
    }

    const [res] = JSON.parse(stdout)
    let failCount = 0

    for (const { key, max, fmt } of RULES) {
        const value = res[key]

        if (value > max) {
            fail(`${key}: ${fmt(value)} > ${fmt(max)}`)
            failCount++
        } else {
            pass(`${key}: ${fmt(value)} <= ${fmt(max)}`)
        }
    }

    if (failCount > 0) {
        process.exit(1)
    }
}

main()
