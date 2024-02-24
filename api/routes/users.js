import express from "express";
import {
  changeUserRole,
  createFacultyMember,
  deleteUser,
  getAllHeadsOfDepartments,
} from "../controllers/user.js";

const router = express.Router();

router.post("/createMember", createFacultyMember);
router.get("/allUsers", getAllHeadsOfDepartments);
router.put("/changeRole", changeUserRole);
router.delete("/deleteUser/:id", deleteUser);

export default router;
