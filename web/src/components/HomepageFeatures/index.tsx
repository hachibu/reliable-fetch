import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

type FeatureItem = {
    title: string
    Svg: React.ComponentType<React.ComponentProps<'svg'>>
    description: JSX.Element
}

const FeatureList: FeatureItem[] = [
    {
        title: 'Easy to Use',
        Svg: require('@site/static/img/undraw-good-doggy.svg').default,
        description: (
            <>
                An easy to use chainable TypeScript API with developer-friendly
                documentation.
            </>
        ),
    },
    {
        title: 'Performance & Reliability',
        Svg: require('@site/static/img/undraw-delivery-truck.svg').default,
        description: (
            <>
                Lightweight with zero dependencies, and continuous integration
                against compatible versions of Node.js.
            </>
        ),
    },
    {
        title: 'Security',
        Svg: require('@site/static/img/undraw-security.svg').default,
        description: (
            <>
                Automated security checks, account takeover mitigations,
                and a security policy.
            </>
        ),
    },
]

function Feature({ title, Svg, description }: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    )
}
