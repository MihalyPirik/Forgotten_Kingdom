const { DataTypes } = require('sequelize');
const dbConnection = require('../services/dbService');
const uuid = require('uuid');

const AuditTrail = dbConnection.define
  (
    'AuditTrail',
    {
      audit_trail_id:
      {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: uuid.v4
      },
      player_id:
      {
        type: DataTypes.UUID,
        allowNull: true
      },
      event_type:
      {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [['REGISTRATION', 'REGISTRATION_AUF', 'LOGIN', 'LOGOUT', 'RESETPASSWORD', 'RESETPASSWORD_AUF', 'REPORT']],
        },
      },
      event_time: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      status:
      {
        type: DataTypes.STRING(1000),
        allowNull: false
      }
    },
    {
      tableName: 'audit_trails',
      timestamps: false,
      indexes: [
        {
          fields: ['player_id'],
        },
        {
          fields: ['event_time'],
        },
      ]
    }
  )

module.exports = AuditTrail;