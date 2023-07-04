/**  @typedef {import("../defines").Email} */
import { db, Email } from "../db/models.js";


/** @type {Email[]} */
const emails = [
    { 
        address: "prueba1@dominio.es",
        disabled: false,
        verified: false
    },
    { 
        address: "prueba2@dominio.es",
        disabled: false,
        verified: true
    },
    { 
        address: "prueba3@dominio.es",
        disabled: true,
        verified: true
    }
]

await db.sync()

Email.bulkCreate(emails)