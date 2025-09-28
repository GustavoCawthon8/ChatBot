const db = require("../db/db");
const {DataTypes} = require("sequelize");

const Fato = db.define("Fatos", {
    pergunta: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    resposta: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})

module.exports = Fato