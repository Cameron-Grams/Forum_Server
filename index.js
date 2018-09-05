const mongoose = require( 'mongoose' );
mongoose.Promise = global.Promise;

const express = require( 'express' );
const app = express();
const bodyparser = require( 'body-parser' ); 

const { PORT, DATABASE_URL } = require( './config/config' );

const userRouter = require( './routers/userRouter' ); 
const commentRouter = require( './routers/userRouter' );

app.use( bodyparser.json() );
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    next();
});


app.use( '/api', userRouter );
app.use( '/api', commentRouter );

// app.use( '/api', themeRouter );

function runServer( port = PORT, database = DATABASE_URL ){
    return new Promise( ( resolve, reject ) => {
        mongoose.connect( database, err  => {
            if ( err ){
                return reject( err ); 
            }
            server = app.listen( port, () => {
            console.log( `Server on ${ port } from config` );
            resolve();
            })
            .on( 'error', err => {
            mongoose.disconnect();
            reject( err );
            });
        } )
    } );
}


function closeServer(){
    return mongoose.disconnect().then( () => {     
        return new Promise( ( resolve, reject ) => {
            console.log( 'Closing server' );
            server.close(err => {
                if ( err ) {
                    return reject( err );
                }
                resolve();
            });
        });
    } );
}

if ( require.main === module ){
    runServer()
    .catch( err => console.log( err ) );
}


module.exports = { app, runServer, closeServer }; 