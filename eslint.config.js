import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
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
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          ignoreRestSiblings: true,
        },
      ],
      'no-useless-return': ['error'],
      'arrow-body-style': ['error', 'as-needed'],
      'require-await': ['error'],
    },
  },
];
