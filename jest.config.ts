module.exports = {
    preset: 'ts-jest/presets/js-with-ts',  // Use the preset for JS and TS support
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest', // Transform TypeScript files
        '^.+\\.(js|jsx|ts|tsx|mjs|cjs)$': 'babel-jest', // Transform JavaScript files (needed for Next.js)
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1', // Resolve paths like @/some/path
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Optional: setup files if you need additional setup
    collectCoverageFrom: [
        'pages/**/*.{ts,tsx}',
        'components/**/*.{ts,tsx}',
        'lib/**/*.{ts,tsx}',
        'utils/**/*.{ts,tsx}', // Adjust for your project structure
    ],
    coverageDirectory: './coverage', // Optional: set the coverage directory
};
