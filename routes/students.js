import express from "express";
import {
  getStudent,
  getStudents,
  deletestudent,
  addstudent,
  updatestudent,
} from "../controllers/students.js";
const router = express.Router();

router.get("/", getStudents);

router.get("/:id", getStudent);

router.delete("/:id", deletestudent);

router.post("/", addstudent);

router.patch("/:id", updatestudent);

export default router;
