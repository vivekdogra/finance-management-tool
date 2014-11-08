'use strict';

var mongoose = require('mongoose');

var cashAdvanceRequestSchema = mongoose.Schema({

    userId: {
        type:String,
        required: true
    },
    amount: {
        type:String,
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
    status : {
        type:String,
        enum: ['Pending', 'Approved'],
        default: 'Pending'
    }
});

var fillCashAdvanceData = function (req) {
    var cashAdvance = {};
    cashAdvance.userId     = "123";
    cashAdvance.chapterName  = req.param('ChapterName');
    cashAdvance.projectName   = req.param('ProjectName');
    cashAdvance.amount    = req.param('Amount');
    cashAdvance.purpose= req.param('Purpose');

    return cashAdvance;
};


exports.cashAdvanceRequestModel = function(){
    return mongoose.model('cashAdvance', cashAdvanceRequestSchema);
};

module.exports.fillCashAdvanceData = fillCashAdvanceData;