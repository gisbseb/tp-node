import express from "express"
import controller from "../controller/render.controller.js"

export default function (app) {
    const router = express.Router()

    router.get('/login', controller.loginRender)
    router.get('/dashboard', controller.dashboardRender)
    router.get('/', controller.registerRender)
    
    app.use('/', router);
}