import React from 'react';
import ReactDom from 'react-dom';
import 'jquery/src/jquery';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.js';
import "./assets/style.css"
import AuthentificationForm from './components/authentificationForm';



class App extends React.Component {

    

      render(){
                  return (
                              <div>
                                  
                                    <AuthentificationForm  />      
                                  
                              </div>
                         );
              }
  }
  
  const rootElement = document.getElementById("root");
  ReactDom.render(<App />, rootElement);
