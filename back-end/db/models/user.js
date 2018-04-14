'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  }, {});
  User.associate = (models) => {
    // associations can be defined here
    const {
        contactInfo,
        application,
        button,
        role,
    } = models;
    User.hasMany(contactInfo);
    User.hasMany(application);
    User.hasMany(button);
  };
  return User;
};

