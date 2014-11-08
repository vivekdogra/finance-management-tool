'use strict';


var IndexModel = require('../../models/index');
var revenueInfo = require('../../models/revenueModel');
var revenueModel = revenueInfo.revenueModel();


module.exports = function (router) {

    var model = new IndexModel();


    router.get('/', function (req, res) {

        res.render('revenues', model);

    });

    router.post('/updateRevenue', function (req, res) {
//        var cashAdvance = new revenueModel(revenueInfo.somefunction(req));
//
//        cashAdvance.save(function (err, result) {
//            if (err) {
//                console.log(err);
//                res.redirect('/');
//            }
//            else {
//                console.log(result);
//                res.redirect('/abc');
//            }
//        });

        console.log("request recieved");
    });
};
