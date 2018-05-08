/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');

var app = express();
var flash=require("connect-flash");
var multer = require("multer");
var cookieParser = require('cookie-parser')
var session = require("express-session");
var logger = require("morgan");
var methodOverride = require("method-override");
var bodyParser = require('body-parser');
var errorhandler = require("errorhandler");

app.set('port', process.env.PORT || 3003);
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(methodOverride());
app.use(express.static(path.join(__dirname)));
app.set('views', path.join(__dirname, 'views'));

exports.app = app;
var ask = require('./Action/replite.js')

ask.ask()


// development only
if ('development' == app.get('env')) {
  app.use(errorhandler());
}


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});






