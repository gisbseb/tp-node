import { User } from "../model/user.model.js";


const login = async (req, res) => { };
const find = async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    }
};
const create = async (req, res) => { };
const update = async (req, res) => { };
const remove = async (req, res) => { };

export default { login, find, create, update, remove };
