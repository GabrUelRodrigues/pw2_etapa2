//#region Declarações
const express = require("express")
const exphbs = require("express-handlebars")
const session = require("express-session")
const FileStore = require("session-file-store")(session)
const flash = require("express-flash")
const app = express()
//#endregion

//#region Setup
app.engine("handlebars", exphbs())
app.set("view engine", "handlebars")
app.use(express.urlencoded({extended:true}))
app.use(express.json())
//#endregion

