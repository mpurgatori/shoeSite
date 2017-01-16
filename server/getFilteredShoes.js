const express = require('express');
const router = express.Router();
const { ShoeInventory, ShoeModel } = require('APP/db/models/index');
const util = require('util')


router.post('/', function(req, res, next) {
  const criteria = req.body.criteria
  console.log('hitting', criteria);
  console.log('this is checking if SIZE is an Array', Array.isArray(criteria.size));

  const conditions = [];
  if(criteria.color.length) {
    conditions.push({
      color: {
        $like: {
          $any: criteria.color,
        },
      }
    });
  }

  if(criteria.size.length) {
      conditions.push({
        size: {
          $in: criteria.size,
        },
      });
  }

  if(criteria.price) {
      conditions.push({
        price: {
          $lt: criteria.price,
        },
      });
  }

  const whatWeGiveSequelize = {
    include: [{
      model: ShoeInventory,
      where: {
        $and: conditions
      }
    }]
  };
  console.log(util.inspect(whatWeGiveSequelize, {showHidden: false, depth: 8}))


  ShoeModel.findAll(whatWeGiveSequelize)
  .then(shoes => {
    res.json(shoes)
  }).catch(err => console.error('this is my ERROR!', err))
})

module.exports = router;
