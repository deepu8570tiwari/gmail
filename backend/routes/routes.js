import express from "express";
const routes=express.Router();
import { saveEmailController } from "../controllers/email-controller.js";
routes.post('/save',saveEmailController);
export default routes;