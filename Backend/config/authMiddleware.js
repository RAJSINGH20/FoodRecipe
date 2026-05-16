import jwt from 'jsonwebtoken'

export const isAuthenticated = async (req, res, next) => {

    try {

        const token = req.headers.authorization
        console.log(token)

        if (!token) {
            return res.status(401).json({
                message: 'Please login first'
            })
        }

        const decoded = jwt.verify(token, 'SECRET_KEY')

        req.user = decoded

        next()

    } catch (error) {

        res.status(401).json({
            message: 'Invalid Token'
        })
    }
}