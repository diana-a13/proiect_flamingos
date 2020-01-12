const Sequelize = require("sequelize");

module.exports = sequelize.define("user",{
     id: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nume: {
        type: Sequelize.STRING(30),
        allowNull: false,
    },
    parola: {
        type: Sequelize.STRING(30),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING(30),
        allowNull: false,
    }
});  