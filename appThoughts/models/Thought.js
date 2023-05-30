const { DataTypes } = require("sequelize")
const db = require("../db/conn")
const User = require("../models/User")

const Thought = db.define("THOUGHT", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

Thought.belongsTo(User) //Pensamento.pertenceAo(Usuário)
User.hasMany(Thought) //Usuário.temVários(Pensamentos)

module.exports = Thought