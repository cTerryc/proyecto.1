import { DataTypes } from "sequelize";
import dataBase from "../config/db.js";

const Assist = dataBase.define(
  "users",
  {
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    presente: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
  },
  { timestamps: false }
);

export default Assist;
