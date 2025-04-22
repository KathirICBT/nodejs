import express from "express";

const router = express.Router();

// FOR READING
router.get("/", (req, res) => {
  res.send("Get All Students");
});
// FOR CREATE
router.post("/", (req, res) => {
  res.send("Add a new student");
});
// FOR UPDATE
router.put("/:id", (req, res) => {
  res.send("Update a student");
});
// FOR DELETE
router.delete("/:id", (req, res) => {
  res.send("Delete a Student");
});

export default router;
