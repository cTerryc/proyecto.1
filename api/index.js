import dataBase from "./src/config/db.js";
import serverHttp from "./src/config/server.js";
import dotenv from "dotenv";
dotenv.config();
// importamos la info de la api
//import apiInfo from "./src/helpers/apiInfo.js"

const index = async () => {
  await dataBase.sync({ force: false })
  serverHttp.listen(3001, () => {
    console.log('Listening on port 3001')
  })
};

index();