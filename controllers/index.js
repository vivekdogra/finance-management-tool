'use strict';


var IndexModel = require('../models/index');
var passport   = require('passport');
var fs = require('fs');
var billingInfo = require('../models/billingModel');
var billingModel = billingInfo.billingModel();


module.exports = function (router) {

    var model = new IndexModel();


    router.get('/', function (req, res) {
      res.redirect('/login');
    });

    router.get('/login', function (req, res) {

        //Include any error messages that come from the login process.
        model.messages = req.flash('error');
        res.render('login', model);

    });

    /**
     * Receive the login credentials and authenticate.
     * Successful authentications will go to /profile or if the user was trying to access a secured resource, the URL
     * that was originally requested.
     *
     * Failed authentications will go back to the login page with a helpful error message to be displayed.
     */
    router.post('/login', function (req, res) {

        passport.authenticate('local', {
            successRedirect: req.session.goingTo || '/user',
            failureRedirect: '/',
            failureFlash: true
        })(req, res);
    });

    /**
     * Allow the users to log out
     */

    router.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/login');
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

    router.get('/submitbills', function (req, res) {

        res.render('submitbill', model);

    });


    

// can be used in future for implementing registeration functionality.
//
//    router.post('/register', function (req, res){
//
//
//    });
};
