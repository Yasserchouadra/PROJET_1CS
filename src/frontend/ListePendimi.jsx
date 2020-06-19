import React, { Component } from 'react';
import Cas_Epi from './Cas_Epi';
import axios from 'axios';




class ListePendimi extends Component {
  state = { 
    Liste_Epi: []
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////
  componentDidMount(){
  
    axios.get('http://localhost:5000/cas_epi/')
        .then( cas_epis => {
                             this.setState({ Liste_Epi : cas_epis.data})   
                             //console.log(cas_cats.data);
                              
                           })
        .catch(function (error) { console.log(error); })
                        }     
  /////////////////////////////////////////////////////////////////////
  
  render() { 
        return  (

          <div className="container text-center">   
                
          <div>
              <div className="container">
                         
                      <div className="row pl-5">
      
                          {/* Barre de recherche */}
                              <div className="mt-5 ml-auto col-lg-4" id="searchBar2">
                                <input className="form-control" type="text" placeholder="Rechercher un cas pendimique" aria-label="Search"></input>
                              </div>
                      </div>
                  </div>
                {/* Tableau des étudiants */}
                         <div >
                             <table className=" table">
                               <div className="container">                               
                                       <thead>
                                            <tr>
                                                    <th scope="col">NSS</th>
                                                    <th scope="col">Nom</th>
                                                    <th scope="col">Prénom</th>
                                                    <th scope="col">sexe</th>
                                                    <th scope="col">adresse</th>
                                                    <th scope="col">lieu_naissance</th>
                                                    <th scope="col">nom_Pendemi</th>
                                                    <th scope="col">wilaya</th>
                                                    <th scope="col">hopital</th>
                                                    <th scope="col">Etat actulle</th>
      
                                        
                                            </tr>
                                      </thead>
                                      <tbody>
                    {
                    
                    this.state.Liste_Epi.map(cas => {return <Cas_Epi item={cas} /> } )  }     
                                        <tr>
                                                {/* dernière ligne concernant le calcul de la moyenne générale */}
                                            <th><caption>Liste des Cas pendeme </caption></th>
                                            <td></td>
                                            <td></td>
                                         </tr>
                                    
                                    
                                      </tbody>
                                  </div>                                
      
                                    </table>
                                </div>
           
          </div>               
       </div>


                );
    }
}
export default ListePendimi;