let express,router, proxy, config,fs ;
let api_controller,auth_middleware;

proxy = require('http-proxy-middleware');
express = require('express');
fs = require('fs');
router = express.Router();
path = require('path');
auth_middleware = require('./middleware/Auth');
api_controller = require('./controllers/APIController');

config = require('../config');

router.get('/',function (req,res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

router.get('/config.js',function (req,res) {
    let cf = fs.readFileSync('config.json');
    res.send(`var config = ${cf}`);
});

router.get('/app/*',function (req,res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

//export this router to use in our index.js
module.exports = router;
