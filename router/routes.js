import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("template/register", { title: "Inscription" });
});

router.get("/login", (req, res) => {
  res.render("template/login", { title: "Connexion" });
  1;
});

router.get("/dashboard", (req, res) => {
  res.render("template/dashboard", { title: "Dashboard" });
});

export default router;
