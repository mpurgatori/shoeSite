'use strict'

const db = require('APP/db')
const Order= db.model('order')
const ShoeInventory= db.model('shoe_inventory')
const ShoeModel= db.model('shoe_model')
const ShoeOrders= db.model('shoe_orders')


const {mustBeLoggedIn, selfOnly,forbidden} = require('./auth.filters')

module.exports = require('express').Router()

	// this route will only work for get requests with an associated user ID
	// we do not currently have a 'get all orders' route
	.get('/', mustBeLoggedIn, selfOnly("see your own orders."), (req, res, next) =>
		Order.findAll({where: {user_id: req.query.userId}, order: 'date DESC'})
		.then(orders => res.json(orders))
		.catch(next))

	.get('/pending/:userId', (req, res, next) =>
		Order.findOne({where: {user_id: req.params.userId, status: 'pending' }, include:[{model:ShoeInventory, include:[{model:ShoeModel}]}]})
		.then(order => res.json(order))   //SET SHOE INVENTORY TO ORDER
		.catch(next)
	)

	.post('/cartsubmit', (req, res, next) =>
		Order.findOrCreate({
			where: {
				user_id: req.user.id,
				status: 'pending',
				address: req.user.address
			}
		})
		.then(order => ShoeOrders.findOrCreate({
				where: {
				order_id: order[0].dataValues.id,
				shoe_inventory_id: req.body.id
			}
		}))
		.then(inventoryItem => {
			const shoeId = inventoryItem[0].dataValues.shoe_inventory_id;
			const ordId = inventoryItem[0].dataValues.order_id;
			const quant = inventoryItem[0].dataValues.quantity;
			if (quant===null){
				ShoeOrders.update(
			 {quantity:1},
			 {
				where:{
					order_id:ordId,
					shoe_inventory_id:shoeId
				}})
			}
			else {
				const newQuant = quant+1;
				ShoeOrders.update(
			 {quantity:newQuant},
			 {
				where:{
					order_id:ordId,
					shoe_inventory_id:shoeId
				}})
			}
		})
	.catch(next)
)

	.delete('/pending/:orderId/:shoeInventoryId', (req, res, next) =>
		Order.findOne({where: {id: req.params.orderId, status: 'pending' }})
		.then(order => {
			console.log("ORDER: ", order)
			return Promise.all([order, ShoeInventory.findOne({where: {id: req.params.shoeInventoryId}})])
			.then(results => {
				let order = results[0];
				let shoe = results[1];
				return shoe.removeOrder(order)
				.then(nothing => {
					res.json(order)});
		})
		})
		.catch(next))
