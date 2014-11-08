/**
 * Created by ankuyadav on 11/8/2014.
 */
'use strict';

var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({

    name: {
        type:String,
        required: true,
        unique: true
    },
    chapterId :[{type: Schemas.Types.ObjectId , ref : 'chapter'}]
});

exports.chapterModel = function(){
    return mongoose.model('chapter', chapterSchema);
};
