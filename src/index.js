import React from 'react';
import ReactDom from 'react-dom';
import 'jquery/src/jquery';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.js';
import "./assets/style.css"    ////// le CSS du Projet
import Authentification from './frontend/Authentification';
import HomeEP from  './frontend/HomeEP';

 


  const rootElement = document.getElementById("root");
  ReactDom.render(<Authentification />, rootElement);
