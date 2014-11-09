'use strict';


var IndexModel = require('../../models/index');
var billingInfo = require('../../models/billingModel');

//var IndexModel = require('../models/index'),
//    ProfileModel = require('../models/profile'),
//    AdminModel = require('../models/admin'),
//    auth = require('../lib/auth');


module.exports = function (router) {

    var billingModel = billingInfo.billingModel();

    var indexmodel = new IndexModel();

    router.get('/', function (req, res) {
        res.render('submitbill', indexmodel);
    });

    router.get('/mybills', function (req, res) {
        billingModel.find({'userId' : req.user.userName}, function(err, results){

            if (err) {
                logger.error('mongo err : ' + err);
                res.redirect('/user');
            }
            else{
                var mybills = {'bills':results};
                res.render('billsinfo', mybills);
            }

        });
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