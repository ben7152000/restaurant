const express = require('express')
const router = express.Router()
const restaurants = require('../../restaurant')

router.get('/', (req, res) => {
  const keyword = req.query.keyword
  const restaurant = restaurants.results.filter(item => {
    const word = item.name.toLowerCase().includes(keyword.toLowerCase()) || item.category.includes(keyword)
    return word
  })
  res.render('index', { restaurant, keyword })
})

module.exports = router
