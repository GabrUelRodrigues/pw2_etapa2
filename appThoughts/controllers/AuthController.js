const User = require("../models/User")
const bcrypt = require("bcryptjs")

module.exports = class UserController{
    static login(req, res){
        res.render("auth/login")
    }
    
    static async loginPost(req, res){
        const {email, password} = req.body
    }

    static async registerPost(req, res){
        const {name, email, password, configmPassword} = req.body

        if (password != confirmPassword) {
            req.flash("message", "As senhas não correspondem!")
            res.render("auth/register")

            return
        }

        const checkIfUserExists = await User.findOne({where: {email: email}})

        if (checkIfUserExists) {
            req.flash("message", "Esse email já está cadastrado!")
            res.render("auth/register")

            return
        }
    }
}