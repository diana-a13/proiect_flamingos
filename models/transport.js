'use strict';
module.exports = (sequelize, DataTypes) => {
  const transport = sequelize.define('transport', {
    id_statie: DataTypes.STRING,
    statie_plecare: DataTypes.STRING,
    statie_sosire: DataTypes.STRING
  }, {});
  transport.associate = function(models) {
    // associations can be defined here
  };
  return transport;
};