import { createUser, findAllUsers } from "../helpers/createUser.helper.js";

export async function postUser(req, res) {
  try {
    const usuario = req.body;
    let createFromBody = await createUser(usuario);
    res.status(200).json(createFromBody);
  } catch (error) {
    console.log("error")
    res.status(400).json(error.message);
  }
}

export async function getUser(req, res) {
  try {
    const promiseAllUsers = await findAllUsers();
    res.status(200).json(promiseAllUsers);
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
}
