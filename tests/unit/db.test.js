const db = require('../../src/db/connection');

describe('Database insertion', () => {
  test('insertSubmission should insert without throwing error', async () => {
    await expect(db.insertSubmission('TestUser', 'test@example.com')).resolves.not.toThrow();
  });
});
