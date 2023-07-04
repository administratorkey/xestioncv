/** @typedef {import("express").RequestHandler} Controller*/
import { Email } from "./db/models.js"
import { emailValidationJWT } from "./lib/jwt.js"

/** @type {Controller} */
function apiRootController(_, response) {
    response.send("API Ok!")
}

/**
 * Body proporciona un objeto { address: {String} }
 * @type {Controller}
 */
function postEmail(request, response) {
    try {
        const newEmail = Email.create(request.body)
        response.sendStatus(200)
        const jwt = emailValidationJWT(request.body.address)
        console.log(`http://localhost:8000/validate/${jwt}`)
    } catch (expception) {
        
    }
}

export {
    apiRootController,
    postEmail
}