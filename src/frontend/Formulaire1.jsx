import React, { Component } from 'react';
import axios from 'axios';
import ReactDom from 'react-dom';
import HomeEP from './HomeEP';

<<<<<<< HEAD
=======

>>>>>>> parent of f53ceae... Front partie 6




class Formualaire1 extends Component {

   constructor(props) {
      super(props);
      this.state = {
         NSS: 0,
         nom :"",
         prenom :"",    
         nom_pendiment :"",
         lieu_naissance :"",
         //date de naissance apres je vais la faire 
         
         sexe :"",
         adresse :"",
         wilaya :"",

         
         
         hopital:"",
         Situation_actuelle  :"",
         //date de debut de contamination  apres je vais la faire 
         
         cas_contamine : false,
         cas_mort : false ,
         cas_cava : false
      };
  
    }
            
  /////////////////////////////////////////////////////////////

  changer = (event) => {
   this.setState({ [event.target.name] : event.target.value  });

                          };
/////////////////////////////////////
ajouter1= event => {
   try {
            console.log("debut de insertion ....");
            console.log(this.state.nom);
          console.log(this.state.prenom);
    const newcas_epi ={
       NSS  : this.state.NSS ,
       nom : this.state.nom ,
       prenom: this.state.prenom ,
       
       nom_pendiment : this.state.nom_pendiment ,
       lieu_naissance : this.state.lieu_naissance ,
       //d ate de naissance apres je vais la faire 
       
       sexe : this.state.sexe ,
       adresse : this.state.adresse ,
       wilaya : this.state.wilaya ,
       
       
       hopital : this.state.hopital ,
       Situation_actuelle : "mort" ,
       //date de debut de contamination  apres je vais la faire 
       
       cas_contamine : false,
       cas_mort : false ,
       cas_cava : false

    } ; 

    if(   newcas_epi.Situation_actuelle === "contamine"      ){        newcas_epi.cas_contamine = true;  };
    if(   newcas_epi.Situation_actuelle === "mort"        ){           newcas_epi.cas_mort = true ;      };
    if(   newcas_epi.Situation_actuelle === "gueri"       ){          newcas_epi.cas_cava =true ;       };

            console.log(newcas_epi);

<<<<<<< HEAD
                  axios.post("http://localhost:5000/cas_epi/add",{newcas_epi })
                         .then( res => {
                                 ReactDom.render(<HomeEP  />,document.getElementById('form'));                                  
                                   })
                        .catch(function (error) { console.log(error); })
=======
       axios.post('http://localhost:5000/cas_epi/add',{newcas_epi })
      .then( res => {
                console.log("********************************************");              
                console.log(" j insert un nouveau cas qui a comme infos : \n ");                                            
                console.log(res);
                console.log("********************************************");                  
})
  .catch(function (error) { console.log(error); })
>>>>>>> parent of f53ceae... Front partie 6
  
   } catch (error) {
      console.log(error);
      
   }
   ReactDom.render(<HomeEP  />,document.getElementById('root'));   

}
<<<<<<< HEAD
                               
=======
      
////////////////////////////////////// 
       



  
                          
>>>>>>> parent of f53ceae... Front partie 6
   ////////////////////////////////////////////////////////
  render() { 
 
      
        return  (
<<<<<<< HEAD

        <div>
      <div >  
        <h1> Formulaire ajout d'un cas pendemie   </h1>   
=======
     <div >  
        <h1> Formulaire ajout d'un cas pendemie   </h1>

    
>>>>>>> parent of f53ceae... Front partie 6
        <div>
                <br/>
                <div class="container">
                    <form onSubmit={this.ajouter1}  method="post">
                        <div style={{width: '30%'}} class="form-group1">
                            <input  type="number" className="NSS1" name="NSS" value={this.state.NSS}  onChange={this.changer}  placeholder="NSS"/>
                        </div>
                        <br/>
                        <div style={{width: '30%'}} className="form-group2">
                                <input  type="text" className="nom2" name="nom" value={this.state.nom}  onChange={this.changer}  placeholder="nom"/>
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
                        <div style={{width: '30%'}} className="form-group8">
                                <input  type="text" className="form-control8" name="hopital" value={this.state.hopital}  onChange={this.changer}  placeholder="hopital"/>
                        </div>
                        <br/>
                        <div style={{width: '30%'}} className="form-group9">
                                 <input  type="text" className="form-control9" name="nom_pendiment" value={this.state.nom_pendiment}  onChange={this.changer}  placeholder="nom_pendiment"/>
                        </div>
                        <br/>
                        <div style={{width: '30%'}} className="form-group10">
                                <input  type="text" className="form-control10" name="Situation_actuelle" value={this.state.Situation_actuelle}  onChange={this.changer}  placeholder="Situation_actuelle"/>
                        </div>
                        <br/>

<<<<<<< HEAD
                         <div style={{width: '30%'}}>
                            <button class="btn btn-success" type="submit"> ajouter   </button>
=======





                        <div style={{width: '30%'}}>
                            <button class="btn btn-success" type="submit">Ajouter Cas</button>
>>>>>>> parent of f53ceae... Front partie 6
                        </div> 
                    </form>
                </div>
            </div>
     
       </div>
     );
    }
}
export default Formualaire1;