/**
 * Module dependencies.
 */
let express, http, https, cors, session, cookieParser,
    bodyParser, methodOverride, proxy,
    app, d, config, url, fs, path;

express = require('express');
cors = require('cors'); //Access-Control-Allow-Origin allow
http = require('http');
https = require('https');
fs = require('fs');
url = require('url');
session = require('express-session');
bodyParser = require('body-parser');
methodOverride = require('method-override');
cookieParser = require('cookie-parser');
proxy = require('http-proxy-middleware');

app = express();
path = require('path');
config = require('../config');

d = new Date();

// all environments
app.enable("trust proxy"); // only if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request
app.use(cookieParser());
app.use(session({
    secret: "pFtZChnnjfTPheq9MuCb",
    cookie: {maxAge: 1000 * 60 * 60},///This is expire time is 1hour
    resave: true,
    saveUninitialized: true,
}));

///Middleware for checking user access Token
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

///====Set Proxy Servers====
function extractBaseURL(url) {
    let hostname, protocol;
    //find & remove protocol (http, ftp, etc.) and get hostname
    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
        protocol = url.split('//')[0] + "//";
    }
    else {
        hostname = url.split('/')[0];
    }
    //find & remove port number
    // hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return protocol + hostname;
}

function extractSubURL(url) {
    let baseURL = extractBaseURL(url);
    let subUrlPos = url.indexOf(baseURL);
    return url.substr(subUrlPos);
}

function onProxyReq(proxyReq, req, res) {
    if (req.body) {
        // https://github.com/chimurai/http-proxy-middleware/issues/202
        let bodyData = JSON.stringify(req.body);
        // In case if content-type is application/x-www-form-urlencoded -> we need to change to application/json
        proxyReq.setHeader('Content-Type', 'application/json');
        proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
        // stream the content
        proxyReq.write(bodyData);
    }
}

let proxyOptions = {
    target: extractBaseURL(config.server_info.apiURL), // target host
    changeOrigin: true, // needed for virtual hosted sites,
    logLevel: "debug",
    secure: false, //https://github.com/chimurai/http-proxy-middleware/issues/233
    pathRewrite: {
        '^/api': extractSubURL(config.server_info.apiURL)
    },
    onProxyReq: onProxyReq,
    onError: function (err, req, res) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        return res.end('Proxy Error.')
    }
};

app.use('/api', proxy(proxyOptions));
//===================================

app.get('/',function (req,res) {
    console.log(path.join(__dirname, 'public/index.html'));
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.get('/config.js',function (req,res) {
    let cf = fs.readFileSync('config.json');
    res.send(`var config = ${cf}`);
});
app.get('/app/*',function (req,res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
let sslOptions = {
    pfx: fs.readFileSync('./environment/ssl/' + config.server_info.pfx),
    passphrase: config.server_info.pfx_passphrase
};

if (config.server_info.online_mode) {
    https.createServer(sslOptions, app).listen(config.server_info.port, function () {
        console.log('[' + d.toLocaleString() + '] ' + 'Express server listening on port ' + config.server_info.port);
    });
} else {
    http.createServer(app).listen(config.server_info.port, function () {
        console.log('[' + d.toLocaleString() + '] ' + 'Express server listening on port ' + config.server_info.port);
    });
}
