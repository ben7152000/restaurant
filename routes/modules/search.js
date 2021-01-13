const express = require('express')
const router = express.Router()
const restaurants = require('../../restaurant')

router.get('/', (req, res) => {
  const keyword = req.query.keyword
  const restaurant = restaurants.results.filter(item => {
    return item.name.toLowerCase().includes(keyword.toLowerCase()) || item.category.includes(keyword) || item
  })

  res.render('index', { restaurant, keyword })
})

module.exports = router
