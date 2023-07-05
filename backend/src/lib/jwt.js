import jwt from "jsonwebtoken"

const JWTSubjects = {
    EMAIL_VALIDATION: "email-validation",
    AUTENTIFICATION: "user-autentification",
    AUTHORIZATION: "user-authorization",
}

/**
 * Emite un JWT para validación de correo electrónico
 * @param {String} email 
 * @returns {String}
 */
function emailValidationJWT(email) {
    try {
        const payload = { email }
        const secret = process.env.JWT_SECRET ?? "JWT_SECRET"
        const options = { subject: JWTSubjects.EMAIL_VALIDATION, }
        const token = jwt.sign(payload, secret, options)
        return token
    } catch (expception) {
        console.error(expception);
    }
}

export {
    emailValidationJWT
}