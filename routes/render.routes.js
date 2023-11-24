import express from "express"
import controller from "../controller/render.controller.js"
import auth from "../middleware/auth.js"

export default function (app) {
  const router = express.Router();

    router.get('/login', controller.loginRender)
    router.get('/dashboard', [auth.verifyToken], controller.dashboardRender)
    router.get('/', controller.registerRender)
    router.get('/logout', (req, res) => {
        req.session.destroy()
        res.redirect('/login')
    })

    app.use('/', router);
}
