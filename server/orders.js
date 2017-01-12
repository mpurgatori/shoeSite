'use strict'

const db = require('APP/db')
const Comment = db.model('comment')

const {mustBeLoggedIn, selfOnly,forbidden} = require('./auth.filters')

module.exports = require('express').Router()
	
	.get('/orders/:userId', mustBeLoggedIn, selfOnly("see your own orders."), (req, res, next) => 
		Order.findAll({where: {userId: req.params.userId}, order: 'date DESC'})
		.then(user => res.json(user))
		.catch(next))