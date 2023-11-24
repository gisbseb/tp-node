import { User } from "../model/user.model.js";
import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();

const login = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  const sha256Hasher = crypto.createHmac("sha256", process.env.SECRET_HASH);
  const hashedPwd = sha256Hasher.update(password).digest("hex");

  let existingUser = await User.findOne({ email, password: hashedPwd });
  if (!existingUser) {
    return res.status(401).send({
      message: "Invalid credentials",
    });
  }

  return res.redirect("/dashboard");
};
const find = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving users.",
    });
  }
};
const create = async (req, res) => {
  try {
    const { email, password, lastName, firstName } = req.body;

    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).send({
        message: "User already exists",
      });
    }

    const sha256Hasher = crypto.createHmac("sha256", process.env.SECRET_HASH);
    const hashedPwd = sha256Hasher.update(password).digest("hex");
    await User.create({
      email,
      password: hashedPwd,
      lastName,
      firstName,
    });

    res.redirect("/login");
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the User.",
    });
  }
};
const update = async (req, res) => {};
const remove = async (req, res) => {};

export default { login, find, create, update, remove };
