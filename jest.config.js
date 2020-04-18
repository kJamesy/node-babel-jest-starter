module.exports = {
    testEnvironment: 'node',
    roots: ['./tests'],
    // preset: 'ts-jest',
    coveragePathIgnorePatterns: [
        '/node_modules/'
    ],
    testRegex: '((\\.|/*.)(spec))\\.js?$',
}
