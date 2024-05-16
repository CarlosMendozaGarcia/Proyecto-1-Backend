const jwt = require("jsonwebtoken")
const secretkey= process.env.SECRET_KEY

function throwCustomError(code, msg) {
    throw new Error(JSON.stringify({code, msg}));
}

function respondWithError(res, e) {
    const err = JSON.parse(e.message);
    res.status(err.code).json({
        mensaje: "Fallido. ✌",
        err: err.msg,
    })
}

function generarToken(payload){
    return jwt.sign(payload, secretkey, {expiresIn:"10 days"})
}

module.exports = {
    throwCustomError,
    respondWithError
}

