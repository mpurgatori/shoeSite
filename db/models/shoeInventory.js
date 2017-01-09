'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const ShoeInventory = db.define('shoe_inventory', {
    size: {
      type: Sequelize.FLOAT,
      allowNull: false
      }, 
    color: {
      type: Sequelize.STRING,
      allowNull: false
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false
    }	

}, {});

module.exports = ShoeInventory;