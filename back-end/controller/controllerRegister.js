const { checkname, checkpsw, checkemail } = require('../middleware');
const serviceCkeckEmail = require('../service/serviceCkeckEmail')

async function controllerRegister(req, res, next) {
  const { name, email, password } = req.body;

  const resultEamil = await serviceCkeckEmail(email);
  if (resultEamil) {
    return res.status(404).json(resultEamil);
  }

  if (!checkname(name) || !checkpsw(password) || !checkemail(email)) {
    return res.status(404).json({
      status: 404,
      message: 'Pending information.',
    });
  }
  next()
}

module.exports = controllerRegister;
