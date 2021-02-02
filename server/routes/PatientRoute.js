import express from "express";
import * as patientControl from "../controllers/PatientControllers";

const patientRouter = express.Router();

patientRouter.post("/create",patientControl.createPatient);
patientRouter.get("/read/:id",patientControl.getPatient);
patientRouter.post("/edit/:id",patientControl.updatePatient)
patientRouter.delete("/delete/:id",patientControl.deletePatient)
patientRouter.get("/getAll",patientControl.getAllPatient)
export default patientRouter;
