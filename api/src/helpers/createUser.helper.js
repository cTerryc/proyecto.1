import Users from "../models/users.js";
import { usersGenerate } from "../generadorDeDatos.js";

export default async function createUser({ name, email, password }) {
  // console.log("esto es hasgoogle",hashgoogle)
  let creatingUser;
  if (!name) {
    let verifyUserExist = await Users.findAll();
    if (!verifyUserExist.length) {
      creatingUser = await Users.create({
        name,
        email,
        password,
      });
    }
  } else {
    creatingUser = await Users.create({
      name,
      email,
      password,
    });
  }
  return creatingUser;
}
