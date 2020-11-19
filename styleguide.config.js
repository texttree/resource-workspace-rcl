const path = require('path');
const upperFirst = require('lodash/upperFirst');
const camelCase = require('lodash/camelCase');
const { name, version } = require('./package.json');

module.exports = {
  title: `${upperFirst(camelCase(name))} v${version}`,
  moduleAliases: { 'resource-workspace-rcl': path.resolve(__dirname, 'src') },
  skipComponentsWithoutExample: true,
  ignore: ['**/helpers**', '**/styled**', '**/__tests__/**', '**/*.test.{js,jsx,ts,tsx}', '**/*.spec.{js,jsx,ts,tsx}', '**/*.d.ts'],
  serverPort: 6003,
  exampleMode:'expand',
  usageMode: 'expand',
  getComponentPathLine(componentPath) {
    const componentName = componentPath.match(/(\w+)\/index.js/)[1];
    return `import { ${componentName} } from '${name}';`;
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            { loader: 'css-loader' },
          ],
        },
      ],
    },
  },
};
