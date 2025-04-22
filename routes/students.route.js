import express from "express";
import {
  StudentCreate,
  StudentDelete,
  StudentIndex,
  StudentUpdate,
} from "../controllers/students.controller.js";

const router = express.Router();

// READ
router.get("/", StudentIndex);

// CREATE
router.post("/", StudentCreate);

// UPDATE
router.put("/:id", StudentUpdate);

// DELETE
router.delete("/:id", StudentDelete);

export default router;
