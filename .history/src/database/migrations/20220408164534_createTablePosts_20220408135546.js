/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("Posts", (table) => {
    table.increments();
    table.string("post_id").notNullable();
    table.string("post_name").notNullable();
    table.string("post_description").notNullable();
    table.string("specific_game").notNullable();
    table.foreign("post_id").references("id").inTable("Users");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("Posts");
};
