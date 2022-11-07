/** @typedef {import('jest').Config} JestConfig */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest');

/** @type {(_: JestConfig) => JestConfig} */
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
/** @type {JestConfig} */
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/components/(.*)$': '<rootDir>/components/$1',

    '^@/pages/(.*)$': '<rootDir>/pages/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
};

async function jestConfig() {
  const esModules = [
    '@mdx-js',
    '@mdx-js.mdx',
    'bail',
    'ccount',
    'character-entities',
    'character-entities-html4',
    'character-entities-legacy',
    'character-reference-invalid',
    'comma-separated-tokens',
    'decode-named-character-reference',
    'estree-util-',
    'estree-util-build-jsx',
    'estree-util-is-identifier-name',
    'estree-util-visit',
    'hast-util-',
    'hast-util-whitespace',
    'is-',
    'is-alphabetical',
    'is-alphanumerical',
    'is-decimal',
    'is-hexadecimal',
    'is-plain-obj',
    'is-plain-obj',
    'mdast-util-',
    'mdast-util-.+',
    'micromark',
    'micromark-',
    'micromark-extension-mdx-jsx',
    'micromark.+',
    'next-mdx-remote',
    'parse-entities',
    'periscopic',
    'property-information',
    'react-markdown',
    'remark-',
    'remark.+',
    'space-separated-tokens',
    'stringify-entities',
    'trim-lines',
    'trough',
    'unified',
    'unist-',
    'unist-.+',
    'vfile',
    'vfile.+',
    'zwitch',
  ].join('|');
  const nextJestConfig = await createJestConfig(customJestConfig)();

  /**
   * Tweaks to transformIgnorePattern are needed in order to run tests that use MDX.js internally.
   * That package uses es modules which by default are not transpiled by jest (it doesn't transpile node_modules).
   * So here we're modifying jest config to include es modules in node_modules in the transpilation.
   * @see https://github.com/vercel/next.js/discussions/31152#discussioncomment-1661596
   */
  nextJestConfig.transformIgnorePatterns =
    nextJestConfig.transformIgnorePatterns.map((pattern) => {
      if (pattern === '/node_modules/') {
        return `/node_modules/.pnpm/(?!(${esModules})@)`;
      }
      return pattern;
    });

  return nextJestConfig;
}

module.exports = jestConfig;
