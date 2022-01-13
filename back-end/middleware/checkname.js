function checkname(name) {
  if (name === undefined || name === null || name.length < 4) {
    return false;
  }
  return true;
}

module.exports = checkname;
