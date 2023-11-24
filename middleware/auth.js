import jwt from 'jsonwebtoken'

const verifyToken = async (req, res, next) => {
    const token = req.session.user?.token
    if (!token) return res.status(401).send('No token')

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
    } catch (err) {
        return res.status(400).send('Invalid token')
    }
    next()
}

export default { verifyToken }