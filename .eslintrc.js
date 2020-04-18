module.exports = {
    env: {
        browser: true,
        node: true,
        es2017: true,
        jest: true,
        mongo: true,
        commonjs: true,
    },
    extends: [
        "eslint:recommended",
    ],
    root: true,
    parserOptions: {
        ecmaVersion: 8,
        sourceType: "module",
        project: "./tsconfig.json",
    },
    rules: {
        "brace-style": ["error"],
        "func-call-spacing": ["error"],
        "indent": ["error", 4],
        "no-extra-parens": ["error"],
        "no-unused-expressions": ["error"],
        "no-useless-constructor": "error",
        "quotes": ["error", "single"],
        "semi": ["error", "never"],
        "space-before-function-paren": ["error", "never"],
        "arrow-parens": ["error", "always"],
        "no-console": ["error", { allow: ["warn", "error"] }],
        "eol-last": ["off", "always"],
        "prefer-const": ["error", {
            "destructuring": "any",
            "ignoreReadBeforeAssign": false
        }],
        "comma-dangle": ["error", "always-multiline"],
        "space-in-parens": ["error", "never"],
        "no-template-curly-in-string": ["error"],
        "curly": ["error", "all"],
        "no-plusplus": ["error"],
        "no-return-assign": ["off"],
    }
}