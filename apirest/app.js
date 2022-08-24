/** packages */
const express = require("express")
const config = require("config")
const bodyParser = require("body-parser")
const cors = require('cors')

/** app configuration */
const app = express()
const port = config.get("server-port")
const jsonParser = bodyParser.json()
const urlEncodedParser = bodyParser.urlencoded(
    { extended: true }
)

app.use(cors())

app.use(jsonParser)
app.use(urlEncodedParser)

const ipFn = require("./middleware/getIpAddress")
app.use("*", ipFn)

/** methods */
app.get("/", (req, res, next) => {
    res.send("Welcome to user register")
})

// user routes
const userRoutes = require("./routes/user.route")
userRoutes(app)


app.listen(port, () => {
    console.log("server is running...")
})