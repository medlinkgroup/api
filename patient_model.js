// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const Patient = new Schema(
  {
    firstName: String, 
    lastName: String, 
    phone: String, 
    photo: String,  
    email: String,
    place: String,
    doctorUid: String,
    objetUid: String,
    birthDate: String,
    location: {_id:false, latitude: Number, longitude: Number}
    
  }
);



    
// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Patient", Patient);