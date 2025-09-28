const db = require("../db/db");
const {DataTypes} = require("sequelize");

const Fato = db.define("Fatos", {
    pergunta: {
        type: DataTypes.STRING,
        allowNull: false
    },
    resposta: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Fato