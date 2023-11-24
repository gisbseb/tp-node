import crypto from "crypto";
import dotenv from "dotenv";
import { User } from "../model/user.model.js";
dotenv.config();

const renderRegisterForm = (req, res) => {
  res.render("template/register", { title: "Inscription" });
};

const renderLoginForm = (req, res) => {
  res.render("template/login", { title: "Connexion" });
};

const renderDashboard = async (req, res) => {
  const username = "Seb";
  res.render("template/dashboard.pug", { title: `dashboard ${username}` });
};

const register = async (req, res) => {
  const { email, password, lastName, firstName } = req.body;

  const sha256Hasher = crypto.createHmac("sha256", process.env.SECRET_HASH);

  const hashedPwd = sha256Hasher.update(password).digest("hex");
  await User.create({
    email,
    password: hashedPwd,
    lastName,
    firstName,
  });

  const foundUser = await User.findOne({}, {});

  res.redirect("/connexion");
};

const authenticate = async (req, res) => {
  const { email, password } = req.body;
  const sha256Hasher = crypto.createHmac("sha256", process.env.SECRET_HASH);
  const hashedPwd = sha256Hasher.update(password).digest("hex");
  res.redirect("/dashboard");
};

const logout = (req, res) => {
  res.redirect("/");
};

export default {
  renderLoginForm,
  authenticate,
  renderDashboard,
  renderRegisterForm,
  logout,
  register,
};
