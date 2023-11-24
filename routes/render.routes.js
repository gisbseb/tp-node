import express from "express"

export default function (app) {
    const router = express.Router()

    router.get("/", (req, res) => {
        res.render("template/register", { title: "Inscription" });
    });

    router.get("/login", (req, res) => {
        res.render("template/login", { title: "Connexion" });
    });

    router.get("/dashboard", (req, res) => {
        res.render("template/dashboard", { title: "Dashboard" });
    });


    app.use('/', router);
}