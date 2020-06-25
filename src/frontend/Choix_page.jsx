import React, { Component } from 'react';
<<<<<<< HEAD
=======
import HomeEP from './HomeEP';
import CatDash from './CatDash';
>>>>>>> parent of 0766c93... Partie FrontEnd 8
import ReactDom from 'react-dom';
<<<<<<< HEAD
<<<<<<< HEAD
import EpiDash from './EpiDash';
import CatDash from './CatDash';
import { BrowserRouter as Router ,Link } from 'react-router-dom';
=======
=======
>>>>>>> parent of d6f912d... Version 10





>>>>>>> parent of d6f912d... Version 10




class Choix_page extends Component {
  
<<<<<<< HEAD

dasher1 = event => {
  event.preventDefault();
           ReactDom.render(<EpiDash  my_compte ={this.props.my_compte}  />,document.getElementById('root'));   
          };
 dasher2 = event => {
    event.preventDefault();
              ReactDom.render(<CatDash my_compte={this.props.my_compte}  />,document.getElementById('root'));
=======
activer1 = event => {  
  ReactDom.render(<HomeEP  />,document.getElementById('root'));   
>>>>>>> parent of 0766c93... Partie FrontEnd 8

                          };



<<<<<<< HEAD
=======
  activer2 = event => {
  ReactDom.render(<CatDash />,document.getElementById('root'));   

                         };
>>>>>>> parent of 0766c93... Partie FrontEnd 8
    ///////////////////////////////////////////////////////////
  render() { 
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        return  ( 
                <Router>

=======
        return  (
>>>>>>> parent of d6f912d... Version 10
=======
        return  (
>>>>>>> parent of d6f912d... Version 10
               <div className="container text-center">   
                 <h1>  Bienvenu {this.props.my_compte.prenom}  {this.props.my_compte.nom} dans notre application   </h1>
                 <h1>   Le nom d'hopital est : {this.props.my_compte.nom_etablisement}  </h1>
                      <button onClick={this.dasher1} className="btn btn-primary text-uppercase"> 
                              <Link  to="/Choix_page/epi_dash"  my_compte ={this.props.my_compte}> Dash Pendimie   </Link>
                      </button>
                      <button  onClick={this.dasher2} className="btn btn-primary text-uppercase"> 
                               <Link  to="/Choix_page/cat_dash" my_compte ={this.props.my_compte} >   Dash catastrophe    </Link>
                      </button>
 
=======
      <button onClick={this.activer1}  className="btn btn-primary text-uppercase"> Dash Pendimie </button>
      <button onClick={this.activer2}  className="btn btn-primary text-uppercase"> Dash catastrophe  </button>
 
=======
     <button onClick={this.activer1}  className="btn btn-primary text-uppercase"> Dash Pendimie </button>
     <button onClick={this.activer2}  className="btn btn-primary text-uppercase"> Dash catastrophe  </button>

>>>>>>> parent of f53ceae... Front partie 6
>>>>>>> parent of 0766c93... Partie FrontEnd 8
                 </div>

                 </Router>
                );
    }
}
export default Choix_page;