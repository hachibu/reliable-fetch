import { build, analyzeMetafile } from 'esbuild'

const config = {
    entryPoints: ['src/index.ts'],
    outfile: 'dist/index.js',
    bundle: true,
    minify: true,
    metafile: true,
    sourcemap: true,
    platform: 'node',
    target: ['node18'],
    external: ['./node_modules/*'],
    drop: ['console', 'debugger'],
}

async function main() {
    const result = await build(config).catch(() => process.exit(1))
    const analysis = await analyzeMetafile(result.metafile, {
        verbose: true,
    })
    console.log(analysis)
}

main()
