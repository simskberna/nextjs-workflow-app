module.exports = {
    preset: 'ts-jest/presets/js-with-ts',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',  // Let ts-jest handle TS/TSX files
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',  // Resolve paths like @/some/path
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    collectCoverageFrom: [
        'pages/**/*.{ts,tsx}',
        'components/**/*.{ts,tsx}',
        'lib/**/*.{ts,tsx}',
        'utils/**/*.{ts,tsx}',
    ],
    coverageDirectory: './coverage',
};
