import React, { Component } from 'react';

class Formualaire1 extends Component {

  render() { 
        return  (
     <div >  
        <h1> Formulaire ajout d'un cas pendemie   </h1>
 
     <form >
     <input    type="email" className="form-control" id="emailInput" placeholder="NOM"></input>
     <input    type="email" className="form-control" id="emailInput1" placeholder="PRENOM "></input>
     <input    type="email" className="form-control" id="emailInput2" placeholder="SEXE "></input>
     <input    type="email" className="form-control" id="emailInput3" placeholder="ADRESSE "></input>
     <input    type="email" className="form-control" id="emailInput4" placeholder="HOPITAL "></input>
     <input    type="email" className="form-control" id="emailInput5" placeholder="WILLAYA "></input>
     <input    type="email" className="form-control" id="emailInput6" placeholder="SITUATION ACTUELLE "></input>
     <input    type="email" className="form-control" id="emailInput7" placeholder="DATE NAISSANCE "></input>
     <input    type="email" className="form-control" id="emailInput8" placeholder="NOM PENDIME "></input>
     <input    type="email" className="form-control" id="emailInput9" placeholder="lieu_naissance "></input>
     <input    type="email" className="form-control" id="emailInput10" placeholder="Adresse "></input>
     <input    type="email" className="form-control" id="emailInput11" placeholder="Adresse "></input>
     <input    type="email" className="form-control" id="emailInput12" placeholder="Adresse "></input>
     <input    type="email" className="form-control" id="emailInput13" placeholder="Adresse "></input>
                          
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
     );
    }
}
export default Formualaire1;