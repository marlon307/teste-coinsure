function checkDescription(description) {
  if (description === undefined || description === null || description.length < 30) {
    return false;
  }
  return true;
}

module.exports = checkDescription;
