const {
  checkPrice,
  checkTitle,
  checkDescription,
  checkUrl,
} = require('../middleware')

function controllerLogin(req, res, next) {
  const { url, title, price, description } = req.body;

  if (!checkUrl(url) || !checkTitle(title) || !checkPrice(price) || !checkDescription(description)) {
    return res.status(404).json({
      status: 404,
      message: 'Pending information.',
    });
  }
  next();
}

module.exports = controllerLogin;
