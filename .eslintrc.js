module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
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
    ],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/jsx-indent': [2, 4],
        indent: [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [
            2,
            {
                extensions: ['.js', '.jsx', '.tsx'],
            },
        ],
        'import/no-unresolved': 'off',
        'linebreak-style': ['error', 'windows'],
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
        }],
        'max-len': [2, {
            ignoreComments: true,
            code: 100,
        }],
        'import/no-extraneous-dependencies': ['error', {
            devDependencies: ['./config/**/*.ts'],
        }],
    },
    globals: {
        __IS_DEV__: true,
    },
};
