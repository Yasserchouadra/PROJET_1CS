import React from 'react';
import ReactDom from 'react-dom';
import 'jquery/src/jquery';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.js';
import "./assets/style.css"    ////// le CSS du Projet



class App extends React.Component {    /// Home page 

    

      render(){
                  return (
                              <div>
                                  
                                     <p> Le Front est vide pour le moment </p>  
                                  
                              </div>
                         );
              }
  }
  
  const rootElement = document.getElementById("root");
  ReactDom.render(<App />, rootElement);
