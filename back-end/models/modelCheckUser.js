const knex = require('../knex/connection')

async function modelCheckUser({ email, password }) {
  try {
    const status = await knex.select(['email', 'password'])
      .where({ email, password })
      .table('fish_store_users')
      .first();

    return status;
  } catch (error) {
    console.log(error.message);
    return { status: 500, message: 'Error' }
  }
}

module.exports = modelCheckUser;
