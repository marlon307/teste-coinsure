exports.up = function (knex) {
  return knex.schema.createTable('fish_store_users', (table) => {
    table.increments('id').primary();
    table.string('name', [250]).notNull();
    table.string('email', [250]).notNull();
    table.string('password', [250]).notNull();
  });
};

exports.down = function (knex) {
  knex.schema.dropTable('fish_store_users');
};
