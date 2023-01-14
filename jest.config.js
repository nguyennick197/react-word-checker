module.exports = {
    coverageDirectory: 'coverage',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.jsx$': 'babel-jest',
        '^.+\\.js$': 'babel-jest',
    },
    setupFiles: [
        '<rootDir>/jest.init.js',
    ],
    collectCoverageFrom: [
        'src/**/*.js',
    ],
}