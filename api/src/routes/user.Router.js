import { Router } from "express";
import { postUser, getAllUsers, getUserById } from "../controllers/users.controllers.js";
import bodyParser from "body-parser";

const users = Router();

users.use(bodyParser.urlencoded({ extended: true }));

users.post("/", postUser);
users.get("/", getAllUsers);
users.get("/code/:code", getUserById)

export default users;
