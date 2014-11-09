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
    cashAdvance.userId     = req.user.userName;
    cashAdvance.chapterName  = req.param('chapterName');
    cashAdvance.projectName   = req.param('projectName');
    cashAdvance.amount    = req.param('amount');
    cashAdvance.purpose= req.param('purpose');

    return cashAdvance;
};


exports.cashAdvanceRequestModel = function(){
    return mongoose.model('cashAdvance', cashAdvanceRequestSchema);
};

module.exports.fillCashAdvanceData = fillCashAdvanceData;