import { StyleDictionary } from 'style-dictionary-utils'

const configs = [
  {
    source: [
      'src/tokens/base/*.json',
      'src/tokens/base/web/*.json',
      'src/tokens/theme/**/*.json',
    ],
    platforms: {
      css: {
        transformGroup: 'css',
        buildPath: 'dist/css/',
        files: [
          {
            destination: 'variables.css',
            format: 'css/variables',
          },
        ],
        transforms: ['clamp/css'],
      },
    },
  },
  {
    source: ['src/tokens/base/*.json', 'src/tokens/theme/**/*.json'],
    platforms: {
      js: {
        transformGroup: 'js',
        buildPath: 'dist/js/',
        files: [
          {
            destination: 'tokens.js',
            format: 'javascript/es6',
          },
        ],
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
