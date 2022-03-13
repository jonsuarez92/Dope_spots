// Import Our Dependencies
/////////////////////////////////////////////
require("dotenv").config(); // Load ENV Variables
const express = require("express"); // import express
const morgan = require("morgan"); //import morgan
const methodOverride = require("method-override");
const spotController = require('./controllers/spots');
const nightController = require('./controllers/nights');
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
app.use(express.static("public"));

////////////////////////////////////////////
// Routes
////////////////////////////////////////////
app.use('/spots', spotController)
app.use('/nights', nightController)
app.get("/", (req, res) => {
    res.send("your server is running");
  });

//   app.get("/nights/seed", (req, res) => {
//     // array of starter resturants
//     const startNight = [
//       { name: "Jakes Dilemma", url: "https://www.jakesdilemmanyc.com/",  },
//       { name: "Sarah East", url: "https://www.instagram.com/saharaeastnyc/?hl=en",  },
//      ];
  
//     // Delete all 
//     Nights.deleteMany({}).then((data) => {
//       // Seed Starter Nights
//       Nights.create(startNight).then((data) => {
//         // send created nightlife as response to confirm creation
//         res.json(data);
//       })
//     }).catch((err)=>{
//       res.status(400).send(err)
//     })
//   })

//   //Index
//   app.get('/nights', (req, res) => {
//     Nights.find({})
//     .then((nights) => {
//       res.render("nights/Index",{ nights })
//   })
//   .catch((error) => {
//       res.status(400).json({ error })
//   })
// });

//   //New
//   app.get('/spots/new', (req, res) => {
//     res.render('spots/New')
// })
//   //Delete

//   app.delete("/spots/:id", (req, res) => {
//     // get the id from params
//     const id = req.params.id;
//     // delete the resturant
//     Spots.findByIdAndRemove(id)
//       .then((spot) => {
//         // redirect to main page after deleting
//         res.redirect("/spots");
//       })
//       // send error as json
//       .catch((error) => {
//         console.log(error);
//         res.json({ error });
//       });
//   });

//   //UPDATE
  
//   app.put("/spots/:id", (req, res) => {
//     // get the id from params
//     const id = req.params.id;
//     // check if the readyToEat property should be true or false
    
//     // update the resturants
//     Spots.findByIdAndUpdate(id, req.body, { new: true })
//       .then((spot) => {
//         // redirect to main page after updating
//         res.redirect("/spots");
//       })
//       // send error as json
//       .catch((error) => {
//         console.log(error);
//         res.json({ error });
//       });
//   });
  
//   //Create

// app.post("/spots", (req, res) => {
//   // check if the readyToEat property should be true or false
//   // req.body.readyToEat = req.body.readyToEat === "on" ? true : false;
//   // create the New fruit
//   Spots.create(req.body)
//     .then((spots) => {
//       // redirect user to Index page if successfully created item
//       res.redirect("/spots");
//     })
//     // send error as json
//     .catch((error) => {
//       console.log(error);
//       res.json({ error });
//     });
// });



//   //EDIT
//   app.get("/spots/:id/edit", (req, res) => {
//     // get the id from params
//     const id = req.params.id;
//     // get the resturant from the database
//     Spots.findById(id)
//       .then((spot) => {
//         // render Edit page and send resturant data
//         res.render("spots/Edit.jsx", { spot });
//       })
//       // send error as json
//       .catch((error) => {
//         console.log(error);
//         res.json({ error });
//       });
//   });

//   //SHOW 

//   app.get("/spots/:id", (req, res) => {
//     // get the id from params
//     const id = req.params.id;
  
//     // find the particular spot from the database
//     Spots.findById(id)
//       .then((spot) => {
//         // render the template with the data from the database
//         res.render("spots/Show", { spot});
//       })
//       .catch((error) => {
//         console.log(error);
//         res.json({ error });
//       });
//   });

const PORT = process.env.PORT;  
app.listen(PORT, () => 
console.log(`Now Listening on ${PORT}`));