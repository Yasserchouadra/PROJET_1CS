import React, { Component } from 'react';
import Formulaire2 from './Formulaire2';
import ListeCat from './ListeCat'; 
import {Link } from 'react-router-dom';
import EpiDash from './EpiDash';
import ReactDom from 'react-dom';
import { Router } from 'express';


class CatDash extends Component {                    
 

<<<<<<< HEAD
  state={
    compte : null
  } 

////////////////////////////////////////////////////////////////////////////////////

     componentDidMount(){
             this.state.compte = this.props.my_compte
     }







  //////////////////////////////////////////////////////////////////////////////////
  dasher = event => {
    event.preventDefault();
              ReactDom.render(<EpiDash my_compte ={this.state.compte} />,document.getElementById('root'));


                          };
=======
class HomeEP2 extends Component {
>>>>>>> parent of d92fc55... version 9



  render() { 
        return  (
     <div> 

       <div>
                <ul className="nav nav-pills nav-fill">
                  <li className="nav-item">
                    <a    className="nav-link " onClick={this.dasher}>Pendimie Dash     </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active"   >  Catastrophe Dash </a>
                  </li>
                  
                </ul>

       </div>
      <div className="row">
            <div className="col-3">
                <div className="nav flex-column nav-pills" id="v-pills-EP" role="tablist" aria-orientation="vertical">
                  <a className="nav-link active" id="v-pills-pendimi-tab" data-toggle="pill" href="#v-pills-pendimi" role="tab" aria-controls="v-pills-pendimi" aria-selected="true"> Consulter  </a>
                  <a className= "nav-link" id="v-pills-catastrphe-tab" data-toggle="pill" href="#v-pills-catastrphe" role="tab" aria-controls="v-pills-catastrphe" aria-selected="false"> 
                  
                  Ajouter Cas   
                  
                   </a>
                </div>
            </div>
            <div className="col-9">
              <div className="tab-content" id="v-pills-tabContent">

                  <div className="tab-pane fade show active" id="v-pills-pendimi" role="tabpanel" aria-labelledby="v-pills-pendimi-tab">
                      <div>  <ListeCat my_compte ={this.props.my_compte}  />     </div>    
                                 
                                  
                  </div> 

                  <div className="tab-pane fade show" id="v-pills-catastrphe" role="tabpanel" aria-labelledby="v-pills-catastrphe-tab"> 
                    <div> <Formulaire2  my_compte ={this.props.my_compte} /> </div>
                                   
                  </div>
         
      
              </div>
            </div>
      </div>
     

       </div> 
            );
    }
}
export default HomeEP2;