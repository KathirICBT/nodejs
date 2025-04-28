import express from "express";
import studentRoutes from "./routes/students.route.js";
import db_con from "./lib/db.js";

const app = express();
const PORT = 3000;

// Data middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DB CONNECTION =============
db_con();

app.get("/", (req, res) => {
  res.json({ msg: "Hello World!" });
});

// CRUD FUNCTIONALITY

// MIDDLEWARES
app.use("/students", studentRoutes);

app.listen(PORT, () => {
  console.log(`The server running at http://127.0.0.1:${PORT}`);
});
