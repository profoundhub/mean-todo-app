var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var todos = require('./routes/todos');
var app = express();

// The View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client')));
app.use('/', index);
app.use('/api/v1/', todos);
app.use(function(req, res, next) {
    var err = new Error('Missing, Not Found!');
    err.status = 404;
    next(err);
}); // Catch 404's & forward to Error Handler(s)

var server = app.listen(3000, function(){
    var host = 'localhost';
    var port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
})

module.exports = app;
