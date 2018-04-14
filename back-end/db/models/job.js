'use strict';
module.exports = (sequelize, DataTypes) => {
  const job = sequelize.define('job', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  }, {});
  job.associate = (models) => {
    // associations can be defined here
    const {
        application,
    } = models;

    job.hasMany(application);
  };
  return job;
};
