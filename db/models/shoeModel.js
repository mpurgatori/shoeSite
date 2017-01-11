'use strict'

const Sequelize = require('sequelize')
const db = require('../index')

const ShoeModel = db.define('shoe_model', {
    brand: {
      type: Sequelize.STRING,
      allowNull: false
      },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    style: {
      type: Sequelize.STRING,
      allowNull: false
    },
    image_url: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT
    },
    country_of_origin: {
      type: Sequelize.STRING,
    },
    rating: {
      type: Sequelize.INTEGER,
      validate: {
        min: 1,
        max: 5,
      },
    },
    gender: {
      type: Sequelize.ENUM('F', 'M')
    }

}, {});

module.exports = ShoeModel;
