import path from 'path'
import { Application, TSConfigReader, TypeDocReader } from 'typedoc'
import { EOL } from 'node:os'
import { readFile, writeFile } from 'node:fs/promises'

const TYPEDOC_OPTIONS = {
    entryPoints: ['src/index.ts'],
    plugin: ['typedoc-plugin-markdown'],
    hideBreadcrumbs: true,
    hideInPageTOC: true,
    githubPages: false,
    gitRevision: 'main',
    readme: 'none',
}

async function main() {
    const app = new Application()

    app.options.addReader(new TSConfigReader())
    app.options.addReader(new TypeDocReader())

    app.bootstrap(TYPEDOC_OPTIONS)

    const project = app.convert()
    const out = 'website/docs/api'

    await app.generateDocs(project, out)

    // generate category metadata file for each folder
    const categories = [
        { segment: '', label: 'API' },
        { segment: 'classes', label: 'Classes' },
        { segment: 'interfaces', label: 'Interfaces' },
    ]

    for (const category of categories) {
        const categoryPath = path.join(out, category.segment, '_category_.json')
        const categoryData = JSON.stringify(
            {
                label: category.label,
            },
            null,
            4
        )
        await writeFile(categoryPath, categoryData)
    }

    // overwrite website/docs/api/README.md header
    const readmePath = `${out}/README.md`
    const readmeData = await readFile(readmePath, { encoding: 'utf-8' })
    const readmeLines = readmeData.split(EOL).slice(1)

    readmeLines.unshift('# API')

    await writeFile(readmePath, readmeLines.join(EOL))
}

main().catch(console.error)
