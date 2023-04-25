const express = require("express")
const path = require("path")

const app = express()
const port = 3000
const basePath = path.join(__dirname, "templates")

var checkAuth = function(req, res, next){
    req.authStatus = true
    if (req.authStatus) {
        console.log("Acesso autorizado!")
        next()
    }
    else{
        console.log("Acesso negado, faça login para continuar!")
    }
}

app.use(checkAuth)

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}.`)
})

app.get("/", (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.get("/user/:id", (req, res) => {
    let emailUser = `${req.params.id}@gmail.com`
    console.log(`Parâmetro de usuário: ${emailUser}`)
    res.sendFile(`${basePath}/user.html`)
})