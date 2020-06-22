import React, { Component } from 'react';
import HomeEP from './HomeEP';
import ReactDom from 'react-dom';









class Choix_page extends Component {
  constructor(props) {
    super(props);
    this.state = {

      active_pendimie: "",
        active_catastrophe : ""
      
    };
  }
////////////////////////////////////////////////////////////::
activer1 = event => {  
  this.state.active_pendimie  = "active";
  ReactDom.render(<HomeEP act1={this.state.active_pendimie} act2={this.state.active_catastrophe} />,document.getElementById('root'));   

                         };


  ///////////////////////////////////////////////////////////

  activer2 = event => {
    this.state.active_catastrophe  = "active";
  ReactDom.render(<HomeEP act1={this.state.active_pendimie} act2={this.state.active_catastrophe} />,document.getElementById('root'));   

                         };
    ///////////////////////////////////////////////////////////
  render() { 
        return  (
               <div className="container text-center">   
                 <h1>  Bienvenu  dans notre application   </h1>
                    <h1> login avec secsess   </h1>
                 <h1> Page de choix entre pendimie et catastrophe   </h1>
      <button onClick={this.activer1}  className="btn btn-primary text-uppercase"> Dash Pendimie </button>
      <button onClick={this.activer2}  className="btn btn-primary text-uppercase"> Dash catastrophe  </button>

                 </div>
                );
    }
}
export default Choix_page;