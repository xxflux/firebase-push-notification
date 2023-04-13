'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const WebDevice = sequelize.define("webdevices", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    name: {
      allowNull: true,
      type: DataTypes.STRING
    },
    registId: {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: ''
    },
    p256dh: {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: ''
    },
    auth: {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: ''
    },
    browser: {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: 'Chrome'
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

  WebDevice.associate = function ({ Account }) {
    WebDevice.belongsTo(Account, {
      foreignKey: 'userId',
      as: 'user'
    });
  };

  return WebDevice;
};
