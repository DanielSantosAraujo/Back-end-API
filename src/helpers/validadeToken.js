const jwt = require('jsonwebtoken');
const dotEnv = require('dotenv');
dotEnv.config();

const jwtSecret = process.env.JWT_SECRET;

async function validadeToken(token) {
    const tokenSplit = token.split(' ')[1];
    try {
        jwt.verify(tokenSplit, jwtSecret);
        return true;
    } catch (error) {
        return false;
    }
}

module.exports = validadeToken;