import { postAssist } from "../controllers/assist.controllers.js";
import { Router } from "express";

const assist = Router();

assist.post("/", postAssist);

export default assist;
