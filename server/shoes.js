'use strict'
const { ShoeInventory, ShoeModel } = require('APP/db/models/index');
const {mustBeLoggedIn, selfOnly, forbidden} = require('./auth.filters')

module.exports = require('express').Router()

   // .get('/', mustBeLoggedIn, selfOnly("see your own orders."), (req, res, next) =>