const express = require("express");
const router = express.Router();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(router);

router.get("/", (req, res) => {
  res.send("HTTP GET /");
});

router.post("/", (req, res) => {
  res.send("HTTP POST /");
});

router.put("/", (req, res) => {
  res.send("HTTP PUT /");
});

router.delete("/", (req, res) => {
  res.send("HTTP DELETE /");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
