const express = require('express');
const router = express.Router();
const { ShoeInventory, ShoeModel } = require('APP/db/models/index');

router.post('/', function(req, res, next) {
  console.log('hitting', req.body);

  ShoeModel.findAll({
    where: {
      price: {
        $contains: req.body.price
      }
    },
    include: [{
      model: ShoeInventory,
      where: {
        color: {
          $contains: req.body.color,
        },
        size: {
          $contains: req.body.size,
        }
      }
    }]
  })
  .then(shoes => {
    console.log(shoes);
    res.json(shoes)
  }).catch(next)
})

module.exports = router;
