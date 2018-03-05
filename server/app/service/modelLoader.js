'use strict';
//// Require and connect
var mongoose = LIBRARY.mongoose;
var bcrypt = require('bcrypt-nodejs');
// var bluebird = require('bluebird');
var fs = require('fs');

// var availableType = 'yes no'.split(' ');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/jcfleurbouquet');

//require all the models
var controllers = {};
var names = fs.readdirSync('./server/app/models');

names.forEach(name => {
    if (!name.match(/\.js$/)) return;
    if (name === 'index.js') return;
    var model = require('../models/' + name);

    controllers[name.replace('.js', '')] = model;
});
module.exports = controllers;