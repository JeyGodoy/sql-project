const { faker } = require("@faker-js/faker");

const { insertUser } = require("./repositories/sqlite/user-sqlite-repository");
const { createTableUser } = require("./repositories/sqlite/infra");

async function main() {
  // for (let i = 0; i < 100; i++) {
  //   insertUser()
  // }

  const dateFormatter = Intl.DateTimeFormat("sv-SE");

  createTableUser();
  insertUser(
    faker.name.fullName(),
    faker.internet.email(),
    dateFormatter.format(faker.date.past()),
    faker.datatype.number(18, 60),
    faker.commerce.price(1000, 2000)
  );
}

main();
