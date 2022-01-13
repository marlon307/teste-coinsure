const knex = require('../knex/connection')


async function createUser(object) {
  const result = await knex('fish_store_users').insert(object);
  return result;
}

module.exports = createUser;
