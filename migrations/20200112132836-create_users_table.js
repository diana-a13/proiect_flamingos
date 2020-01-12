'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => { 
    return queryInterface.createTable('users', {
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
     return queryInterface.dropTable('users');
  }
};
