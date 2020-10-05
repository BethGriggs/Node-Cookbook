const redis = require("redis");
const client = redis.createClient();

client.on("error", (err) => {
  console.log("Error:", err);
});

client
  .multi()
  .hmset("Task:3", { task: "Write a letter." })
  .hmset("Task:4", { task: "Bake a cake." })
  .exec((err, replies) => {
    if (err) throw err;
    if (replies[0] === "OK") {
      console.log("Batch command complete.");
      client.quit();
    }
  });
