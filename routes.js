var express = require('express');

const Medecin = require("./medcin_model");
var Consultation = require("./consultation_model");
var Patient = require("./patient_model");
var Temperature = require("./temperature_model");
var Accelerometre = require("./accelerometre_model");
var Objet = require("./objet_model");
var myRouter = express.Router(); 
myRouter.route('/')
.all(function(req,res){ 
    res.send("hello");
});
// objects
myRouter.route('/objets')
    .get(function(req,res){ 
        Objet.find(function(err, objets){
            if (err){
                res.send(err); 
            }
            res.json(objets);  
        }); 
    }) 
    .post(function(req,res){
        console.log(" we are in consultation section");
        var objet = new Objet(
            {
                name : req.body.name,
                isAttributed : req.body.isAttributed
            }
        );
        objet.save()
        .then(response => {
            console.log("object saved")
            res.json({message : 'Bravo, ton objet est maintenant stockée en base de données'});
        })
        .catch(err => {
            console.log("error objet")
            res.send(err);
        })
    
}); 

myRouter.route('/objets/:objet_id')
.get(function(req,res){ 
    Objet.findById(req.params.objet_id, function(err, object) {
            if (err)
                res.send(err);
            res.json(object);
        });
})
.put(function(req,res){ 
    Objet.findById(req.params.objet_id, function(err, objet) {
        if (err){
            res.send(err);
        }
        objet.name = req.body.name;
        objet.isAttributed = req.body.isAttributed;
        objet.save(function(err){
            if(err){
                res.send(err);
            }
            res.json({message : 'Bravo, mise à jour des données OK'});
        });                
    });
})
.delete(function(req,res){ 

    Objet.remove({_id: req.params.objet_id}, function(err, objet){
        if (err){
            res.send(err); 
        }
        res.json({message:"Bravo, objet supprimée"}); 
    }); 
    
}
);

// consultations
myRouter.route('/consultations')
    .get(function(req,res){ 
        Consultation.find(function(err, consultations){
            if (err){
                res.send(err); 
            }
            res.json(consultations);  
        }); 
    })  
    .post(function(req,res){
        console.log(" we are in consultation section");
        var consultation = new Consultation(
            {
                title : req.body.title,
                description : req.body.description,
                doctorUid : req.body.doctorUid,
                patientUid : req.body.patientUid,
                date : req.body.date,
                appointmentTime : req.body.appointmentTime,
                timeEnd : req.body.timeEnd
            });
        

        consultation.save()
        .then(response => {
            console.log("consultation saved")
            res.json({message : 'Bravo, ton evenement est maintenant stockée en base de données'});
        })
        .catch(err => {
            console.log("error consultation")
            res.send(err);
        })
}); 

myRouter.route('/consultations/:consultation_id')
.get(function(req,res){ 
    Consultation.findById(req.params.consultation_id, function(err, consultation) {
            if (err)
                res.send(err);
            res.json(consultation);
        });
})
.put(function(req,res){ 
    Consultation.findById(req.params.consultation_id, function(err, consultation) {
        if (err){
            res.send(err);
        }
        consultation.title = req.body.title,

        consultation.description = req.body.description,
        consultation.doctorUid = req.body.doctorUid,
        consultation.patientUid = req.body.patientUid,
        consultation.date = req.body.date,
        consultation.appointmentTime = req.body.appointmentTime,
        consultation.timeEnd = req.body.timeEnd
        consultation.save(function(err){
            if(err){
                res.send(err);
            }
            res.json({message : 'Bravo, mise à jour des données OK'});
        });                
    });
})
.delete(function(req,res){ 

    Consultation.remove({_id: req.params.consultation_id}, function(err, consultation){
        if (err){
            res.send(err); 
        }
        res.json({message:"Bravo, Consultation supprimée"}); 
    }); 
    
}
);

// medecins
myRouter.route('/medecins')
    .get(function(req,res){ 
        Medecin.find(function(err, medecin){
            if (err){
                res.send(err); 
            }
            res.json(medecin);  
        }); 
    })  
    .post(function(req,res){
        console.log(" we are in consultation section");
        
        // medecins
            var medecin = new Medecin({

                firstName: req.body.firstName, 
                lastName: req.body.lastName, 
                phone: req.body.phone, 
                photo: req.body.photo,
                email: req.body.email, 
                birthDate : req.body.birthDate,
                field : req.body.field
            });

            medecin.save()
            .then(repsponse => {
                console.log("good saved")
            })
            .catch(err => {
                console.log("error")
            })
}); 
myRouter.route('/medecins/:medecin_id')
.get(function(req,res){ 
    Medecin.findById(req.params.medecin_id, function(err, medecin) {
            if (err)
                res.send(err);
            res.json(medecin);
        });
})
.put(function(req,res){ 
    Medecin.findById(req.params.medecin_id, function(err, medecin) {
        if (err){
            res.send(err);
        }
        medecin.firstName = req.body.firstName, 
        medecin.lastName= req.body.lastName, 
        medecin.phone= req.body.phone, 
        medecin.photo= req.body.photo,
        medecin.email= req.body.email, 
        medecin.birthDate = req.body.birthDate,
        medecin.field = req.body.field
        consultation.save(function(err){
            if(err){
                res.send(err);
            }
            res.json({message : 'Bravo, mise à jour des données OK'});
        });                
    });
})
.delete(function(req,res){ 

    Medecin.remove({_id: req.params.medecin_id}, function(err, medecin){
        if (err){
            res.send(err); 
        }
        res.json({message:"Bravo, Medecin supprimée"}); 
    }); 
    
}
);


