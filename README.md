# @x12i/env usage example

Configuration normalizer for Node.js - Zero dependencies, TypeScript-first, production-ready.

This consuming application demonstrates **normalize a typed environment variable into application configuration** using the published npm package, pinned to `4.0.3`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Normalize typed environment values into a nested configuration object.
- Combine supported configuration sources while retaining validation errors and fallback information.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/env)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
