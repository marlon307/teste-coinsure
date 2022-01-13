function checkpsw(psw) {
  if (psw === undefined || psw === null || psw.length < 8) {
    return false;
  }
  return true;
}

module.exports = checkpsw;
