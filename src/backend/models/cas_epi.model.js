const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const cas_esiSchema = new Schema(
  {
        
    id : Number,
    NSS : Number,
    nom:{
        type : String, 
        required : true
        },
    prenom = {
        type : String, 
        required : true
        },
   
    date_naissance :{
            type : Date, 
            required : true
            }, 
    lieu_naissance :{
        type : String, 
        required : true
        },
    sexe : {
        type : String, 
        required : true
        },
    adresse :{
        type : String, 
        required : true
        }, 
     wilaya : {
        type : String, 
        required : true
        }, 
     hopital : {
        type : String, 
        required : true
        },
        
     Situation_actuelle : {
            type : String, 
            required : true
            },
    Date_debut_Contamination : {
        type : Date, 
        required : Date.now
        },
    Date_fin_traitment  : {
        type : Date, 
        required : Date.now
        },

    
    
    
  });

const cas_epi = mongoose.model('cas_epi', cas_esiSchema);

module.exports = cas_epi;

