require("dotenv").config()
import app from "./app"

const port = process.env.PORT

app.listen(port, () => console.log("Servidor corriendo en puerto", port))