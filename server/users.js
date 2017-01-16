'use strict'

const db = require('APP/db')
const User = db.model('user')

const {mustBeLoggedIn, selfOnly, forbidden} = require('./auth.filters')

module.exports = require('express').Router()

	.get('/', forbidden('only admins can list users'), (req, res, next) =>
		User.findAll({where: req.query})
		.then(users => res.json(users))
		.catch(next))

	.post('/', (req, res, next) => 
		User.create(req.body)
		.then(user => res.status(201).json(user))
		.catch(next))

	.get('/:id', mustBeLoggedIn, selfOnly("retrieve your own user details."), (req, res, next) =>
		User.findById(req.params.id)
		.then(user => res.json(user))
		.catch(next))

	.put('/:id', mustBeLoggedIn, selfOnly("edit your own profile."), (req, res, next) => //or admin
		User.update(req.body, {where: {id: req.params.id}, returning: true})
		.then(user => res.json(user[1][0]))
		.catch(next))

	.delete('/:id', mustBeLoggedIn, selfOnly("delete your own account."), (req, res, next) =>
		User.destroy({where: {id: req.params.id}})
		.then(user => res.json({}))
		.catch(next))
