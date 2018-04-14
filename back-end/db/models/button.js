'use strict';
module.exports = (sequelize, DataTypes) => {
  const button = sequelize.define('button', {
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    targetURL: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    iconURL: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    hidden: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
  }, {});
  button.associate = (models) => {
    // associations can be defined here
  };
  return button;
};
