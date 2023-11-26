import { DataTypes } from 'sequelize';
import sequelize from '../index.js';

// Define a "User" model
export const User = sequelize.define(
  'User',
  {
    firstName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    catchphrase: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: true,
  },
);
