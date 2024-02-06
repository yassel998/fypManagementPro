import express from "express";
import { getFaculties, getPrerequisites } from "../controllers/faculty.js";

const router = express.Router();

router.get("/", getFaculties);
router.get("/prerequisites", getPrerequisites);

export default router;
