const SQLite = require("sqlite3");
const path = require("path");
const fileDatabase = path.join(__dirname, "..", "db", "database.sqlite");

SQLite.verbose();
const db = new SQLite.Database(fileDatabase);

// setup da tabela
// insert
// update
// delete
// find
// findAll

const execute = async (sql, values) => {
  return new Promise((resolve, reject) => {
    db.run(sql, values, function (error, results) {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

const createTableUser = async () => {
  const sql = `
      CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name VARCHAR(255) NOT NULL,
          birthday DATE NOT NULL,
          email VARCHAR(255) NOT NULL,
          age INTEGER NOT NULL,
          salary REAL NOT NULL
      ); 
    `;
  await execute(sql);
};

const insertUser = async (name, email, birthday, age, salary) => {
  const sql = `INSERT INTO users (name, email, birthday, age, salary) VALUES (?, ?, ?, ?, ?);`;
  const values = [name, email, birthday, age, salary];
  await execute(sql, values);
};

const closeDb = () => db.close();

module.exports = {
  createTableUser,
  insertUser,
  closeDb,
};
