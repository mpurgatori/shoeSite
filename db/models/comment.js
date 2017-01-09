'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Comment = db.define('comment', {
    product_rating: {
      type: Sequelize.INTEGER,
      validate: {
        min: 1,
        max: 5,
      },
    }, 
    body: {
      type: Sequelize.TEXT
    },
    upvotes: {
      type: Sequelize.BOOLEAN,
    },
    downvotes: {
      type: Sequelize.BOOLEAN,
    },

}, {});

module.exports = Comment;