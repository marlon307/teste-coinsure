const modelEmailExist = require('../models/modelEmailExist')

async function serviceCkeckEmail(email) {
  const result = await modelEmailExist({ email });

  if (result) {
    return {
      status: 409,
      message: 'User already registered'
    };
  }
}

module.exports = serviceCkeckEmail;
