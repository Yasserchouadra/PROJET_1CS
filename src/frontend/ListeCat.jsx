import React, { Component } from 'react';
import Cas_Cat from './Cas_Cat';
import axios from 'axios';




class ListeCat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Liste_Cat: [],
      serchbar : "",
      categorie : " Tous les cas  "
    };
this.handleChange = this.handleChange.bind(this)

  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////
          getlist(){
               axios.get('http://localhost:5000/cas_cat/')
                            .then( cas_cats => {
                             this.setState({ Liste_Cat : cas_cats.data})   
                              
                           })
                             .catch(function (error) { console.log(error); })
          }
///////////////////////////////////////////////////////////////////////////////////////////////////

  componentDidMount(){
          this.getlist();
                        }     
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

chercher (){
  console.log("je cherche et je trouve :   \n");
  
         const list = [...this.state.Liste_Cat];
          const list2=[];
           list.map(
             cas =>{
                      if( (cas.nom === this.state.serchbar)
                        || (cas.prenom === this.state.serchbar)
                        || (cas.nom_catastrophe === this.state.serchbar)
                        || (cas.wilaya === this.state.serchbar)
                        ||( cas.hopital === this.state.serchbar)
                        ||( cas.sexe === this.state.serchbar)
                        ||( cas.adresse === this.state.serchbar)
                        
                        ){   
                          console.log("***********************************");
                              console.log(cas.NSS);
                              
                             console.log(cas.nom);
                             console.log(cas.prenom);
                             console.log(cas.nom_catastrophe);
                             console.log(cas.wilaya);
                             console.log(cas.hopital);
                             console.log(cas.sexe);
                             console.log("***********************************");


                             
                            list2.push(cas); 
                           }
                      
                    }
                   );
                      this.setState({Liste_Cat : list2})

                  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////
handleChange = event => {
        this.setState({ serchbar: event.target.value });

               };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////                        

afficher_mort= event => {
         this.setState({categorie : " Mort "});
      const list = [...this.state.Liste_Cat];
        const list2=[];
        list.map(
        cas =>{         
             if( cas.Situation_actuelle === "mort"){ 
                   list2.push(cas); 
               }
             }
          );
             
             this.setState({Liste_Cat : list2});
             
         
         };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////                        

afficher_blesse= event => {
  this.setState({categorie : " blessé "});
  const list = [...this.state.Liste_Cat];
  const list2=[];
  list.map(
  cas =>{
       if( cas.Situation_actuelle === "blesse"){ 
             list2.push(cas); 
         }
       }
    );
       this.setState({Liste_Cat : list2})
   
         };
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////                        

afficher_disparu= event => {
  this.setState({categorie : "disparu "});

  const list = [...this.state.Liste_Cat];
  const list2=[];
  list.map(
  cas =>{
       if( cas.Situation_actuelle === "disparu"){ 
             list2.push(cas); 
         }
       }
    );
       this.setState({Liste_Cat : list2})
   
         };









///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  render() { 
        return  (

          <div className="container text-center">   
          <div>
              <div className="container">
                         
                      <div className="row pl-5">
                         
                          {/* Reset list */}
                          <div>
                          <h1> La liste des cas Catastrophique </h1>
                          <br/>
                          </div>
                          <div>
                          <h3> {this.state.categorie}</h3>


                          </div>
                           <div className="mt-5 ml-auto col-lg-4" id="searchBar2">
                               <button onClick={()=> this.getlist()}  className="btn btn-primary text-uppercase"> Tous La liste </button>
                              </div>
                          {/* Barre de recherche */}
                              <div className="mt-5 ml-auto col-lg-4" id="searchBar2">
                                <input onChange={this.handleChange} className="form-control" type="text" placeholder="Rechercher un cas Catastrophique" aria-label="Search"></input>
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
                                             <th scope="col">nom_catastrophe</th>
                                             <th scope="col">wilaya</th>
                                             <th scope="col">hopital</th>
                                             <th scope="col">Etat actulle</th>
                                            </tr>
                                      </thead>
                           <tbody >
                           {  
                            this.state.Liste_Cat.map(cas => {
                               
                                return <Cas_Cat key={cas} item={cas} /> 
                                
                                                       } )   
                              
                              }    
                           
                                          <tr>
                                                {/* dernière ligne concernant le calcul de la moyenne générale */}
                                            <th><caption> Liste des Cas Catastrophique </caption></th>
                                            <td></td>
                                            <td></td>
                                         </tr>
                            </tbody>
                                  </div>                                
              
                                    </table>
                  </div>
          <div>
          <button onClick={()=> this.afficher_mort()}  className="btn btn-primary text-uppercase"> mort </button>
          <button onClick={()=> this.afficher_blesse()}  className="btn btn-primary text-uppercase"> blessé </button>
          <button onClick={()=> this.afficher_disparu()}  className="btn btn-primary text-uppercase"> disparu </button>

            
          </div>         
          
          </div>               
          </div>


                );
    }
}
export default ListeCat;