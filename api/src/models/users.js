import { DataTypes } from "sequelize";
import dataBase from "../config/db.js";
import Assist from "./assist.js";

const Users = dataBase.define(
  "users",
  {
    // code: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    dni: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    timestamps: false
  }
);

Users.hasMany(Assist);
Assist.belongsTo(Users);

// este let seria necesario meterlo en una tabla "en el caso q se apague el servidor mantendra su valor"
let codeCounter = 1000;
Users.beforeBulkCreate((users) => {
  users.forEach((user) => {
    // Generar código de usuario único
    let nameSPlit = user.name
      .split(" ")
      .map((string) => string.slice(0, 2))
      .join("")
      .toUpperCase();
    const code = `${nameSPlit}${codeCounter}`;
    user.code = code;
    console.log(codeCounter);
    codeCounter++;
  });
});

export default Users;
