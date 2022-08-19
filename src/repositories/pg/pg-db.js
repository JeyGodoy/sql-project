const { Pool } = require("pg");

const databaseConfig = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydata",
  port: 5432,
};

const connection = new Pool(databaseConfig);

const execute = async (sql, values) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, function (error, results) {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = { connection, execute };
