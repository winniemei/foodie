const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../secrets');

const authRequired = (req, res, next) => {
    const token = req.signedCookies.token;
    console.log('Cookie token:', token);
    try {
        jwt.verify(token, JWT_SECRET);
    } catch (error) {
        req.status(401).send({
            loggedIn: false,
            message: 'You are not authorized.'
        })
        return;
    }
    next();
}

module.exports = { authRequired }