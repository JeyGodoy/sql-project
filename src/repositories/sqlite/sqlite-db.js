const SQLite = require("sqlite3");
const path = require("path");
const fileDatabase = path.join(__dirname, "..", "..", "db", "database.sqlite");

SQLite.verbose();
const db = new SQLite.Database(fileDatabase);

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

const closeDb = () => db.close();

module.exports = {
  db,
  execute,
  closeDb,
};
