const express = require('express')
const router = express.Router()

const home = require('../routes/modules/home')
const detail = require('../routes/modules/detail')
const search = require('../routes/modules/search')

router.use('/', home)
router.use('/detail', detail)
router.use('/search', search)

module.exports = router
