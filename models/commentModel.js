const mongoose = require( 'mongoose');

const commentSchema = new mongoose.Schema( {
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "user" 
    },
    commentTitle: {
        type: String, 
        required: true
    },
    commentText: {
        type: String,
        required: true
    },
    commentPosted: {
        type: Date,
        required: true
    }
} );

const comment = mongoose.model( "comment", commentSchema );

module.exports = { comment };