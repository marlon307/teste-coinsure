function checkUrl(url) {
  if (url === undefined || url === null || url.length < 7) {
    return false;
  }
  return true;
}

module.exports = checkUrl;
