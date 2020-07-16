// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const Consultation = new Schema(
  {
    title: String, 
    description: String, 
    doctorUid: String, 
    patientUid: String,  
    date : Date,
    appointmentTime : String, 
    timeEnd : String
  }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Consultation", Consultation);