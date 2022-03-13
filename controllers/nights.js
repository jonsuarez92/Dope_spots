const express = require("express");
const Nights = require("../models/night");

//Create Router

const router = express.Router();


  router.get("/seed", (req, res) => {
    // array of starter resturants
    const startNight = [
      { name: "Jakes Dilemma", url: "https://www.jakesdilemmanyc.com/",  },
      { name: "Sarah East", url: "https://www.instagram.com/saharaeastnyc/?hl=en",  },
     ];
  
    // Delete all 
    Nights.deleteMany({}).then((data) => {
      // Seed Starter Nights
      Nights.create(startNight).then((data) => {
        // send created nightlife as response to confirm creation
        res.json(data);
      })
    }).catch((err)=>{
      res.status(400).send(err)
    })
  })

  //Index
  router.get('/', (req, res) => {
    Nights.find({})
    .then((night) => {
      res.render("nights/Index",{ night })
  })
  .catch((error) => {
      res.status(400).json({ error })
  })
});

  //New
  router.get('/new', (req, res) => {
    res.render('nights/New')
})
  //Delete

  router.delete("/:id", (req, res) => {
    // get the id from params
    const id = req.params.id;
    // delete the resturant
    Nights.findByIdAndRemove(id)
      .then((night) => {
        // redirect to main page after deleting
        res.redirect("/nights");
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
    Nights.findByIdAndUpdate(id, req.body, { new: true })
      .then((night) => {
        // redirect to main page after updating
        res.redirect("/nights");
      })
      // send error as json
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
  });
  
  //Create

router.post("/", (req, res) => {
 
  // create the New fruit
  Nights.create(req.body)
    .then((night) => {
      // redirect user to Index page if successfully created item
      res.redirect("/nights");
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
    Nights.findById(id)
      .then((night) => {
        // render Edit page and send resturant data
        res.render("nights/Edit.jsx", { night });
      })
      // send error as json
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
  });

//   //SHOW 

  router.get("/:id", (req, res) => {
    // get the id from params
    const id = req.params.id;
  
    // find the particular spot from the database
    Nights.findById(id)
      .then((night) => {
        // render the template with the data from the database
        res.render("nights/Show", { night});
      })
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
  });


module.exports = router;