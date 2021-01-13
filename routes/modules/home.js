const express = require('express')
const router = express.Router()
const restaurants = require('../../restaurant')

router.get('/', (req, res) => {
  res.render('index', { restaurant: restaurants.results })
})

module.exports = router
