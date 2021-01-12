const express = require('express')
const router = express.Router()
const restaurants = require('../restaurant')

router.get('/:restaurant_id', (req, res) => {
  const restaurant = restaurants.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)
  res.render('detail', { restaurant: restaurant })
})

module.exports = router
