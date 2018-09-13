const mongoose = require( 'mongoose' );
const express = require( 'express' );
const bodyparser = require( 'body-parser' );

const router = express.Router();

router.route( '/users/login' )
    .post( ( req, res ) => {
        console.log( "In user router with: ", req.body );
        return res.json( { 
            message: "Good test",
            userName: "User1",
            userId: 1
        } );
    });

router.route( '/users/register' )
    .post( ( req, res ) => {
        console.log( "In user router with register and: ", req.body );
        return res.json( {
            message: "Good registration"
        })
    })

module.exports = router;