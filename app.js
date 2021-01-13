// 取模組
const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes')
const app = express()
const port = 3000

// 渲染引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 導入路由
app.use(routes)
app.use(express.static('public'))

// 監聽伺服器
app.listen(port)
