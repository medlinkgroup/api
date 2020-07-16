// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const Accelerometre = new Schema(
  {
    deviceID: String, 
    date: String, 
    accelerometerXValues: Array,
    accelerometerYValues: Array,
    accelerometerZValues: Array
  }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Accelerometre", Accelerometre);
