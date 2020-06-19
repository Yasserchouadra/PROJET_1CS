import React, { Component } from 'react';
import Cas_Cat from './Cas_Cat';
import axios from 'axios';




class ListeCat extends Component {

      state = { 
          Liste_Cat: []
        }
///////////////////////////////////////////////////////////////////////////////////////////////////
         componentDidMount(){

          axios.get('http://localhost:5000/cas_cat/')
              .then( cas_cats => {
                                   this.setState({ Liste_Cat : cas_cats.data})   
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
                        <div className="mt-5 ml-auto col-lg-4" id="searchBar">
                          <input className="form-control" type="text" placeholder="Rechercher un cas catastrophique" aria-label="Search"></input>
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
                                              <th scope="col">nom_catastrophe</th>
                                              <th scope="col">wilaya</th>
                                              <th scope="col">hopital</th>
                                              <th scope="col">Etat</th>

                                  
                                      </tr>
                                </thead>
                                <tbody>
              {
              
              this.state.Liste_Cat.map(cas => {return <Cas_Cat item={cas} /> } )  }     
                                  <tr>
                                          {/* dernière ligne concernant le calcul de la moyenne générale */}
                                      <th><caption>Liste des Cas catastrophique </caption></th>
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
export default ListeCat; 