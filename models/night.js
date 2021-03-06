const mongoose = require("./connection");


 /////////////////
// models
////////////////

const { Schema, model } = mongoose;


// make schema
const nightsSchema = new Schema({
  name: String,
  url: String,
  img: String,
  details: String,
});

// make  model
const Nights = model("Nights", nightsSchema);


module.exports = Nights;
