// Import Our Dependencies
/////////////////////////////////////////////
require("dotenv").config(); // Load ENV Variables
const express = require("express"); // import express
const morgan = require("morgan"); //import morgan
const methodOverride = require("method-override");
const spotController = require('./controllers/spots');
const path = require("path"); // built in node module we use to resolve paths more on this when we use it
// const { stringify } = require("querystring");


//////////////////////
// app object setup////
///////////////////////

const app = express()
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx')

////////////////////
// Middleware///////
////////////////////

app.use(morgan("tiny")); // logging
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(express.static("Public"));

////////////////////////////////////////////
// Routes
////////////////////////////////////////////
app.use('/spots', spotController)
app.get("/", (req, res) => {
    res.send("your server is running");
  });



const PORT = process.env.PORT;  
app.listen(PORT, () => 
console.log(`Now Listening on ${PORT}`));