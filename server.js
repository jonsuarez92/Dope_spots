// Import Our Dependencies
/////////////////////////////////////////////
require("dotenv").config(); // Load ENV Variables
console.log(process.env.DATABASE_URL)
const express = require("express"); // import express
const morgan = require("morgan"); //import morgan
const methodOverride = require("method-override");
const mongoose = require("mongoose");
//const Spots = require('./models/spots'); // importing fruits from wherever it is
const path = require("path"); // built in node module we use to resolve paths more on this when we use it
// const { stringify } = require("querystring");


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



// make fruits schema
const spotsSchema = new Schema({
  name: String,
  url: String,
  
});

// make fruit model
const Spots = model("Dopespots", spotsSchema);

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
    res.send("your server is running");
  });

  app.get("/spots/seed", (req, res) => {
    // array of starter fruits
    const startSpots = [
      { name: "Catch", url: "",  },
      { name: "Barking Dog", url: "",  },
      { name: "Kefi", url: "",  },
      { name: "Flex Mussels", url: "",  },
      { name: "Pepe Rosso To Go", url: "", },
    ];
  
    // Delete all 
    Spots.deleteMany({}).then((data) => {
      // Seed Starter spotss
      Spots.create(startSpots).then((data) => {
        // send created fruits as response to confirm creation
        res.json(data);
      })
    }).catch((err)=>{
      res.status(400).send(err)
    })
  })

  //Index
  app.get('/spots', (req, res) => {
    Spots.find({})
    .then((spots) => {
      res.render("spots/Index",{ spots })
  })
  .catch((error) => {
      res.status(400).json({ error })
  })
});
  //New
  app.get('/spots/new', (req, res) => {
    res.render('spots/New')
})
  //Delete

  //UPDATE
  
  //Create

  //EDIT

  //SHOW 

  app.get("/spots/:id", (req, res) => {
    // get the id from params
    const id = req.params.id;
  
    // find the particular spot from the database
    Spots.findById(id)
      .then((spot) => {
        // render the template with the data from the database
        res.render("spots/Show", { spot});
      })
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
  });

const PORT = process.env.PORT;  
app.listen(PORT, () => 
console.log(`Now Listening on ${PORT}`));