// patients
myRouter.route('/patients')
.get(function(req,res){ 
	Patient.find(function(err, patients){
        if (err){
            res.send(err); 
        }
        res.json(patients);  
    }); 
})  
.post(function(req,res){
    var patient = new Patient({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        phone : req.body.phone,
        photo : req.body.photo, 
        email : req.body.email, 
        doctorUid : req.body.doctorUid,
        objetUid : req.body.objetUid,
        place : req.body.place,
        birthDate : req.body.birthDate,
        location : req.body.location
       
    });
   // event.address = req.body.address; 

    patient.save()
    .then(response => {
        console.log("patient saved")
        res.json({message : 'Bravo, ton evenement est maintenant stockée en base de données'});
    })
    .catch(err => {
        console.log("error patiens")
        res.send(err);
    })
    
}); 

myRouter.route('/patients/:patient_id')
.get(function(req,res){ 
    Patient.findById(req.params.patient_id, function(err, patient) {
            if (err)
                res.send(err);
            res.json(patient);
        });
})
.put(function(req,res){ 
    Patient.findById(req.params.patient_id, function(err, patient) {
        if (err){
            res.send(err);
        }
        patient.firstName = req.body.firstName,
        patient.lastName = req.body.lastName,
        patient.phone = req.body.phone,
        patient.photo = req.body.photo, 
        patient.email = req.body.email, 
        patient.doctorUid = req.body.doctorUid,
        patient.objetUid = req.body.objetUid,
        patient.place = req.body.place,
        patient.birthDate = req.body.birthDate,
        patient.location = req.body.location
      
        patient.save(function(err){
            if(err){
                res.send(err);
            }
            res.json({message : 'Bravo, mise à jour des données OK'});
        });                
    });
})
.delete(function(req,res){ 

    Patient.remove({_id: req.params.patient_id}, function(err, patient){
        if (err){
            res.send(err); 
        }
        res.json({message:"Bravo, patient supprimée"}); 
    }); 
    
}
);
// temperatures
myRouter.route('/temperatures')
.get(function(req,res){ 
	Temperature.find(function(err, temperatures){
        if (err){
            res.send(err); 
        }
        res.json(temperatures);  
    }); 
})  
.post(function(req,res){
    var temperature = new Temperature({
        deviceID : req.body.deviceID,
        date : req.body.date,
        tempValues : req.body.tempValues 
    });
   // event.address = req.body.address; 
  
    temperature.save()
    .then(response => {
        console.log("temperature saved")
        res.json({message : 'Bravo, ton evenement est maintenant stockée en base de données'});
    })
    .catch(err => {
        console.log("error temperature")
        res.send(err);
    })
    
}); 

// accelerometres
myRouter.route('/accelerometres')
.get(function(req,res){ 
	Accelerometre.find(function(err, accelerometres){
        if (err){
            res.send(err); 
        }
        res.json(accelerometres);  
    }); 
})  
.post(function(req,res){
    
    var accelerometre = new Accelerometre({
        deviceID : req.body.deviceID,
        date : req.body.date,
        accelerometerXValues : req.body.accelerometerXValues,
        accelerometerYValues : req.body.accelerometerYValues,
        accelerometerZValues : req.body.accelerometerZValues  
    });
   // event.address = req.body.address; 
  
   accelerometre.save()
    .then(response => {
        console.log("accelerometre saved")
        res.json({message : 'Bravo, ton evenement est maintenant stockée en base de données'});
    })
    .catch(err => {
        console.log("error accelerometre")
        res.send(err);
    })
    
}); 

myRouter.route('/send_email')
.post(function(req,res){

      console.log("test");
      var dest = req.body.email
      var msg = req.body.msg

      let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            // should be replaced with real sender's account
            user: 'tongmail@gmail.com',
            pass: 'mot de passe application'
        }
    });
    let mailOptions = {
        // should be replaced with real recipient's account
        to: dest,
        subject: "Bravo Réservation confirmée ",
        body: msg,
        html: msg
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
    res.end();

});





module.exports = myRouter;

