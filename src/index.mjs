import assert from 'node:assert/strict';
import env from '@x12i/env';
const { parseConfig, normalizeMongoUri } = env;

process.env.X12I_USAGE_PORT = '8080';
const result = parseConfig({ server: { port: 'ENV.X12I_USAGE_PORT:port||3000', host: '127.0.0.1' } }, {
  commandLineArgs: false, enableSharedEnv: false,
});
assert.equal(result.errors.length, 0);
assert.equal(result.config.server.port, 8080);
assert.equal(normalizeMongoUri('localhost:27017/demo'), 'mongodb://localhost:27017/demo');
console.log(result.config);
// No environment files, remote settings, or database connections are accessed.
