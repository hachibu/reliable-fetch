import { Application, TSConfigReader, TypeDocReader } from 'typedoc'
import { readFile, writeFile } from 'node:fs/promises'
import { EOL } from 'os'

async function main() {
    const app = new Application()
    const out = 'website/docs/api'

    app.options.addReader(new TSConfigReader())
    app.options.addReader(new TypeDocReader())

    app.bootstrap({
        entryPoints: ['src/index.ts'],
        plugin: ['typedoc-plugin-markdown'],
        hideBreadcrumbs: true,
        hideInPageTOC: true,
        githubPages: false,
        gitRevision: 'main',
        readme: 'none',
    })

    const project = app.convert()

    if (project) {
        await app.generateDocs(project, out)
    }

    const categories = [
        [`${out}`, { label: 'API' }],
        [`${out}/classes`, { label: 'Classes' }],
        [`${out}/interfaces`, { label: 'Interfaces' }],
    ]

    for (const [path, json] of categories) {
        await writeFile(
            `${path}/_category_.json`,
            JSON.stringify(json, null, 4)
        )
    }

    const readmePath = `${out}/README.md`
    const readmeData = await readFile(readmePath, { encoding: 'utf-8' })
    const readmeLines = readmeData.split(EOL).slice(1)

    readmeLines.unshift('# API')

    await writeFile(readmePath, readmeLines.join(EOL))
}

main().catch(console.error)
