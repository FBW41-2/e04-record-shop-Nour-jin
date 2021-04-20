const express = require('express');
const router = express.Router();
const {record_Git, record_Post} = require('../controllers/record_Api')
/* Record page. */


router.get('/', record_Git)

router.post('/addRecord', record_Post) 

module.exports = router;