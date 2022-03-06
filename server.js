// Import Our Dependencies
/////////////////////////////////////////////
require("dotenv").config(); // Load ENV Variables
console.log(process.env.DATABASE_URL)
const express = require("express"); // import express
const morgan = require("morgan"); //import morgan
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const path = require("path"); // built in node module we use to resolve paths more on this when we use it


/////////////////////////////////////////////
// Database Connection
/////////////////////////////////////////////
// Setup inputs for our connect function
const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Establish Connection
mongoose.connect(DATABASE_URL, CONFIG);

// Events for when connection opens/disconnects/errors
mongoose.connection
  .on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log(error));

  /////////////////
// models
////////////////

const { Schema, model } = mongoose;
/* 
const Schema = mongoose.Schema; same as above
const model = mongoose.model; same as above
*/



///////////////////////
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
app.use(express.static("public"));

////////////////////////////////////////////
// Routes
////////////////////////////////////////////
app.get("/", (req, res) => {
    res.send("your server is running... better catch it.");
  });

  //Index

  //New

  //Delete

  //UPDATE
  
  //Create

  //EDIT

  //SHOW 

const PORT = process.env.PORT;  
app.listen(PORT, () => 
console.log(`Now Listening on ${PORT}`));