const { execute } = require("./sqlite-db");

// insert
// update
// delete
// find
// findAll

const insertUser = async (name, email, birthday, age, salary) => {
  const sql = `INSERT INTO users (name, email, birthday, age, salary) VALUES (?, ?, ?, ?, ?);`;
  const values = [name, email, birthday, age, salary];
  await execute(sql, values);
};

module.exports = {
  insertUser,
};
