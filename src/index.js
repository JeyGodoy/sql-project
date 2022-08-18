const { faker } = require("@faker-js/faker");

const {
  createTableUser,
  insertUser,
  closeDb,
} = require("./repositories/user-sqlite-repository");

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

  closeDb();
}

main();
