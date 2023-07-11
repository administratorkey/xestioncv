/** @typedef {import("express").RequestHandler} Controller */
import { Email } from "./db/models.js";
import { emailValidationJWT, validateEmailJWT } from "./lib/jwt.js";

/** @type {Controller} */
function apiRootController(_, response) {
    console.log("* Depuración de la API Ok! *")
    response.send("API Ok!");
}

/**
 * Body proporciona un objeto { address: {String} }
 * @type {Controller}
 */
async function postEmail(request, response) {
    try {
        const newEmail = await Email.create(request.body);
        const token = emailValidationJWT(newEmail.address);
        console.log("URL validación:", `http://localhost:8000/validate/${token}`);
        response.sendStatus(200);
    } catch (exception) {
        console.error(exception);
        console.log("Esta dirección de correo electrónico ya se encuentra registrada");
        response.sendStatus(409);
    }
}

/** @type {Controller} */
function validateEmail(request, response) {
    const datosJWT = validateEmailJWT(request.params.jwtToken);
    if (datosJWT) {
        const { email } = datosJWT;
        Email.update({ validated: true }, { where: { address: email } })
            .then(() => {
                console.log("Correo electrónico validado:", email);
                response.sendStatus(200);
            })
            .catch((error) => {
                console.log("Error al actualizar el estado de validación:", error);
                response.sendStatus(500);
            });
    } else {
        console.error("Token de correo electrónico inválido");
        response.sendStatus(400);
    }
}

export {
    apiRootController,
    postEmail,
    validateEmail
};
