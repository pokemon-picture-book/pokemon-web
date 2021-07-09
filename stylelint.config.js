module.exports = {
    extends: 'stylelint-config-standard',
    plugins: ['stylelint-scss'],
    rules: {
        indentation: 4,
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
        'selector-pseudo-element-no-unknown': [
            true,
            {
                ignorePseudoElements: ['/^v-/', 'pseudo-element']
            }
        ]
    }
};
