import express from "express";
import controller from "../controller/auth.controller.js";

export default function (app) {
  const router = express.Router();
  router.get("/", controller.renderRegisterForm);
  router.post("/register", controller.register);
  router.get("/connexion", controller.renderLoginForm);
  router.post("/login", controller.authenticate);
  router.get("/dashboard", controller.renderDashboard);
  router.get("/logout", controller.logout);
  app.use("/", router);
}
