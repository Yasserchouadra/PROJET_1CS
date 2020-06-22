import React, { Component } from 'react';
import HomeEP from './HomeEP';
import CatDash from './CatDash';
import ReactDom from 'react-dom';









class Choix_page extends Component {
  
activer1 = event => {  
  ReactDom.render(<HomeEP  />,document.getElementById('root'));   

                         };


  ///////////////////////////////////////////////////////////

  activer2 = event => {
  ReactDom.render(<CatDash />,document.getElementById('root'));   

                         };
    ///////////////////////////////////////////////////////////
  render() { 
        return  (
               <div className="container text-center">   
                 <h1>  Bienvenu  dans notre application   </h1>
                    <h1> login avec secsess   </h1>
                 <h1> Page de choix entre pendimie et catastrophe   </h1>
<<<<<<< HEAD
      <button onClick={this.activer1}  className="btn btn-primary text-uppercase"> Dash Pendimie </button>
      <button onClick={this.activer2}  className="btn btn-primary text-uppercase"> Dash catastrophe  </button>
 
=======
     <button onClick={this.activer1}  className="btn btn-primary text-uppercase"> Dash Pendimie </button>
     <button onClick={this.activer2}  className="btn btn-primary text-uppercase"> Dash catastrophe  </button>

>>>>>>> parent of f53ceae... Front partie 6
                 </div>
                );
    }
}
export default Choix_page;