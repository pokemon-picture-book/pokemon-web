const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-knobs/register',
        '@storybook/addon-controls',
        '@storybook/addon-actions'
    ],
    webpackFinal: (config) => {
        config.resolve = {
            extensions: ['.ts', '.js'],
            alias: {
                '@/config': path.resolve(__dirname, '../src/configForStorybook'),
                '@': path.join(__dirname, '../src/'),
                vue$: 'vue/dist/vue.esm-bundler.js'
            }
        };

        config.module.rules = config.module.rules.filter(
            (f) =>
                f.test.toString() !== '/\\.ts$/' &&
                f.test.toString() !== '/\\.css$/' &&
                f.test.toString() !== '/\\.scss$/'
        );

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
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        );
        return config;
    }
};
