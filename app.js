import express from "express";
import studentRoutes from "./routes/students.route.js";

const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "Hello World!" });
});

// CRUD FUNCTIONALITY

// MIDDLEWARES
app.use("/students", studentRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`The server running at http://127.0.0.1:${PORT}`);
});
