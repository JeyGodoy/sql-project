const SQLite = require("sqlite3");
const path = require("path");

const fileDatabase = path.join(__dirname, "db", "database.sqlite");

SQLite.verbose();
const db = new SQLite.Database(fileDatabase);

const callback = (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log("successfully", result);
  }
};

const createTableUser = async () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
    ); 
  `;

  db.run(sql, callback);
};

async function main() {
  await createTableUser();

  // adicionar usuarios

  const sql = `
    INSERT INTO users (name, email) VALUES ('Felipe', 'contato@eufelipe.com');
    `;

  db.run(sql, callback);

  db.close();
}

main();
