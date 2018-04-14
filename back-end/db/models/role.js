'use strict';
module.exports = (sequelize, DataTypes) => {
  const role = sequelize.define('role', {
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
  }, {});
  role.associate = (models) => {
    // associations can be defined here
    const {
        User,
    } = models;
    role.hasMany(User);
  };
  return role;
};
