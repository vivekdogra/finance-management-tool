'use strict';


var IndexModel = require('../models/index');
var fs = require('fs');
var billingInfo = require('../models/billingModel');


module.exports = function (router) {

    var model = new IndexModel();


    router.get('/', function (req, res) {
        res.render('login', model);
    });

    router.post('/submitbills', function (req, res) {
        var billingModel = billingInfo.billingModel();
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


};
