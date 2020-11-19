module.exports = {
  skipComponentsWithoutExample: true,
  title: 'React Style Guide Example',
  ignore: ['**/helpers**', '**/styled**', '**/__tests__/**', '**/*.test.{js,jsx,ts,tsx}', '**/*.spec.{js,jsx,ts,tsx}', '**/*.d.ts'],
  serverPort: 6003,
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
