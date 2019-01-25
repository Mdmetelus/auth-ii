exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments();

    tbl.string('username', 255).notNullable().unique();

    tbl.string('password', 355).notNullable().unique();

    tbl.string('department', 128).notNullable();

    tbl.timestamp(true, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists ('users');
};
