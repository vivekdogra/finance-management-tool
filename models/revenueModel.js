'use strict';

var mongoose = require('mongoose');

var revenueSchema = mongoose.Schema({

    source: {
        type:String,
        required: true
    },
    date: {
        type:Date,
        required: true
    },
    chapterName :{
        type:String
    },
    projectName :{
        type:String
    },
    amount: {
        type:String,
        required: true
    },
    donorDetails: {
        type:String,
        required: true
    }
});

var revenueData = function (req) {
    var revenueData = {};
    revenueData.source  = req.param('source');
    revenueData.date   = req.param('date');
    revenueData.chapterName    = req.param('chapter');
    revenueData.projectName= req.param('project');
    revenueData.amount= req.param('amount');
    revenueData.donorDetails= req.param('donordetails');

    return revenueData;
};

exports.revenueModel = function(){
    return mongoose.model('revenueInfo', revenueSchema);
};

module.exports.revenueData = revenueData;