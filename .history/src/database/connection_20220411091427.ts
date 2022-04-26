import knex from "knex";
import configuration from "../../knexfile.js";

const connection = knex(configuration["development"]);

module.exports = connection;
