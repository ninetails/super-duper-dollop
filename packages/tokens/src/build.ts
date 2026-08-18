import { StyleDictionary } from 'style-dictionary-utils'

const configs = [
  {
    include: [
      'src/tokens/base/global/**/*.json',
      'src/tokens/base/platform/web/**/*.json',
    ],
    source: [
      'src/tokens/theme/global/**/*.json',
      'src/tokens/theme/platform/web/**/*.json',
    ],
    platforms: {
      css: {
        transformGroup: 'css',
        buildPath: 'dist/theme/',
        files: [
          {
            destination: 'variables.css',
            format: 'css/variables',
            filter: 'isSource',
          },
        ],
        transforms: ['clamp/css'],
      },
    },
  },
  {
    include: ['src/tokens/base/global/**/*.json'],
    source: [
      'src/tokens/theme/global/**/*.json',
      'src/tokens/theme/platform/mobile/**/*.json',
    ],
    platforms: {
      js: {
        transformGroup: 'js',
        buildPath: 'dist/theme/',
        files: [
          {
            destination: 'tokens.js',
            format: 'javascript/es6',
            filter: 'isSource',
          },
        ],
        transforms: ['name/pathToCamelCase'],
      },
    },
  },
]

async function build() {
  for (const config of configs) {
    const styleDictionary = new StyleDictionary()
    const extendedStyleDictionary = await styleDictionary.extend(config)
    await extendedStyleDictionary.buildAllPlatforms()
  }
}

build()
