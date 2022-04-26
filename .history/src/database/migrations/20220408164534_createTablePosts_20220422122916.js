/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("Posts", (table) => {
    table.string("post_id").notNullable();
    table.string("post_name").notNullable();
    table.string("post_description").notNullable();
    table.string("specific_game").notNullable();
    table.string("user_id").references("id").inTable("Users");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("Posts");
};
