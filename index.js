const express = require( 'express' );
const app = express();
const bodyparser = require( 'body-parser' ); 

app.use( bodyparser.json() );

app.get( '/', ( req, res ) => {
    res.send( "Hello World\n" );
} );

app.post( '/', ( req, res ) => {
    console.log( "with req: ", req.body );

    console.log( "+++++++++++++++++++++++++++++++++++++++" );
    console.log( "+++++++++++++++++++++++++++++++++++++++" );

    res.json( { body: "received " + req.body.text });
})

app.listen( 3000, () => console.log( "Listening on 3000" ) );

