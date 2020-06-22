import React, { Component } from 'react';
import axios from 'axios';
import ReactDom from 'react-dom';
import HomeEP from './HomeEP';
import {Router, Route,Link} from "react-router";




class Formualaire2 extends Component {

   constructor(props) {
      super(props);
      this.state = {
         NSS: 0,
         nom :"",
         prenom :"",
         
         nom_catastrophe :"",
         lieu_naissance :"",
         date_naissance :null,
         
         sexe :"",
         adresse :"",
         wilaya :"",

         
         Date_debut_blessure:null,
         hopital:"",
         Situation_actuelle  :"",
         cas_contamine : false,
         cas_mort : false ,
         cas_cava : false
      };
  
    }
              
  /////////////////////////////////////////////////////////////
      
  /////////////////////////////////////////////////////////////
  changer = (event) => {
   this.setState({ [event.target.name] : event.target.value  });

                          };
/////////////////////////////////////
ajouter1= event => {
   try {

        console.log("ajouter 1 debut ");
        
        const newcas_cat ={
                NSS  : this.state.NSS ,
                nom : this.state.nom ,
                prenom: this.state.prenom ,
                
                nom_catastrophe : this.state.nom_catastrophe ,
                lieu_naissance : this.state.lieu_naissance ,
                date_naissance : this.state.date_naissance,       
                Date_debut_blessure :this.state.Date_debut_blessure,
                sexe : this.state.sexe ,
                adresse : this.state.adresse ,
                wilaya : this.state.wilaya ,
                
                
                hopital : this.state.hopital ,
                Situation_actuelle : this.state.Situation_actuelle ,
                
                cas_contamine : false,
                cas_mort : false ,
                cas_cava : false
 

                          } ; 

    if(   newcas_cat.Situation_actuelle === "blesse"      ){        newcas_cat.cas_blesse = true;  };
    if(   newcas_cat.Situation_actuelle === "mort"        ){           newcas_cat.cas_mort = true ;      };
    if(   newcas_cat.Situation_actuelle === "gueri"       ){          newcas_cat.cas_cava =true ;       };

                          console.log(newcas_cat);

                  axios.post("http://localhost:5000/cas_cat/add",{newcas_cat })
                          .then( res => {
                                  // ReactDom.render(<HomeEP  />,document.getElementById('root'));                                  
                                   })
                          .catch(function (error) { console.log(error); })
  
                                      } catch (error) {
                                       console.log(error); 
                                         }
}
                        
   ////////////////////////////////////////////////////////
  render() { 
 
      
        return  (
              <div>              
             <div >  
        <h1> Formulaire ajout d'un cas catastrophique   </h1>
      <div>
                <br/> 
                <div class="container">
                    <form onSubmit={this.ajouter1}  >
                        <div style={{width: '30%'}} class="form-group1">
                            <input  type="number" className="NSS1" name="NSS" value={this.state.NSS}  onChange={this.changer}  placeholder="NSS"/>
                        </div>
                        <br/>
                        <div style={{width: '30%'}} className="form-group2">
                                 <input  type="text" className="form-control3" name="nom" value={this.state.nom}  onChange={this.changer}  placeholder="nom"/>
                         </div>
                        <br/>
                        <div style={{width: '30%'}} className="form-group3">
                                <input  type="text" className="form-control3" name="prenom" value={this.state.prenom}  onChange={this.changer}  placeholder="prenom"/>
                        </div>
                        <br/>
                        <div style={{width: '30%'}} className="form-group4">
                                <input  type="text" className="form-control4" name="sexe" value={this.state.sexe}  onChange={this.changer}  placeholder="sexe"/>
                        </div>
                        <br/>
                        <div style={{width: '30%'}} className="form-group5">
                                <input  type="text" className="form-control5" name="adresse" value={this.state.adresse}  onChange={this.changer}  placeholder="adresse"/>
                        </div>
                        <br/>
                        <div style={{width: '30%'}} className="form-group6">
                                <input  type="text" className="form-control6" name="wilaya" value={this.state.wilaya}  onChange={this.changer}  placeholder="wilaya"/>
                        </div>
                        <br/>
                        <div style={{width: '30%'}} className="form-group7">
                                <input  type="text" className="form-control7" name="lieu_naissance" value={this.state.lieu_naissance}  onChange={this.changer}  placeholder="lieu_naissance"/>
                        </div>
                        <br/>
                        <div >
                        <input type="date" max="2025-08-00" min="1940-00-00" name="date_naissance" value={this.state.date_naissance}  onChange={this.changer}  ></input>
    
                        </div>
                        <br/>
                        <div >
                        <input type="date" max="2025-08-00" min="1940-00-00" name="Date_debut_blessure" value={this.state.Date_debut_blessure}  onChange={this.changer}  ></input>
                        
                        </div>
                        <br/>
                        <div style={{width: '30%'}} className="form-group8">
                                <input  type="text" className="form-control8" name="hopital" value={this.state.hopital}  onChange={this.changer}  placeholder="hopital"/>
                        </div>
                        <br/>
                        <div style={{width: '30%'}} className="form-group9">
                                <input  type="text" className="form-control9" name="nom_catastrophe" value={this.state.nom_catastrophe}  onChange={this.changer}  placeholder="nom_pendiment"/>
                        </div>
                        <br/>
                        <div style={{width: '30%'}} className="form-group10">
                                <input  type="text" className="form-control10" name="Situation_actuelle" value={this.state.Situation_actuelle}  onChange={this.changer}  placeholder="Situation_actuelle"/>
                        </div>
                        <br/>


                        <div style={{width: '30%'}}>
                            <button class="btn btn-success" type="submit">  Ajouter      </button>
                        </div> 
                    </form>
                </div>
            </div>
     
       </div>
</div>
     );
    }
}
export default Formualaire2;