const { checkname, checkpsw, checkemail } = require('../middleware');

function controllerRegister(req, res, next) {
  const { name, email, password } = req.body;

  if (!checkname(name) || !checkpsw(password) || !checkemail(email)) {
    return res.status(404).json({
      status: 404,
      message: 'Pending information.',
    });
  }
  next()
}

module.exports = controllerRegister;
