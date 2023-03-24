import { DataTypes } from "sequelize";
import dataBase from "../config/db.js";

const Assist = dataBase.define(
  "assist",
  {
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    presente: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    hora: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    tarde: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    timestamps: false,
    indexes: [
      {
        unique: true,
        fields: ["fecha", "userId"],
      },
    ],
  }
);

export default Assist;
