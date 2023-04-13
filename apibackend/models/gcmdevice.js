'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const GcmDevice = sequelize.define("gcmdevice", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    name: {
      allowNull: true,
      type: DataTypes.STRING
    },
    deviceId: {
      allowNull: true,
      type: DataTypes.UUID
    },
    registId: {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: ''
    },
    active: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  });

  GcmDevice.associate = function ({ Account }) {
    GcmDevice.belongsTo(GcmDevice, {
      foreignKey: 'userId',
      as: 'user'
    });
  };

  return GcmDevice;
};
