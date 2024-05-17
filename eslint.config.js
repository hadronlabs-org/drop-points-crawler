import js from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';

export default [
  js.configs.recommended,
  eslintPluginPrettierRecommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'warn',
      'prettier/prettier': [
        'error',
        {},
        {
          usePrettierrc: true,
        },
      ],
      // "@typescript-eslint/no-explicit-any": "off",
      // "@typescript-eslint/no-var-requires": "off",
      // "@typescript-eslint/no-empty-interface": "off",
      // "@typescript-eslint/no-unused-vars": [
      //     "error",
      //     {
      //         "ignoreRestSiblings": true
      //     }
      // ],
      'no-useless-return': ['error'],
      'arrow-body-style': ['error', 'as-needed'],
      'require-await': ['error'],
    },
  },
];
