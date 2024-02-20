import express from "express";
import { createFacultyMember } from "../controllers/user.js";

const router = express.Router();

router.post("/createMember", createFacultyMember);

export default router;
