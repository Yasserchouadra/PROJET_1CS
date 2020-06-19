import React from 'react';
import ReactDom from 'react-dom';
import 'jquery/src/jquery';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.js';
import "./assets/style.css"    ////// le CSS du Projet
import Authentification from './frontend/Authentification';
import HomeEP from  './frontend/HomeEP';

 

class App extends React.Component {    /// Home page 

       login= event =>{        
              ReactDom.render(<Authentification />,document.getElementById('root'));  
              // ReactDom.render(<HomeEP />,document.getElementById('root'));       
                            };

      render(){
                  return (
                              <div>
                  <h1> Application CSA_CAS  </h1>  
            <h3>Home page </h3>  

            <h3> Une application web pour la communauté de la santé</h3>  
<button onClick ={ this.login} className="btn btn-sm btn-primary text-uppercase" > Login page</button>

                              </div>
                         );
              }
  }
  
  const rootElement = document.getElementById("root");
  ReactDom.render(<App />, rootElement);
