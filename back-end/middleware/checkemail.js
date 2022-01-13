function checkemail(email) {
  const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/igm;

  if (email === undefined || email === '' || email === null || !validEmail.test(email)) {
    return false;
  }
  return true;
}

module.exports = checkemail;
