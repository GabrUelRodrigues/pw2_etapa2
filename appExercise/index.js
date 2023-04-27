const express = require("express")
const path = require("path")

const app = express()
const port = 3000
const basePath = path.join(__dirname, "templates")

app.use(
    express.urlencoded({
        extended : true
    })
)

app.use(express.json())

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}.`)
})

app.get("/", (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.get("/users/add", (req, res) => {
    res.sendFile(`${basePath}/userForm.html`)
})

app.post("/users/save", (req, res) => {
    let name = req.body.name
    let age = req.body.age

    console.log(`Nome do Usuário: ${name}, Idade: ${age}.`)
    res.sendFile(`${basePath}/index.html`)
})