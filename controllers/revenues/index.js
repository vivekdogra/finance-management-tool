'use strict';


var IndexModel = require('../../models/index');
var revenueInfo = require('../../models/revenueModel');
var revenueModel = revenueInfo.revenueModel();


module.exports = function (router) {

    var model = new IndexModel();


    router.get('/', function (req, res) {

        revenueModel.find(function(err, results){

            model.revenues = results;

            if (err) {
                logger.error('mongo err : ' + err);
                res.redirect('/');
            }
            else{
                res.render('revenues', model);
            }

        });


    });

    router.post('/updateRevenue', function (req, res) {
        var revenue = new revenueModel(revenueInfo.revenueData(req));

        revenue.save(function (err, result) {
            if (err) {
                console.log(err);
                res.redirect('/');
            }
            else {
                console.log(result);
                res.send({'response':'ok'});
            }
        });
    });
};
