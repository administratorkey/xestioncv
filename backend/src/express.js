import express from "express"
import cors from "cors"
import { apiRootController, postEmail } from "./controllers.js"

const app = express()
app.use(cors())

app.get("/", apiRootController)
app.post("/email/", express.json(), postEmail)

export default app