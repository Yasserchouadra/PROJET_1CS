import React from 'react';
 import ReactDom from 'react-dom';

import 'jquery/src/jquery';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.js';
import "./assets/style.css"    ////// le CSS du Projet

 import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';


 import Authentification from './frontend/Authentification';
import Choix_page from './frontend/Choix_page';
import CatDash from './frontend/CatDash';
import EpiDash from './frontend/EpiDash';

import Formulaire1 from './frontend/Formulaire1';
import Formulaire2 from './frontend/Formulaire2';

 
 
class App extends React.Component {

    

  render(){
             return (
                <Router >
                <Route path="/" exact component={Authentification} />
                     
                      <Route path="/Choix_page" exact component={Choix_page }  />
                      <Route path="/Choix_page/cat_dash" exact component={CatDash }  />
                      <Route path="/Choix_page/epi_dash" exact component={EpiDash }  />


                      
                      <Route path="/Choix_page/epi_dash/formulaire1" exact component={ Formulaire1}  />                        
                      <Route path="/Choix_page/cat_dash/formulaire2" exact component={ Formulaire2}  />                        
                
                
                

                 </Router> 
                          

                    );
           }
}

const rootElement = document.getElementById("root");
  ReactDom.render(<App />, rootElement);
 