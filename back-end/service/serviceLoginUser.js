const checkEmail = require('../models/modelEmailExist');
const { decrypt } = require('../middleware/encrypt')

async function serviceLoginUser(req, res) {
  try {
    const { email, password } = req.body;

    const result = await checkEmail({ email });
    const decryptPsw = decrypt(result.password);

    if (result.email === email && decryptPsw === password) {
      return res.status(200).json({
        status: 200,
        message: 'Authorization authentication'
      });
    }

    return res.status(404).json({
      status: 404,
      message: 'User does not exist',
    });
  } catch (error) {
    return res.status(404).json({
      status: 404,
      message: 'User does not exist',
    });
  }
}

module.exports = serviceLoginUser;
