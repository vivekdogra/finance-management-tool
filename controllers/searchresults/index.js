'use strict';


var IndexModel = require('../../models/index');
var billingInfo = require('../../models/billingModel');

module.exports = function (router) {

    var model = new IndexModel();


    router.get('/', function (req, res) {

        res.render('searchpage', model);

    });

    router.post('/query', function (req, res) {

        var billingModel = billingInfo.billingModel();

        var chaptername = req.param('chapterName');
        var projectname = req.param('projectName');
        var fromdate = req.param('fromDate');
        var todate = req.param('toDate');

        var searchquery = {};
        searchquery.userId = req.user.userName;

        if(chaptername)
        {
            searchquery.chapterName = chaptername;
        }
        else if(projectname)
        {
            searchquery.projectName = projectname;
        }
        else
        {
           searchquery.billingDate = { '$gte': new Date(fromdate), '$lte': new Date(todate)};
        }

        billingModel.find(searchquery, function(err, results){

            if (err) {
                logger.error('mongo err : ' + err);
                res.redirect('/searchpage');
            }
            else{
                res.send(results);
            }

        });

    });

};
