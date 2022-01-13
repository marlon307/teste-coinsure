const { checkname, checkpsw, checkemail } = require('../middleware')

function controllerRegister(req, res, next) {
  const { name, email, psw } = req.body;

  if (checkname(name) && checkpsw(psw) && checkemail(email)) {
    return res.status(200).json({ name, email, psw })
  }
  return res.status(404).json({
    status: 404,
    message: 'Pending information.'
  })
}

module.exports = controllerRegister;
