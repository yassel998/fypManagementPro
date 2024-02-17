import express from "express";
import { getNumberOfHeadsOfDepartment, getNumberOfPendingActivations, getNumberOfProfessors, getNumberOfStudents } from "../controllers/dashboard.js";

const router = express.Router();

//***********************supervisor*****************************/
router.get("/heads-of-department/count", getNumberOfHeadsOfDepartment);
router.get("/professors/count", getNumberOfProfessors);
router.get("/students/count", getNumberOfStudents);
router.get("/pending-activations/count", getNumberOfPendingActivations);

export default router;
