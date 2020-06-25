import React, { Component } from 'react';
import ReactDom from 'react-dom';
import EpiDash from './EpiDash';
import CatDash from './CatDash';
import { BrowserRouter as Router ,Link } from 'react-router-dom';




class Choix_page extends Component {
  

dasher1 = event => {
  event.preventDefault();
           ReactDom.render(<EpiDash   />,document.getElementById('root'));   
          };
 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
          dasher2 = event => {
    event.preventDefault();
              ReactDom.render(<CatDash  />,document.getElementById('root'));

                          };

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    
  render() { 
<<<<<<< HEAD
        return  ( 
                <Router>
=======
        return  (
               <div className="container text-center">   
                 <h1>  Bienvenu  dans notre application   </h1>
                    <h1> login avec secsess   </h1>
                 <h1> Page de choix entre pendimie et catastrophe   </h1>
     <button onClick={this.activer1}  className="btn btn-primary text-uppercase"> Dash Pendimie </button>
     <button onClick={this.activer2}  className="btn btn-primary text-uppercase"> Dash catastrophe  </button>
>>>>>>> parent of f53ceae... Front partie 6

               <div className="container text-center">   
                 <h1>  Bienvenu {this.props.my_compte.prenom}  {this.props.my_compte.nom} dans notre application   </h1>
                 <h1>   Le nom d'hopital est : {this.props.my_compte.nom_etablisement}  </h1>
                      <button onClick={this.dasher1} className="btn btn-primary text-uppercase"> 
                              <Link  to="/Choix_page/epi_dash"  > Dash Pendimie   </Link>
                      </button>
                      <button  onClick={this.dasher2} className="btn btn-primary text-uppercase"> 
                               <Link  to="/Choix_page/cat_dash"  >   Dash catastrophe    </Link>
                      </button>
 
                 </div>

                 </Router>
                );
    }
}
export default Choix_page;