const checkUser = require('../models/modelCheckUser')

async function serviceLoginUser(req, res) {
  const { email, password } = req.body;

  const result = await checkUser({ email, password });

  if (result) {
    return res.status(200).json({
      status: 200,
      message: 'Authorization authentication'
    });
  }

  return res.status(404).json({
    status: 404,
    message: 'User does not exist',
  });
}

module.exports = serviceLoginUser;
