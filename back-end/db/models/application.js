'use strict';
module.exports = (sequelize, DataTypes) => {
  const application = sequelize.define('application', {
    cv: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    coverLetter: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  }, {});
  application.associate = (models) => {
    // associations can be defined here
  };
  return application;
};
