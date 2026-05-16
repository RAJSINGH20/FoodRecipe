import jwt from 'jsonwebtoken'

export const isAuthenticated = async (req, res, next) => {

    try {

        const authHeader = req.headers.authorization

        console.log(authHeader)

        if (!authHeader) {
            return res.status(401).json({
                message: 'Please login first'
            })
        }

        // Bearer token split
        const token = authHeader.split(' ')[1]

        const decoded = jwt.verify(token, 'SECRET_KEY')

        req.user = decoded

        next()

    } catch (error) {

        console.log(error)

        res.status(401).json({
            message: 'Invalid Token'
        })
    }
}