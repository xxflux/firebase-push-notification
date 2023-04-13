'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const ApnsDevice = sequelize.define('apnsdevice', {
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

  ApnsDevice.associate = function ({Account}) {
    ApnsDevice.belongsTo(Account, {
      foreignKey: 'userId',
      as: 'user',
      onDelete: 'cascade',
    });
  };

  return ApnsDevice;
};
