import jwt from 'jsonwebtoken'
import renderController from '../controller/render.controller.js';

const verifyToken = async (req, res, next) => {
    const token = req.session.user?.token
    if (!token) {
        req.session.flash = {
            class: "failed",
            message: "Vous n'êtes pas connecté",
        };
        renderController.loginRender(req, res)
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded;
        next()
    } catch (err) {
        req.session.flash = {
            class: "failed",
            message: "Token invalide",
        };
        renderController.loginRender(req, res)
    }
}

export default { verifyToken }