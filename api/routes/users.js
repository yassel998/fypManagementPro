import express from "express";
import { createFacultyMember, getAllHeadsOfDepartments } from "../controllers/user.js";

const router = express.Router();

router.post("/createMember", createFacultyMember);
router.get("/allChefDep", getAllHeadsOfDepartments);

export default router;
