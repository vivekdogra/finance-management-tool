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
    purpose :{
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
    revenueData.userId     = "123";
    revenueData.chapterName  = req.param('ChapterName');
    revenueData.projectName   = req.param('ProjectName');
    revenueData.amount    = req.param('Amount');
    revenueData.purpose= req.param('Purpose');

    return revenueData;
};

exports.revenueModel = function(){
    return mongoose.model('revenueInfo', revenueSchema);
};

module.exports.revenueData = revenueData;