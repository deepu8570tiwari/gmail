import express from "express";

import { saveEmailController, getEmailType } from "../controllers/email-controller.js";
const routes=express.Router();
routes.post('/save',saveEmailController);
routes.get('/emails/:type',getEmailType);
routes.post('/save-draft',saveEmailController);

export default routes;