import { User } from "../model/user.model.js";

export const find = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving users.",
    });
  }
};
export const create = async (req, res) => {};
export const update = async (req, res) => {};
export const remove = async (req, res) => {};

export default { find, create, update, remove };
