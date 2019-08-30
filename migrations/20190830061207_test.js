exports.up = function(knex) {
  return knex.schema.createTable('todo', tbl => {
    tbl.increments();
    tbl.string('todo', 255).notNullable();
    tbl.boolean('completed').defaultTo('false');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('todo');
};
