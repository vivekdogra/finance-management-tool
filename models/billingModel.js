
'use strict';

var mongoose = require('mongoose');

var billingSchema = mongoose.Schema({

    userId: {
        type:String,
        required: true
    },
    chapterName :{
        type:String,
        required: true
    },
    projectName :{
        type:String,
        required: true
    },
    billingDate :{
        type:Date,
        required: true
    },
    shopName :{
        type:String
    },
    amount :{
        type:String,
        required: true
    },
    billNo : {
        type:String,
        required: true
    },
    purpose : {
        type:String,
        default: "None"
    },
    imageURI : {
        type:String
    },
    timeCreated : {
        type:Date,
        default: new Date()
    },
    status : {
        type:String,
        enum: ['Pending', 'Approved'],
        default: 'Pending'
    }
});

var fillBillingData = function (req) {
    var billing = {};
    billing.userId     = req.user.userName;
    billing.chapterName  = req.param('chapterName');
    billing.projectName   = req.param('projectName');
    billing.billingDate    = req.param('billingDate');
    billing.shopName = req.param('shopName');
    billing.amount    = req.param('amount');
    billing.billNo= req.param('billNumber');
    billing.purpose= req.param('purpose');
    billing.imageURI= __dirname+ "/../uploads/" + req.param('billNumber') +".jpg";

    return billing;
};

exports.billingModel = function(){
    return mongoose.model('billingInfo', billingSchema);
};

module.exports.fillBillingData = fillBillingData;
