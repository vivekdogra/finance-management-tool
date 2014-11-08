'use strict';

var User = require('../models/user');

var UserLibrary = function() {
    return {
        addUsers: function() {
        //add different types of users for demo
            var volunteer = new User({
                userName    : 'degarg',
                password    : 'pp@123',
                firstName   : 'Deendayal',
                lastName    : 'Garg',
                email       : 'degarg@gmail.com',
                contact     : '9538555811',
                role        : 'volunteer'
            });

            var chapterHead = new User({
                userName    : 'vdogra',
                password    : 'paypal123',
                firstName   : 'Vivek',
                lastName    : 'Dogra',
                email       : 'vdogra@gmail.com',
                contact     : '9538555811',
                role        : 'chapter'
            });

            var centerHead = new User({
                userName    : 'tejasvi',
                password    : 'ebay123',
                firstName   : 'Tejasvi',
                lastName    : 'B',
                email       : 'tejasvi@gmail.com',
                contact     : '9538555811',
                role        : 'center'
            });

            //Ignore errors. In this case, the errors will be for duplicate keys as we run this app more than once.
            volunteer.save();
            chapterHead.save();
            centerHead.save();
        },
        serialize: function(user, done) {
            done(null, user.id);
        },
        deserialize: function(id, done) {
            User.findOne({
                _id: id
            }, function(err, user) {
                done(null, user);
            });
        }
    };
};

module.exports = UserLibrary;