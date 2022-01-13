const { checkname, checkpsw, checkemail } = require('../middleware')

function controllerLogin(req, res, next) {
  const { name, email, psw } = req.body;

  if (checkemail(email) && checkpsw(psw)) {
    return res.status(200).json({
      email,
      psw
    })
  }
  return res.status(404).json({
    status: 404,
    message: 'Pending information.'
  })
}

module.exports = controllerLogin;
