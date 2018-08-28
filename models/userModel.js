const mongoose = require( 'mongoose');


const userSchema = mongoose.Schema( {
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    userComments: [{ 
        type: mongoose.Schema.Types.ObjectId, ref: 'comments' 
    }],
    lastLogon: {
        type: Date,
        required: true
    }
} );

const user = mongoose.model( 'user', userSchema );

module.exports = { user }