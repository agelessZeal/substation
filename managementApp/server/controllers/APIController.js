let async, BaseController;
let config, axios, moment, https;

async = require('async');
BaseController = require('./BaseController');

axios = require('axios');
config = require('../../config');
moment = require('moment');
https = require('https');

module.exports = BaseController.extend({
    name: 'APIController',
    testFunc:async function(req, res){
        res.send('ok');
    }
});
