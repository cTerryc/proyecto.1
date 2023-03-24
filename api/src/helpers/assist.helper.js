import Assist from "../models/assist.js";
import Users from "../models/users.js";

export function createAssist({ fecha, presente, code }) {
  let findUserCode = Users.findOne({ where: { code: code } })
    .then((data) => {
      let userId = data.dataValues.id;
      return userId;
    })
    .then((userId) => {
      let creatingAssist = Assist.create({ fecha, presente, userId });
      return creatingAssist;
    });
    console.log(findUserCode)
    return findUserCode;
}
