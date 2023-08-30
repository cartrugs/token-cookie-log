// jwt.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.SECRET_KEY;

const createToken = (payload) => {
    return jwt.sign(payload, secretKey, { expiresIn: '1m' });
};

const verifyToken = (token) => {
    try {
        return jwt.verify(token, secretKey);
    } catch (error) {
        return null;
    }
};

module.exports = { createToken, verifyToken };
