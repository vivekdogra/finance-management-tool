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

exports.cashAdvanceRequestModel = function(){
    return mongoose.model('cashAdvance', cashAdvanceRequestSchema);
};