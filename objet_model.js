// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const Objet = new Schema(
  {
    name: String,
    isAttributed: Boolean 
  }
);


// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Objet", Objet);