const knex = require('../knex/connection')

async function createUser(object) {
  try {
    const [status] = await knex('fish_store_users')
      .insert(object);
    return status;
  } catch (error) {
    console.log(error.message);
    return { status: 500, message: 'Error' }
  }
}

module.exports = createUser;
