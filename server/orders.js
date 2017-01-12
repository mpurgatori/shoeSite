'use strict'

const db = require('APP/db')
const Order = db.model('order')

const {mustBeLoggedIn, selfOnly,} = require('./auth.filters')

module.exports = require('express').Router()
	
	.get('/:userId', mustBeLoggedIn, selfOnly("see your own orders."), (req, res, next) => 
		Order.findAll({where: {user_id: req.params.userId}, order: 'date DESC'})
		.then(orders => res.json(orders))
		.catch(next))

	.get('/pending/:userId',(req, res, next) => 
		Order.findOne({ where: {user_id: req.params.userId, status:'pending'}})
		.then(order => res.json(order))
		.catch(next))