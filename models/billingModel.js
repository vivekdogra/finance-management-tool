
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
        type:String,
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
        type:Number
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
    billing.userId     = "123";
    billing.chapterName  = req.param('ChapterName');
    billing.projectName   = req.param('ProjectName');
    billing.billingDate    = req.param('BillingDate');
    billing.shopName = req.param('ShopName');
    billing.amount    = req.param('Amount');
    billing.billNo= req.param('BillNumber');
    billing.purpose= req.param('Purpose');
    billing.imageURI= __dirname+ "/../uploads/" + req.param('BillNumber') +".jpg";

    return billing;
};

exports.billingModel = function(){
    return mongoose.model('billingInfo', billingSchema);
};

module.exports.fillBillingData = fillBillingData;
