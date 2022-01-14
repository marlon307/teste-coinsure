function checkTitle(title) {
  if (title === undefined || title === null || title.length <= 8) {
    return false;
  }
  return true;
}

module.exports = checkTitle;
