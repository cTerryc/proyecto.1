import Assist from "../models/assist.js";
import Users from "../models/users.js";

export function createAssist({ fecha, presente, code, hora }) {
  let tarde;
  if (hora > "08:00:00") {
    tarde = true
  }
  let findUserCode = Users.findOne({ where: { code: code } })
    .then((data) => {
      let userId = data.dataValues.id;
      return userId;
    })
    .then((userId) => {
      let creatingAssist = Assist.create({ fecha, presente, userId, hora, tarde });
      console.log(creatingAssist)
      return creatingAssist;
    })
    .then((data)=> {
      console.log(data.dataValues.id)
      let assist = Assist.findOne({
        where: {id: data.dataValues.id},
        include: [
          {
            model: Users,
            attributes: ["code"]
          }
        ]
      })
      return assist;
    })
    console.log(findUserCode)
    return findUserCode;
}
