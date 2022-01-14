const {
  checkPrice,
  checkTitle,
  checkDescription,
  checkUrl,
} = require('../middleware')

function controllerLogin(req, res, next) {
  const { title, price, description } = JSON.parse(req.body.object);
  if (!checkUrl(req.file.path) || !checkTitle(title) || !checkPrice(Number(price)) || !checkDescription(description)) {
    return res.status(404).json({
      status: 404,
      message: 'Pending information.',
    });
  }
  next();
}

module.exports = controllerLogin;
