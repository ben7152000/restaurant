// 取模組
const express = require('express')
const app = express()
const port = 3000
const restaurants = require('./restaurant')
const exphbs = require('express-handlebars')
const detailRoute = require('./routes/detail')
const searchRoute = require('./routes/search')

// 渲染引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 導入路由
app.use('/detail', detailRoute)
app.use('/search', searchRoute)
app.use(express.static('public'))

// 設定路由
app.get('/', (req, res) => {
  res.render('index', { restaurants: restaurants.results })
})

// 監聽伺服器
app.listen(port)
