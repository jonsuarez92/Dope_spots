const mongoose = require("./connection");


 /////////////////
// models
////////////////

const { Schema, model } = mongoose;


// make schema
const spotsSchema = new Schema({
  name: String,
  url: String,
  
});

// make  model
const Spots = model("Spots", spotsSchema);


module.exports = Spots;

