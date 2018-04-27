'use strict';
module.exports = (sequelize, DataTypes) => {
  const contactInfo = sequelize.define('contactInfo', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    value: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    icon: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isPrimary: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    isMappable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    longtitude: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    latitude: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
  }, {});
  contactInfo.associate = (models) => {
    // associations can be defined here
  };
  return contactInfo;
};

