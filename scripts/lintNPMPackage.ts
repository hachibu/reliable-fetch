import util from 'util'
import child_process from 'child_process'

const exec = util.promisify(child_process.exec)
const MAX_ENTRY_COUNT = 50
const MAX_UNPACKED_SIZE_BYTES = 25000

function exit(message: string, code: number = 1) {
    console.error(message)
    process.exit(code)
}

async function main() {
    const { stdout, stderr } = await exec('npm pack --dry-run --json')
    if (stderr) {
        exit(stderr)
    }

    const [{ unpackedSize, entryCount }] = JSON.parse(stdout)
    if (entryCount > MAX_ENTRY_COUNT) {
        exit(`entryCount: must be less than ${MAX_ENTRY_COUNT}`)
    } else if (unpackedSize > MAX_UNPACKED_SIZE_BYTES) {
        exit(`unpackedSize: must be less than ${MAX_UNPACKED_SIZE_BYTES} bytes`)
    }
}

main()
