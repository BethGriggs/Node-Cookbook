const levelup = require("levelup");
const leveldown = require("leveldown");

const db = levelup(leveldown("./data"));

db.batch()
  .put("forename", "Beth")
  .put("surname", "Griggs")
  .write(() => console.log("Batch operations complete."));
