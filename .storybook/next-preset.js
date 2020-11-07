//Configuration Thanks to Trinity Nguyen
//https://medium.com/swlh/2020-complete-setup-for-storybook-nextjs-typescript-scss-and-jest-1c9ce41e6481
const path = require('path');

module.exports = {
  webpackFinal: async (baseConfig, options) => {
    const { module = {} } = baseConfig;
    
    const newConfig = {
      ...baseConfig,
      module: {
        ...module,
        rules: [...(module.rules || [])],
      },
    };

    // TypeScript 
    newConfig.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: [path.resolve(__dirname, '../components')],
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['next/babel', require.resolve('babel-preset-react-app')],
            plugins: ['react-docgen'],
          },
        },
      ],
    });
    newConfig.resolve.extensions.push('.ts', '.tsx');

    // SCSS 
    newConfig.module.rules.push({
      test: /\.(sa|sc|c)ss$/,
      use: ["style-loader", "css-loader", "sass-loader"]
    });
    
    // If you are using CSS Modules, check out the setup from Justin (justincy)
    // Many thanks to Trinity and Justin
    // https://gist.github.com/justincy/b8805ae2b333ac98d5a3bd9f431e8f70#file-next-preset-js
    // Many thanks to https://github.com/storybookjs/storybook/issues/6055#issuecomment-521046352

    return newConfig;
  },
};
