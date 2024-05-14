export const verifyPassword = (password: string) => {
  if (password.length < 8) {
    return false;
  }

  //Verifies if +1 upper case
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
  if (username.length < 4 || username.length > 50) {
    return false;
  }

  return true;
};

export const verifyEmail = (email: string) => {
  if (email.length > 100) {
    return false;
  }

  //Verify is an email
  if (
    !/^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/.test(
      email
    )
  ) {
    return false;
  }

  return true;
};
