function checkDescription(description) {
  if (description === undefined || description === null || description.length < 15) {
    return false;
  }
  return true;
}

module.exports = checkDescription;
