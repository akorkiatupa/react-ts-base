module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'prettier/react',

    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        project: './tsconfig.json',
        tsconfigRootDir: './',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },

    rules: {},
};