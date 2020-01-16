const Sequelize = require("sequelize");
let sequelize = require('/home/ubuntu/environment/p/proiect_flamingos/src/database/connection');

module.exports = sequelize.define("comentarii",{
     id: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    id_user: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
    }, 
    id_transport: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
    },
    com: {
      type: Sequelize.STRING(300),
      allowNull:false,
    }
    
});