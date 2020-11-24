/* 
Title: config.js
Author: Erica Perry
Date:10/4/2020
Modified: Erica Perry
Description: API gateway config
*/
var config = {};

config.web = {};

config.web.port = process.env.PORT || '3000';

config.web.secret = 'topsecret';


module.exports = config;
