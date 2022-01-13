const createUser = require('../models/modelCreatUser')

async function serviceRegisterUser() {
  const obj = {
    name: "marlon",
    email: "email@email.com",
    password: "12345678"
  }
  const result = await createUser(obj);
}

module.exports = serviceRegisterUser;
