import { createAssist } from "../helpers/assist.helper.js";

export async function postAssist(req, res) {
  let dataFromBody = req.body;
  try {
    let promisAssist = await createAssist(dataFromBody);
    res.status(200).json(promisAssist);
  } catch (error) {
    res.status(400).send({ err: error.message });
  }
}
