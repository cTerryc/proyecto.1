import createUser from "../helpers/createUser.helper.js"

export default async function postUser(req, res) {
    try {
        const usuario = req.body;
        await createUser(usuario);
        res.status(200).json(usuario);
    } catch (error) {
        res.status(400).json(error.message)
    };
}