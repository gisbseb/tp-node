import express from "express"
import controller from "../controller/user.controller.js"

export default function(app) {
    const router = express.Router()

    router.post('/login', controller.login)
    router.get('/', controller.find)
    router.post('/', controller.create)
    router.put('/:id', controller.update)
    router.delete('/:id', controller.remove)

    app.use('/user', router);
}