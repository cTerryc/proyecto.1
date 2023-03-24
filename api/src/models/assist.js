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
