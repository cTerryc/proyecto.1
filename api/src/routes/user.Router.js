import { Router } from "express";
import postUser from "../controllers/postUser.js";
import bodyParser from "body-parser";


const users = Router();

users.use(bodyParser.urlencoded({ extended: true }));

users.post("/postUsers", postUser);

export default users;