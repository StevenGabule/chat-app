const jwt = require('jsonwebtoken')
const config = require('../config/app')

exports.auth = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({error: "Missing token or no token available"});
    }

    jwt.verify(token, config.appKey, (err, user) => {
        if (err) return res.status(401).json({err})

        req.user = user
    })

    next();
}
