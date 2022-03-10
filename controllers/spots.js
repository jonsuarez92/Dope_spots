const express = require("express");
const Spots = require("../models/spot");

//Create Router

const router = express.Router();

router.get('/seed', (req, res) => {
    // array of starter resturants
    const startSpots = [
      { name: "Catch", url: "https://www.catchrestaurants.com/",  },
      { name: "Barking Dog", url: "",  },
      { name: "Kefi", url: "",  },
      { name: "Flex Mussels", url: "",  },
      { name: "Pepe Rosso To Go", url: "", },
      { name: "Nobu", url: "https://www.noburestaurants.com/fifty-seven/home/"}
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
  router.get('/', (req, res) => {
    Spots.find({})
    .then((spots) => {
      res.render("spots/Index",{ spots })
  })
  .catch((error) => {
      res.status(400).json({ error })
  })
});
  //New
  router.get('/new', (req, res) => {
    res.render('spots/New')
})
  //Delete

  router.delete("/:id", (req, res) => {
    // get the id from params
    const id = req.params.id;
    // delete the resturant
    Spots.findByIdAndRemove(id)
      .then((spot) => {
        // redirect to main page after deleting
        res.redirect("/spots");
      })
      // send error as json
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
  });

  //UPDATE
  
  router.put("/:id", (req, res) => {
    // get the id from params
    const id = req.params.id;
    // check if the readyToEat property should be true or false
    
    // update the resturants
    Spots.findByIdAndUpdate(id, req.body, { new: true })
      .then((spot) => {
        // redirect to main page after updating
        res.redirect("/spots");
      })
      // send error as json
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
  });
  
  //Create

router.post("/", (req, res) => {
  // check if the readyToEat property should be true or false
  // req.body.readyToEat = req.body.readyToEat === "on" ? true : false;
  // create the New fruit
  Spots.create(req.body)
    .then((spots) => {
      // redirect user to Index page if successfully created item
      res.redirect("/spots");
    })
    // send error as json
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
});



  //EDIT
  router.get("/:id/edit", (req, res) => {
    // get the id from params
    const id = req.params.id;
    // get the resturant from the database
    Spots.findById(id)
      .then((spot) => {
        // render Edit page and send resturant data
        res.render("spots/Edit.jsx", { spot });
      })
      // send error as json
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
  });

  //SHOW 

  router.get("/:id", (req, res) => {
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



module.exports = router;