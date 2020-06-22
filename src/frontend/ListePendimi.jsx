import React, { Component } from 'react';
import Cas_Epi from './Cas_Epi';
import axios from 'axios';




class ListePendimi extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Liste_Epi: [],
      serchbar : "",
      categorie : " Tous les cas  "
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
                        ||( cas.adresse === this.state.serchbar)
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

afficher_mort= event => {
    this.setState({categorie : " Mort "});
  const list = [...this.state.Liste_Epi];
        const list2=[];
        list.map(
        cas =>{
             if( cas.Situation_actuelle === "mort"){ 
                   list2.push(cas); 
               }
             }
          );
             this.setState({Liste_Epi : list2})
         
         };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////                        

afficher_conta= event => {
  this.setState({categorie : " contaminé "});

  const list = [...this.state.Liste_Epi];
  const list2=[];
  list.map(
  cas =>{
      if( cas.Situation_actuelle === "contamine"){ 
             list2.push(cas); 
         }
       }
    );
       this.setState({Liste_Epi : list2})
   
         };
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////                        

afficher_cava= event => {
  this.setState({categorie : "Gueri "});

  const list = [...this.state.Liste_Epi];
  const list2=[];
  list.map(
  cas =>{
       if( cas.Situation_actuelle === "gueri"){ 
             list2.push(cas); 
         } 
       }
    );
       this.setState({Liste_Epi : list2})
   
         };


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  render() { 
        return  (

          <div className="container text-center">   
          <div>
              <div className="container">
                         
                      <div className="row pl-5">
                          
                          {/* Reset list */}
                          <div>
                          <h1> La liste des cas epidemique : {this.state.categorie}</h1>
                          </div>
                          
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
          <div>
          <button onClick={()=> this.afficher_mort()}  className="btn btn-primary text-uppercase"> mort </button>
          <button onClick={()=> this.afficher_conta()}  className="btn btn-primary text-uppercase"> contaminé </button>
          <button onClick={()=> this.afficher_cava()}  className="btn btn-primary text-uppercase"> Guéri  </button>

            
          </div>         
          
          </div>               
          </div>


                );
    }
}
export default ListePendimi;