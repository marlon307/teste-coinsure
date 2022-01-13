const { checkpsw, checkemail } = require('../middleware')

function controllerLogin(req, res, next) {
  const { email, password } = req.body;

  console.log(email, password);

  if (!checkemail(email) || !checkpsw(password)) {
    return res.status(404).json({
      status: 404,
      message: 'Pending information.',
    });
  }
  next();
}

module.exports = controllerLogin;
