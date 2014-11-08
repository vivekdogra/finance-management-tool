
'use strict';

var mongoose = require('mongoose');

var billingSchema = mongoose.Schema({

    userId: {
        type:String,
        required: true
    },
    chapterId :{
        type:String,
        required: true
    },
    projectId :{
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
    billing.chapterId  = "123";
    billing.projectId   = "123";
    billing.billingDate    = req.BillingDate;
    billing.shopName = req.ShopName;
    billing.amount    = req.Amount;
    billing.billNo= req.BillNumber;
    billing.purpose= req.Purpose;
    billing.imageURI= __dirname+ "/../uploads/" + req.BillNumber+".jpg";

    return billing;
};

exports.billingModel = function(){
    return mongoose.model('billingInfo', billingSchema);
};

module.exports.fillBillingData = fillBillingData;
