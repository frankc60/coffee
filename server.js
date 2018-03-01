const express = require("express");

const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use( express.static( "client" ) );

app.get('/', function (req, res) {
    res.contentType
    res.render( __dirname + "/server/views/index.ejs" );
 })



const server = app.listen(3000,  () => {

    var host = server.address().address;
    var port = server.address().port;
 
    console.log("server listening at http://%s:%s", host, port)
 })
 