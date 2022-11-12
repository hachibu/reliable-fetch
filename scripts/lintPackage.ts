import util from 'util'
import cp from 'child_process'
import {
    Almanac,
    Event,
    Engine,
    AllConditions,
    ConditionProperties,
    RuleResult,
} from 'json-rules-engine'

type RuleResults = (ConditionProperties & RuleResult & { factResult: number })[]

const logger = {
    error(...messages: string[]) {
        console.log('❌', ...messages)
    },
    success(...messages: string[]) {
        console.log('✅', ...messages)
    },
}

const ruleResultHandler = (
    event: Event,
    almanac: Almanac,
    ruleResult: RuleResult
) => {
    const allConditions = ruleResult.conditions as AllConditions
    const ruleResults = allConditions.all as RuleResults

    for (const ruleResult of ruleResults) {
        const { fact, operator, value, result, factResult, params } = ruleResult
        const unit = params?.unit
        const messages = [`${fact}:`, factResult, unit, operator, value, unit]
        if (result) {
            logger.success(...messages)
        } else {
            logger.error(...messages)
        }
    }
}

async function main() {
    const command = 'npm pack --dry-run --json'
    const { stdout, stderr } = await util.promisify(cp.exec)(command)
    if (stderr) {
        logger.error(stderr)
        process.exit(1)
    }
    const npmPack = JSON.parse(stdout)
    if (npmPack.length === 0) {
        logger.error('NPM pack is empty')
        process.exit(1)
    }

    const engine = new Engine()
    const rule = await import(`${process.cwd()}/package.lint.json`)
    const facts = npmPack.at(0)

    const { failureResults } = await engine
        .addRule(rule)
        .on('success', ruleResultHandler)
        .on('failure', ruleResultHandler)
        .run(facts)

    if (failureResults.length > 0) {
        process.exit(1)
    }
}

main()
