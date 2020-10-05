const levelup = require("levelup");
const leveldown = require("leveldown");

const db = levelup(leveldown("./data"));

const operations = [
  { type: "put", key: "forename", value: "Beth" },
  { type: "put", key: "surname", value: "Griggs" },
];

db.batch(operations, function (err) {
  if (err) return console.error(err);
  console.log("Batch operations complete.");
});
