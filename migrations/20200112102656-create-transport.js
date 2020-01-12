'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('transports', {
      id_statie: {
        type: Sequelize.INTEGER(3),
        autoIncrement: false,
        primaryKey: true
      },
      statie_plecare: {
        type: Sequelize.STRING(40)
      },
      statie_sosire: {
        type: Sequelize.STRING(40)
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('transports');
  }
  
  
};