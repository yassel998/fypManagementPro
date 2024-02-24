import express from "express";
import {
  changeUserRole,
  createFacultyMember,
  getAllHeadsOfDepartments,
} from "../controllers/user.js";

const router = express.Router();

router.post("/createMember", createFacultyMember);
router.get("/allUsers", getAllHeadsOfDepartments);
router.put("/changeRole", changeUserRole);

export default router;
