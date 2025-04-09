import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Simplifies Integration',
        Svg: require('@site/static/img/SimplifiesIntegration.svg').default,
        description: (
            <>
                Easily connects JavaScript front-end with Laravel back-end, reducing complexity and enhancing
                development speed.
            </>
        ),
    },
    {
        title: 'Direct Method Access',
        Svg: require('@site/static/img/DirectMethodAccess.svg').default,
        description: (
            <>
                Access Laravel controller methods directly from the front-end, improving data handling and dynamic
                functionality.
            </>
        ),
    },
    {
        title: 'Improved Maintainability',
        Svg: require('@site/static/img/ImprovedMaintainability.svg').default,
        description: (
            <>
                Promotes clean code organization by separating front-end and back-end, making complex applications
                easier to maintain.
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className={styles.flex}>
                    <img src={require('@site/static/img/back.png').default} alt="Backend"/>
                    <img src={require('@site/static/img/front.png').default} alt="Frontend"/>
                </div>
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
