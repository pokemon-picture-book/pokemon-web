module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        // 'plugin:@intlify/vue-i18n/recommended',
        '@vue/typescript',
        'plugin:@typescript-eslint/eslint-recommended',
        'prettier',
        'prettier/vue'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    },
    // settings: {
    //     'vue-i18n': {
    //         localeDir: './src/assets/i18n/*.{json,json5,yaml,yml}',
    //         messageSyntaxVersion: '8.18.2'
    //     }
    // },
    parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    overrides: [
        {
            files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
            env: {
                jest: true
            }
        }
    ]
};
