import express from "express";
import controller from "../controller/user.controller.js";

export default function (app) {
  const router = express.Router();

    router.post('/login', controller.login)
    router.post('/', controller.create)

  app.use("/user", router);
}
