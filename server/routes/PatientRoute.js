import express from "express";
import * as patientControl from "../controllers/PatientControllers";
import patientInfos from "../models/Patient"

const patientRouter = express.Router();



patientRouter.route("/")
                    .post(patientControl.createPatient)
                    .get(patientControl.getAllPatient)
 patientRouter.route("/:id") 
                    .get(patientControl.getPatient)
                    .patch(patientControl.updatePatient)
                    .delete(patientControl.deletePatient)

export default patientRouter;
