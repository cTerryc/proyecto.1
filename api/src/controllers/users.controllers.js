import { createUser, findAllUsers, userById } from "../helpers/users.helpers.js";

export async function postUser(req, res) {
  try {
    const usuario = req.body;
    let createFromBody = await createUser(usuario);
    res.status(200).json(createFromBody);
  } catch (error) {
    console.log("error");
    res.status(400).json(error.message);
  }
}

export async function getAllUsers(req, res) {
  try {
    const promiseAllUsers = await findAllUsers();
    res.status(200).json(promiseAllUsers);
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
}

export async function getUserById(req, res) {
  console.log("entro a getUserById")
  let { code } = req.params;
  console.log("esto es code", code)
  try {
    let user = await userById(code)
    // console.log(user)
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
}
