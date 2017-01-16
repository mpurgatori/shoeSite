'use strict'

const Sequelize = require('sequelize')
const db = require('../index')

const Order = db.define('order', {
    date: {
      type: Sequelize.DATE,
      },
    tracking: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING,
    },
    payment: {
      type: Sequelize.STRING,
    },
    status: { //Pending when in cart and placed
      type: Sequelize.STRING,
      allowNull: false
    }

}, {});

module.exports = Order;
