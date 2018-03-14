var cookieParser= require('cookie-parser');
var bodyParser	= require('body-parser');
// var morgan      = require('morgan');
var passport 	= require('passport');
//var session 	= require('express-session');
var express 	= require('express');
var path 	= require('path');
var app			= express();

global.__base = __dirname + '/';
// global.__base = path.join(__dirname + '/../');
global.LIBRARY = require('./helper/library');
//// get models
//// contoh panggil model: var Product = MODEL.Product;
global.MODEL = require('./app/service/modelLoader');

// var path = __dirname + '/views/';
//var path = require('path')

// app.use(morgan('dev'));

// set our port
var port = process.env.PORT || 3001;

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/public'));

//app.use('views', express.static(__dirname + 'views'));
//app.use('/js', express.static(__dirname + '/bower_components/bootstrap/dist/js')); // redirect bootstrap JS
//app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
//app.use('/css', express.static(__dirname + '/bower_components/bootstrap/dist/css')); // redirect CSS bootstrap
//app.use('/js', express.static(__dirname + '/bower_components/angular')); // redirect CSS bootstrap

var config = require('./config/config-local');

// //set up passport in passport.js
require('./app/passport.js')(passport,config);

// // parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// app.use(session({
// 	secret: 'secret',
// 	saveUninitialized: true,
// 	resave: true
// }));

 app.use(passport.initialize());
 app.use(passport.session()); // persistent login sessions

// routes ==================================================
//require('./app/routes')(app); // configure our routes

//using api
app.use('/api', require('./routes/websiteRoute')(express.Router(), passport, config));
// app.use('/api', require('./routes/apiRoute')(models, express, passport, config, jwt));
 
// var setupController = require('./controllers/setupController');
// setupController(app);


//// Enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('*', function(req, res){
	// res.sendFile(__dirname,'/../index.html')
	// res.sendFile(path.join(__dirname+'/../client/src/index.js'))
	// res.send(JSON.stringify('HELLO WORLD!!!!!'))
	// res.sendFile(path.join(__dirname+'/../index.html'))
	//// OLD WORKING ANGULAR
	res.sendFile(__dirname+'/public/views/index.html')
})


// start app ===============================================
// startup our app at http://localhost:3000
app.listen(port, function(){
	console.log("Server running on port " + port);
});
