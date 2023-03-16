import { DataTypes } from "sequelize";
import dataBase from "../config/db.js";
import Assist from "./assist.js";

const Users = dataBase.define(
  "users",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      presente: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
  },
  { timestamps: false }
);
Users.hasMany(Assist);
Assist.belongsTo(Users);

export default Users;
