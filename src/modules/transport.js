const Sequelize = require("sequelize");

module.exports = sequelize.define("transport",{
    id_statie: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
        primaryKey: true,
    },
    statie_plecare: {
        type: Sequelize.STRING(40)},
    statie_sosire: {
        type: Sequelize.STRING(40)}
});