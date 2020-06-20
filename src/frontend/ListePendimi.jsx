import React, { Component } from 'react';
import Cas_Epi from './Cas_Epi';
import axios from 'axios';




class ListePendimi extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Liste_Epi: [],
      serchbar : ""
    };
this.handleChange = this.handleChange.bind(this)

  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////
          getlist(){
               axios.get('http://localhost:5000/cas_epi/')
                            .then( cas_epis => {
                             this.setState({ Liste_Epi : cas_epis.data})   
                              
                           })
                             .catch(function (error) { console.log(error); })
          }
///////////////////////////////////////////////////////////////////////////////////////////////////

  componentDidMount(){
          this.getlist();
                        }     
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

chercher (){

         const list = [...this.state.Liste_Epi];
          const list2=[];
           list.map(
             cas =>{
                      if( (cas.nom === this.state.serchbar)
                        || (cas.prenom === this.state.serchbar)
                        || (cas.nom_pendiment === this.state.serchbar)
                        || (cas.wilaya === this.state.serchbar)
                        ||( cas.hopital === this.state.serchbar)
                        ||( cas.sexe === this.state.serchbar)
  
                        ){     list2.push(cas);  }
                      
                    }
                   );
                      this.setState({Liste_Epi : list2})
                  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////
handleChange = event => {
        this.setState({ serchbar: event.target.value });

               };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////                        



  render() { 
        return  (

          <div className="container text-center">   
          <div>




                    <div className="container">
                         
                      <div className="row pl-5">
                          {/*Choix du categorie */}
                          <div class="dropdown">
                                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  Categorie
                                </a>

                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                  <a class="dropdown-item"  href="#">MORT </a>
                                  <a class="dropdown-item"  href="#">CONTAMINE</a>
                                  <a class="dropdown-item"  href="#">cava </a>
                                </div>
                            </div>




                          {/* Reset list */}
                           <div className="mt-5 ml-auto col-lg-4" id="searchBar2">
                               <button onClick={()=> this.getlist()}  className="btn btn-primary text-uppercase"> Tous La liste </button>
                              </div>
                          {/* Barre de recherche */}
                              <div className="mt-5 ml-auto col-lg-4" id="searchBar2">
                                <input onChange={this.handleChange} className="form-control" type="text" placeholder="Rechercher un cas pendimique" aria-label="Search"></input>
                              </div>
                             {/*  valider la crecherche  */}
                             <div className="mt-5 ml-auto col-lg-4" id="searchBar2">
                               <button onClick={()=> this.chercher()}  className="btn btn-primary text-uppercase"> Rechercher </button>
                              </div>

                      </div>
                    </div>
                    
                    
                    {/* Tableau des étudiants */}

                     <div id="liste_malade" >
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
                           <tbody >
                           {  
                            this.state.Liste_Epi.map(cas => {
                               
                                return <Cas_Epi key={cas} item={cas} /> 
                                
                                                       } )   
                              
                              }    
                           
                                          <tr>
                                                {/* dernière ligne concernant le calcul de la moyenne générale */}
                                            <th><caption> Liste des Cas pendeme </caption></th>
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