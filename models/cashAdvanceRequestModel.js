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

exports.cashAdvanceRequestModel = function(){
    return mongoose.model('cashAdvance', cashAdvanceRequestSchema);
};
