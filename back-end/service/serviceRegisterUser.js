const createUser = require('../models/modelCreatUser')

async function serviceRegisterUser(req, res) {
  const { name, email, password } = req.body;

  const result = await createUser({ name, email, password });

  if (!result.status) {
    return res.status(200).json({
      status: 200,
      message: 'Registered user'
    });
  }
  return res.status(result.status).json(result);
}

module.exports = serviceRegisterUser;
