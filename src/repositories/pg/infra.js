const { execute } = require("./pg-db");

const createTableUser = async () => {
  const sql = `
      CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          birthday DATE NOT NULL,
          email VARCHAR(255) NOT NULL,
          age INTEGER NOT NULL,
          salary REAL NOT NULL
      ); 
    `;
  await execute(sql);
};

module.exports = {
  createTableUser,
};
