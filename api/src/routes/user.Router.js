import { Router } from "express";
import { postUser, getUser } from "../controllers/postUser.js";
import bodyParser from "body-parser";

const users = Router();

users.use(bodyParser.urlencoded({ extended: true }));

users.post("/", postUser);
users.get("/", getUser);

export default users;
