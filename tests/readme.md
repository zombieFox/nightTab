# NightTab Testing Principles

Testing in NightTab consists primarily of unit tests covering functions that manipulate data in some way. Incorrect data transformations/corruption are the most likely thing to break nighttab and thus our focus is on that.

UI testing can get very tedious and so with nighttab we're manually testing visual aspects. Though we're open to discussing adding some regression testing.

All testing must meet the following criteria:
 - **Tests Should Be Fast**
 - **Tests Should Be Deterministic**
 - **Tests Should Be Simple**
 - Test Shouldn’t Duplicate Implementation Logic
 - Tests Should Be Readable
 - Tests should be integrated into the development and CI process
 - Tests should never be coupled with implementation details
 - Mocks should be avoided, when possible.

## Typescript
We're using typescript for testing for two reasons:
1. Benefit of types inside tests
2. New Data Layer will be written in typescript for more robustness.

Linting for typescript is done via file overrides in the `.eslintrc.js` file, meaning js files are linted using their own configuration and then typescript files are linted with a few extra settings on top of those for js.

## Status of Testing
Nighttab started without any automated testing. As the app grows in popularity with over 100k+ users and multiple contributors working on it, we've decided its time to integrate testing. We're slowly adding testing to make the app more robust and easier to improve and refactor.

## File Structure
Tests file should have the `*.test.ts` extension and be placed under `/test/<path>` where path is a direct mirror of its location in `/src/<path>`.

The file `/test/index.ts` is not a test file and is instead meant to be used to keep utility functions used across tests.