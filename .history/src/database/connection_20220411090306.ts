import knex from "knex";
import configuration from "../../knexfile";

const config = knex(configuration["development"]);
