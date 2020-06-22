import React, { Component } from 'react';


class Cas_Cat extends Component {
    
        state={ 
            NSS : "",
            nom : "",
            prenom : "",
            sexe : "",
            adresse: "",
            lieu_naissance: "",
            nom_catastrophe : "",
            wilaya  : "",
            hopital : "",
            Situation_actuelle : ""  
           }
        /////////////////////////////////////////// ///////////////////////////////////////////
        componentDidMount(){this.setState({
            NSS : this.props.item.NSS,
            nom : this.props.item.nom,
            prenom :this.props.item.prenom,
            sexe : this.props.item.sexe,
            adresse: this.props.item.adresse,
            lieu_naissance: this.props.item.lieu_naissance,
            nom_catastrophe :this.props.item.nom_catastrophe,
            wilaya  : this.props.item.wilaya,
            hopital : this.props.item.hopital,
            Situation_actuelle :this.props.item.Situation_actuelle  

        })  }  
      
       /////////////////////////////////////////// ///////////////////////////////////////////
         
    render() { 

        return  (
         
  <tr>
    <td>{this.props.item.NSS}</td>
    <td>{this.props.item.nom}</td>
    <td>{this.props.item.prenom}</td>  
    <td>{this.props.item.sexe}</td>  
    <td>{this.props.item.adresse}</td>  
    <td>{this.props.item.lieu_naissance}</td>  
    <td>{this.props.item.nom_catastrophe}</td>  
    <td>{this.props.item.wilaya}</td>  
    <td>{this.props.item.hopital}</td>  
    <td>{this.props.item.Situation_actuelle}</td>  

  
   </tr>
        
        );
    }
   
}
 
export default Cas_Cat;
