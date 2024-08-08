const validadeToken = require('../helpers/validadeToken');

async function validadeTokenMiddleware(req, res, next){
    const token = req.headers.authorization;

    if(!token){
        return res.status(401).send("Token não autorizado");
    }

    const tokenIsValid = await validadeToken(token);
    
    if(!tokenIsValid) {
        return res.status(401).send("Token expirado ou inválido");
    }

    next();
}

module.exports = validadeTokenMiddleware;