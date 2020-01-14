const Sequelize = require("sequelize"); //main fraimwork
const sequelize = new Sequelize("FlamingosDB", "root", "", {
    host: "localhost",
    dialect: "mysql"
    
 //   pool:{
 //       max: 5,
 //       min: 0,
 //       acquire: 3000,
 //       idle: 10000
 //   }
});

module.exports = sequelize;
global.sequelize = sequelize;