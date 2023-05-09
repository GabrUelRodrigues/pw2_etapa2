const express = require("express");
const path = require("path")
const fs = require("fs")
const router = express.Router();
const basePath = path.join(__dirname, "../templates")

router.get("/add", (req, res) => {
    res.sendFile(`${basePath}/userForm.html`)
})

router.post("/save", (req, res) => {
    let name = req.body.name
    let age = req.body.age

    console.log(`Nome do Usuário: ${name}, Idade: ${age}.`)

    if (!fs.existsSync("accounts")) {
        fs.mkdirSync("accounts")
    }

    if (fs.existsSync(`accounts/${name}.json`)) {
        console.log("Usuário já cadastrado!")
        res.status(409).sendFile(`${basePath}/error.html`) //409 - Conflict
        return
    }

    fs.writeFileSync(
        `accounts/${name}.json`,
        `{"name":"${name}", "age":${age}}`,
        function (err){
            console.error(err)
        }
    )

    res.status(201).sendFile(`${basePath}/userForm.html`) //201 - Created
    console.log("Cadastro efetuado!")
})

module.exports = router