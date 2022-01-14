const knex = require('../knex/connection')

async function getAllProducts() {
  try {
    const products = await knex.select()
      .table('fish_store_products');
    return products;
  } catch (error) {
    console.log(error.message);
    return { status: 500, message: 'Error' }
  }
}

module.exports = getAllProducts;
