import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "Hello World!" });
});

// CRUD FUNCTIONALITY

// FOR READING
app.get("/students", (req, res) => {});
// FOR CREATE
app.post("/students", (req, res) => {});
// FOR UPDATE
app.put("/students/:id", (req, res) => {});
// FOR DELETE
app.delete("/students/:id", (req, res) => {});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`The server running at http://127.0.0.1:${PORT}`);
});
