'use strict'

const db = require('APP/db')
const User = db.model('user')

const {mustBeLoggedIn, selfOnly,forbidden} = require('./auth.filters')

module.exports = require('express').Router()

	.get('/', forbidden('only admins can list users'), (req, res, next) => 
		User.findAll()
		.then(users => res.json(users))
		.catch(next))

	.post('/', (req, res, next) =>
		User.create(req.body)
		.then(user => res.status(201).json(user))
		.catch(next))

	.get('/:userId', mustBeLoggedIn, selfOnly("see your own user details."), (req, res, next) => 
		User.findById(req.params.userId)
		.then(user => res.json(user))
		.catch(next))

	.put('/:userId', mustBeLoggedIn, selfOnly("edit your own profile."), (req, res, next) => 
		User.update(req.body, {where: {id: req.params.userId}, returning: true})
		.then(user => res.json(user[1][0]))
		.catch(next))