module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],

  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extends', 'tailwind', 'screen'],
      },
    ],
  },
}
