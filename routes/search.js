const express = require('express')
const router = express.Router()
const restaurants = require('../restaurant')

router.get('/', (req, res) => {
  const keyword = req.query.keyword
  const restaurant = restaurants.results.filter(restaurant => {
    return restaurant.name.toLowerCase().includes(keyword.toLowerCase())
  })
  res.render('index', { restaurants: restaurant, keyword: keyword })
})

module.exports = router
