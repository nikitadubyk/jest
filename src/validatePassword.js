export const validatePassword = (password) => {
  if (password.length < 8) {
    return false;
  }

  if (!/[a-z]/.test(password) & !/[A-Z]/.test(password)) {
    return false;
  }

  if (!/[0-9]/.test(password)) {
    return false;
  }

  if (!/[^A-Za-z0-9]/.test(password)) {
    return false;
  }

  return true;
};
