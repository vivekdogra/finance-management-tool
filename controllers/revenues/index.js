'use strict';


var IndexModel = require('../../models/index');
var cashAdvanceInfo = require('../../models/cashAdvanceRequestModel');
var cashAdvanceModel = cashAdvanceInfo.cashAdvanceRequestModel();


module.exports = function (router) {

    var model = new IndexModel();


    router.get('/', function (req, res) {

        res.render('revenues', model);

    });

    router.post('/', function (req, res) {
        var cashAdvance = new cashAdvanceModel(cashAdvanceInfo.fillCashAdvanceData(req));

        cashAdvance.save(function (err, result) {
            if (err) {
                console.log(err);
                res.redirect('/');
            }
            else {
                console.log(result);
                res.redirect('/abc');
            }
        });
    });
};
