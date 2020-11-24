/* 
Title: index.js
Author: Erica Perry
Date:10/4/2020
Modified: Erica Perry
Description: API gateway index
*/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;