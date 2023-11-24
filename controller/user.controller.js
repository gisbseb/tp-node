import { User } from "../model/user.model.js";
import crypto from "crypto";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config;
const login = async (req, res) => {
  const { email, password } = req.body;
  const sha256Hasher = crypto.createHmac("sha256", process.env.SECRET_HASH);
  const hashedPwd = sha256Hasher.update(password).digest("hex");

  let existingUser = await User.findOne({ email, password: hashedPwd });
  if (!existingUser) {
    return res.redirect("/login", 403, {
      message: "Invalid credentials",
    });
  }

  if (!existingUser.token) {
    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    existingUser.token = token;
    await existingUser.save();
  } else {
    jwt.verify(
      existingUser.token,
      process.env.JWT_SECRET,
      async (err, decoded) => {
        if (err) {
          const token = jwt.sign({ email }, process.env.JWT_SECRET);
          existingUser.token = token;
          await existingUser.save();
        }
      }
    );
  }

  req.session.user = existingUser;

  return res.redirect("/dashboard", 200, {
    message: "Welcome " + existingUser.firstName,
    token: existingUser.token,
  });
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
      req.session.flash = {
        class: "failed",
        message: "L'utilisateur existe déja",
      };
      return res.redirect("/");
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
