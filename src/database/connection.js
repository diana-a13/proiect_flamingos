const Sequelize = require("sequelize"); //main fraimwork
const sequelize = new Sequelize("FlamingosDB", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = sequelize;
global.sequelize = sequelize;