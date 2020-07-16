// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const Medecin = new Schema(
  {
    firstName: String, 
    lastName: String, 
    phone: String, 
    photo: String,
    email: String, 
    birthDate : Date,
    field : String
  }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Medecin", Medecin);