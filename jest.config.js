
/*
    This configuration is from :
    https://blog.agence-kse.fr/how-to-install-jest-in-angular-13

 */
module.exports = {
    "roots": [
        "<rootDir>/project/portfolio/src"
    ],
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    globalSetup: 'jest-preset-angular/global-setup',
};

/*
    Below is the old configuration that used to work perfectly prior to angular 13
    and his esm modules (mjs). Just keeping it for a little bit of time in case of...
 */
//
// module.exports = {
//   preset: 'jest-preset-angular/presets/defaults-esm',
//   "roots": [
//     "<rootDir>/projects/reservation_sandwich/src"
//   ],
//   globals: {
//     'ts-jest': {
//       useESM: true,
//       stringifyContentPathRegex: '\\.(html|svg)$',
//       tsconfig: '<rootDir>/tsconfig.spec.json',
//     },
//   },
//   moduleNameMapper: {
//     ...pathsToModuleNameMapper(paths, { prefix: '<rootDir>' }),
//     tslib: 'tslib/tslib.es6.js',
//   },
//   transform: {
//     '^.+\\.(ts|js|html)$': 'ts-jest',
//   },
//   transformIgnorePatterns: [
//     '/node_modules/(?!@ionic|ngx-socket-io/).+\\.js$'
//   ]
// };
// module.exports = {
//   "roots": [
//     "<rootDir>/projects/reservation_sandwich/src"
//   ],
//   "maxWorkers" : "25%", // due to bad behavior on most machines I use...
//   "transform": {
//     ".(ts|tsx)": "ts-jest"
//   },
//   "globals": {
//     "ts-jest": {
//       "tsconfig": "./tsconfig.spec.json"
//     }
//   },
//   "testRegex": "(.*).spec\\.ts",
//   "moduleFileExtensions": [
//     "ts",
//     "js"
//   ],
//   "coverageDirectory": "./dist/coverage/",
//   "collectCoverageFrom": [
//     "<rootDir>/projects/reservation_sandwich/**/*.ts"
//   ],
//   "testEnvironment": "node",
//   "testPathIgnorePatterns": [
//     ".git/.*",
//     "node_modules/.*"
//   ],
//   "transformIgnorePatterns": [
//     "node_modules/.*",
//     ".*\\.js"
//   ]
// }
