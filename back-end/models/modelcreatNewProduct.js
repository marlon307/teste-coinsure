const knex = require('../knex/connection')

async function creatNewProduct(object) {
  try {
    const [status] = await knex('fish_store_products')
      .insert(object);
    return status;
  } catch (error) {
    console.log(error.message);
    return { status: 500, message: 'Error' }
  }
}

module.exports = creatNewProduct;
