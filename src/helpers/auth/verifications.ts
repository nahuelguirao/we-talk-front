export const verifyPassword = (password: string) => {
  //Verifies length
  if (password.length < 8) {
    return false;
  }

  //Verifies if at least 1 upper case
  if (!/[A-Z]/.test(password)) {
    return false;
  }

  //Verifies special character
  if (!/[$&+,:;=?@#|'<>.^*()%!-]/.test(password)) {
    return false;
  }

  return true;
};

export const verifyUser = (username: string) => {
  //Verifies length
  if (username.length < 4 || username.length > 50) {
    return false;
  }

  return true;
};

export const verifyEmail = (email: string) => {
  //Verifies length
  if (email.length > 100) {
    return false;
  }

  //Verify is an email
  const passwordRegex =
    /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/;

  if (!passwordRegex.test(email)) {
    return false;
  }

  return true;
};
