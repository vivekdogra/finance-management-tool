'use strict';


var IndexModel = require('../../models/index');

//var IndexModel = require('../models/index'),
//    ProfileModel = require('../models/profile'),
//    AdminModel = require('../models/admin'),
//    auth = require('../lib/auth');


module.exports = function (router) {

    var indexmodel = new IndexModel();
//    var profilemodel = new ProfileModel();
//    var adminmodel = new AdminModel();


    router.get('/', function (req, res) {
        res.render('submitbill', indexmodel);
    });


//    router.get('/profile', function(req, res) {
//        res.render('profile', profilemodel);
//    });
//
//
//    router.get('/admin', auth.isAuthenticated('admin'), auth.injectUser(), function(req, res) {
//        res.render('admin', adminmodel);
//    });
};