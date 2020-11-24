/* 
Title: routes
Author: Erica Perry
Date:10/4/2020
Modified: Erica Perry
Description: API gateway routes
*/
/**
 * API Routes
 */

var express = require('express');
var router = express.Router();


var auth_controller = require('../authController');


// POST request for registering a user
router.post('/auth/register', auth_controller.user_register);


// GET request for verifying user tokens
router.get('/auth/token', auth_controller.user_token);


// POST request for signing users in
router.post('/auth/login', auth_controller.user_login);


// GET request for logging users out
router.get('/auth/logout', auth_controller.user_logout);

router.get('/auth/test', auth_controller.test_register);
router.get('/auth/gettest', auth_controller.user_test);
module.exports = router; 
