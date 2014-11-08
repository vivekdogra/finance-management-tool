'use strict';


var IndexModel = require('../models/index');
var fs = require('fs');
var billingInfo = require('../models/billingModel');
var billingModel = billingInfo.billingModel();


module.exports = function (router) {

    var model = new IndexModel();


    router.get('/', function (req, res) {
        
        res.render('submitbill', model);
        
    });

    router.get('/sidemenu', function (req, res) {

        res.render('sidemenu', model);

    });

    router.get('/submitbills', function (req, res) {

        res.render('submitbill', model);

    });


    router.post('/submitbills', function (req, res) {
        var billing = new billingModel(billingInfo.fillBillingData(req));

        fs.readFile(req.files.billfile.path, function (err, data) {
            var newPath = __dirname+ "/../uploads/" + req.param('BillNumber')+".jpg" ;
            fs.writeFile(newPath, data, function (err) {
                res.redirect("/");
            });
        });

        billing.save(function(err, result)
        {
            if(err)
            {
                console.log(err);
                res.redirect('/');
            }
            else
            {
                console.log(result);
                res.redirect('/abc');
            }
        });
    });


    router.post('/register', function (req, res){



    });
};
