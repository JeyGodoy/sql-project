const { execute } = require("./pg-db");

const insertUser = async (name, email, birthday, age, salary) => {
  const sql = `
  INSERT INTO users (name, email, birthday, age, salary) 
  VALUES ($1, $2, $3, $4, $5);`;

  const values = [name, email, birthday, age, salary];
  await execute(sql, values);
};

module.exports = {
  insertUser,
};
