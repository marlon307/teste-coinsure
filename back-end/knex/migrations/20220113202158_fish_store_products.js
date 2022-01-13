exports.up = function (knex) {
  return knex.schema.createTable('fish_store_products', (table) => {
    table.increments('id').primary();
    table.string('url', [250]).notNull();
    table.string('title', [250]).notNull();
    table.decimal('price').notNull();
    table.string('description', [250]).notNull();
  });
};

exports.down = function (knex) {
  knex.schema.dropTable('fish_store_products');
};
