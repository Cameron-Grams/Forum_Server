const mongoose = require( 'mongoose' );
const express = require( 'express' );
const bodyparser = require( 'body-parser' );

const router = express.Router();

router.route( '/comments' )
    .post( ( req, res ) => {
        console.log( "In user router with: ", req.body );
    });



module.exports = router;