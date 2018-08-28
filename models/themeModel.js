const mongoose = require( 'mongoose');

const themeSchema = mongoose.Schema( {
    title:{
        type: String,
        required: true,
        unique: true
    },
    comments: [{ 
        type: mongoose.Schema.Types.ObjectId, ref: 'comment' 
    }]
} );

const theme = mongoose.model( 'theme', themeSchema );

module.exports = { theme }; 
