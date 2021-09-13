export function doPasswordsMatch(p1, p2) {
  if (p1 === p2) return true;
  return false;
}

export function verifyEmail(email) {
  const emailValidationRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailValidationRegex.test(String(email).toLowerCase());
}
