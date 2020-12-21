const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: config => {
    config.resolve = {
      extensions: ['.ts', '.js'],
      alias: {
        '@': path.join(__dirname, '../src/'),
        vue$: 'vue/dist/vue.esm-bundler.js'
      }
    };

    config.module.rules.push(
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    );
    return config;
  }
};
