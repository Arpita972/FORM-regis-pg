const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "arpita123",
  database: "form",
});

module.exports = client;
