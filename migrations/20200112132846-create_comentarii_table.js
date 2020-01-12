'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('comentarii', {
      id: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    id_user: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
    }, 
    id_transport: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
    },
    com : {
      type: Sequelize.STRING(300),
      allowNull:false,
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
     return queryInterface.dropTable('comentarii');
  }
};
