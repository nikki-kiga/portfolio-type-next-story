module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jx,ts,tsx}',
    '!**/node_modules/**',
    '!**/.storybook/**',
    '!**/tests/**',
    '!**/coverage/**',
    '!jest.config.js',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  setupFiles: ['<rootDir>/config/setup.js'],
  preset: 'ts-jest',
  testPathIgnorePatterns: ['/.next/', '/node_modules/', '/lib/', '/tests/', '/coverage/', '/.storybook/'],
  testRegex: '(/__test__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testURL: 'http://localhost',
  testEnvironment: 'jsdom',
  globals: {
    // we must specify a custom tsconfig for tests because we need the typescript transform
    // to transform jsx into js rather than leaving it jsx such as the next build requires.  you
    // can see this setting in tsconfig.jest.json -> "jsx": "react"
    "ts-jest": {
      tsConfig: "tsconfig.jest.json"
    }
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  transform: {
    '.(ts|tsx)': 'ts-jest',
    '.(js|jsx)': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/', 
    '^.+\\.module\\.(css|sass|scss)$'],
};
