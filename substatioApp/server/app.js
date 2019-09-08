/**
 * Module dependencies.
 */
let express, http,https, cors, session, cookieParser,
    bodyParser, methodOverride,proxy,auth_middleware,
    app, d, config, url, fs, path;

express = require('express');
cors = require('cors');
http = require('http');
https = require('https');
fs = require('fs');
url = require('url');
session = require('express-session');
bodyParser = require('body-parser');
methodOverride = require('method-override');
cookieParser = require('cookie-parser');
proxy = require('http-proxy-middleware');
config = require('../config');
path = require('path');
auth_middleware = require('./middleware/Auth');

app = express();

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
    secret: "OzhclfxGp956SMjtq",
    cookie:{maxAge:1000*60*60},///This is expire time is 1hour
    resave: true,
    saveUninitialized: true,
}));
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
    //Request Header Forwarding.
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
    target: extractBaseURL(config.server_info.apiBaseURL), // target host
    changeOrigin: true, // needed for virtual hosted sites,
    // logLevel: "debug",
    secure: false, //https://github.com/chimurai/http-proxy-middleware/issues/233
    pathRewrite: {
        '^/api': extractSubURL(config.server_info.apiBaseURL)
    },
    onProxyReq: onProxyReq,
    onError: function (err, req, res) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        return res.end('Proxy Error.')
    }
};

///using middleware for checking user access Token
app.use('/api', auth_middleware.tokenChecker, proxy(proxyOptions));

app.get('/config.js',function (req,res) {
    let cf = fs.readFileSync('config.json');
    res.send(`var config = ${cf}`);
});

app.get('/',function (req,res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/app/*',function (req,res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// .pfx file to set ssl config
let sslOptions = {
    pfx: fs.readFileSync('./environment/ssl/' + config.server_info.pfx),
    passphrase: config.server_info.pfx_passphrase
};

// Start server
if(config.server_info.online_mode){
    https.createServer(sslOptions, app).listen(config.server_info.port, function () {
        console.log('[' + d.toLocaleString() + '] ' + 'Express server listening on port ' + config.server_info.port);
    });
}else{
    http.createServer(app).listen(config.server_info.port, function () {
        console.log('[' + d.toLocaleString() + '] ' + 'Express server listening on port ' + config.server_info.port);
    });

}
