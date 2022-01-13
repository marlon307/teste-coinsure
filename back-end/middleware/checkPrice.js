function checkPrice(price) {
  if (price === undefined || price === null || typeof price !== 'number') {
    return false;
  }
  return true;
}

module.exports = checkPrice;
