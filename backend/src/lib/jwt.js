import jwt from "jsonwebtoken"

const JWTSubjects = {
    EMAIL_VALIDATION: 0,
    AUTENTIFICATION: 1,
    AUTHORIZATION: 2,
}

/**
 * Emite un JWT para validación de correo electrónico
 * @param {String} email 
 * @returns {String}
 */
function emailValidationJWT(email) {
    const payload = { email }
    const options = {subject: JWTSubjects.EMAIL_VALIDATION}
    return jwt.sign(payload, process.env.JWT_SECRET ?? "JWT_SECRET", options)
}

export {
    emailValidationJWT
}