module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb', 'plugin:i18next/recommended',
        'plugin:storybook/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
    ],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/jsx-indent': [2, 4],
        indent: [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [2, {
            extensions: ['.js', '.jsx', '.tsx'],
        }],
        'import/no-unresolved': 'off',
        /* 'linebreak-style': ['error', 'windows'], */
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'arrow-body-style': 'off',
        'react/function-component-definition': 'off',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'no-shadow': 'off',
        'no-underscore-dangle': 'warn',
        'import/extensions': 'off',
        'i18next/no-literal-string': [2, {
            markupOnly: true,
            ignoreAttribute: ['data-testid', 'name'],
        }],
        'max-len': [2, {
            ignoreComments: true,
            code: 120,
        }],
        'import/no-extraneous-dependencies': ['error', {
            devDependencies: [
                './config/**/*.ts',
                '**/*.test.{tsx,ts}',
                './src/shared/config/**/*.{tsx,ts}',
            ],
        }],
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [{
        files: ['**/*.{test,stories}.{tsx,ts}'],
        rules: {
            'i18next/no-literal-string': 'off',
            'max-len': 'off',
        },
    },
    {
        files: ['src/**/*.slice.ts'],
        // avoid state param assignment
        rules: {
            'no-param-reassign': ['error', {
                props: false,
            }],
        },
    },
    ],
};
