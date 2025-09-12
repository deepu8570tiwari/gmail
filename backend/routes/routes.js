import express from "express";

import { saveEmailController, getEmailType,moveEmailToBin, toggleStarredEvent,deleteEmail } from "../controllers/email-controller.js";
const routes=express.Router();
routes.post('/save',saveEmailController);
routes.get('/emails/:type',getEmailType);
routes.post('/save-draft',saveEmailController);
routes.post('/save-bin',moveEmailToBin);
routes.post('/starred',toggleStarredEvent);
routes.post('/delete',deleteEmail);

export default routes;