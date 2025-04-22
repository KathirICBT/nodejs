import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "Hello World!" });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`The server running at http://127.0.0.1:${PORT}`);
});
