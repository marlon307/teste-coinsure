const knex = require('../knex/connection')

async function modelEmailExist({ email }) {
  try {
    const status = await knex.select(['email', 'password'])
      .where({ email })
      .table('fish_store_users')
      .first();
    return status;
  } catch (error) {
    console.log(error.message);
    return { status: 500, message: 'Error' }
  }
}

module.exports = modelEmailExist;
