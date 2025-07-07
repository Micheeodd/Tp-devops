function validateForm(name, email) {
  if (!name || !email) return false;
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

describe('Form validation', () => {
  test('should pass with valid name and email', () => {
    expect(validateForm('Alice', 'alice@example.com')).toBe(true);
  });

  test('should fail with empty name', () => {
    expect(validateForm('', 'alice@example.com')).toBe(false);
  });

  test('should fail with invalid email', () => {
    expect(validateForm('Alice', 'not-an-email')).toBe(false);
  });
});
