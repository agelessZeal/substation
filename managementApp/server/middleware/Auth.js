let config = require('../../config.json');
let axios = require('axios');

exports.tokenChecker = function (req,res,next) {
    console.log(getClientIp(req));
    next();
};

function getClientIp(req) {
    let uAg = req.headers['user-agent'];
    let ipAddress = req.connection.remoteAddress;
    if (req.headers['x-forwarded-for'] != undefined) {
        ipAddress = req.headers['x-forwarded-for'] ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress;
    }
    ipAddress = ipAddress.split(',')[0];
    if (ipAddress.substr(0, 1) == ':') ipAddress = ipAddress.substr(7);
    return  `IP:${ipAddress}, Agent:${uAg}`;
}
