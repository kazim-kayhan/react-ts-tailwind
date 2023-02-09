import {
  Bars3Icon,
  BeakerIcon,
  BookmarkSquareIcon,
  CakeIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  FilmIcon,
  LockClosedIcon,
  MapPinIcon,
  PencilIcon,
  PhotoIcon,
} from '@heroicons/react/24/outline'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid'
import Button from 'components/atoms/button'
import Logos from 'components/atoms/logos'
import CopyButton from 'components/molecules/copy-button'
import Card from 'components/organisms/card'
import styles from './app.module.css'

const CONSTANTS = {
  name: 'Kazim Kayhan',
  githubProfileLink: 'https://github.com/kazim-kayhan',
  githubRepoLink: 'https://github.com/kazim-kayhan/react-ts-tailwind',
  copyButtonText: 'npx degit kazim-kayhan/react-ts-tailwind your-project-name',
}

const features = [
  {
    name: 'Vite',
    description:
      'Faster and leaner development experience for modern web projects.',
    logo: CubeTransparentIcon,
    docs: 'https://vitejs.dev/',
  },
  {
    name: 'React',
    description: 'JavaScript library for building user interfaces.',
    logo: PencilIcon,
    docs: 'https://reactjs.org/',
  },
  {
    name: 'TypeScript',
    description:
      'Strongly typed programming language that builds on JavaScript.',
    logo: BookmarkSquareIcon,
    docs: 'https://www.typescriptlang.org/',
  },
  {
    name: 'Tailwindcss',
    description: 'A utility-first CSS framework packed with classes.',
    logo: PhotoIcon,
    docs: 'https://tailwindcss.com/',
  },
  {
    name: 'Jest',
    description: 'Testing Framework with a focus on simplicity.',
    logo: QuestionMarkCircleIcon,
    docs: 'https://jestjs.io/',
  },
  {
    name: 'CSS Modules',
    description:
      'CSS file in which all class names and animation names are scoped locally by default.',
    logo: LockClosedIcon,
    docs: 'https://github.com/css-modules/css-modules',
  },
  {
    name: 'ESLint',
    description: 'Find and fix problems in your JavaScript code.',
    logo: BeakerIcon,
    docs: 'https://eslint.org/',
  },
  {
    name: 'Prettier',
    description: 'An opinionated code formatter.',
    logo: Bars3Icon,
    docs: 'https://prettier.io/',
  },
  {
    name: 'Husky',
    description:
      'Lint your commit messages, run tests, lint code, etc... when you commit or push.',
    logo: CakeIcon,
    docs: 'https://github.com/typicode/husky',
  },
  {
    name: 'Commit-lint',
    description: 'Helps your team adhering to a commit convention.',
    logo: FilmIcon,
    docs: 'https://github.com/conventional-changelog/commitlint',
  },
  {
    name: 'Atomic design',
    description:
      'We’re not designing pages, we’re designing systems of components.',
    logo: MapPinIcon,
    docs: 'https://bradfrost.com/blog/post/atomic-web-design/',
  },
  {
    name: 'Absolute imports',
    description:
      'Import resource using its full path from the project’s src folder.',
    logo: ChevronDownIcon,
    docs: 'https://github.com/vitejs/vite/issues/88#issuecomment-762415200',
  },
]

const App = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h3 className={styles.headerTopTitle}>
          <span className={styles.headerTopTitleVital}>R-Ts-T</span> @ Vite
          Template
        </h3>
        <h1 className={styles.headerTitle}>React + TypeScript + Tailwind</h1>
        <p className={styles.headerDescription}>
          Start your web projects faster than ever. Comes with:{' '}
          <code className={styles.headerDescriptionCode}>Tailwindcss</code>,{' '}
          <code className={styles.headerDescriptionCode}>CSS-Modules</code>,{' '}
          <code className={styles.headerDescriptionCode}>Jest</code>,{' '}
          <code className={styles.headerDescriptionCode}>Husky</code>,{' '}
          <code className={styles.headerDescriptionCode}>Commit-lint</code>,{' '}
          <code className={styles.headerDescriptionCode}>ESLint</code>,{' '}
          <code className={styles.headerDescriptionCode}>Prettier</code> and{' '}
          <code className={styles.headerDescriptionCode}>
            Atomic organization for components
          </code>
          . Configured and ready to go.
        </p>
        <div className={styles.viteLogoContainer}>
          <Logos.Vite className={styles.viteLogo} />
        </div>
      </header>
      <section className={styles.copy}>
        <div className={styles.copyInner}>
          <a href={CONSTANTS.githubRepoLink} target="_blank" rel="noreferrer">
            <Button>Visit on Github</Button>
          </a>
          <CopyButton text={CONSTANTS.copyButtonText} />
        </div>
      </section>
      <section className={styles.features}>
        {features.map((props, index) => (
          <div
            key={index}
            className={styles.cardWrapper}
            style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
          >
            <Card
              title={props.name}
              description={props.description}
              Icon={props.logo}
              callToAction={
                <Card.CallToAction as="a" href={props.docs} target="_blank">
                  Visit documentation →
                </Card.CallToAction>
              }
            />
          </div>
        ))}
      </section>
      <footer className={styles.footer}>
        <a href={CONSTANTS.githubProfileLink} target="_blank" rel="noreferrer">
          {CONSTANTS.name} @ {new Date().getFullYear()}
        </a>
      </footer>
    </main>
  )
}

export default App
