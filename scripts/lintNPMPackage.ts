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

type Result = ConditionProperties & RuleResult & { factResult: number }

const exec = util.promisify(cp.exec)
const renderRuleResult = (e: Event, a: Almanac, ruleResult: RuleResult) => {
    const conditions = ruleResult.conditions as AllConditions
    const ruleResults = conditions.all as Result[]

    for (const ruleResult of ruleResults) {
        const { fact, operator, value, result, factResult, params } = ruleResult
        const unit = params?.unit
        const messages = [
            result ? '✅' : '❌',
            `${fact} ${operator} ${value} ${unit} (${factResult} ${unit})`,
        ]
        console.log(...messages)
    }
}

async function main() {
    const command = 'npm pack --dry-run --json'
    const { stdout, stderr } = await exec(command)
    if (stderr) {
        console.error(stderr)
        process.exit(1)
    }
    const [facts] = JSON.parse(stdout)
    const rule = await import(`${process.cwd()}/package.lint.json`)
    const engine = new Engine()

    console.log('🔍  Linting NPM package.')
    engine
        .addRule(rule)
        .on('success', renderRuleResult)
        .on('failure', renderRuleResult)

    const { failureResults } = await engine.run(facts)

    if (failureResults.length > 0) {
        process.exit(1)
    }
}

main()
