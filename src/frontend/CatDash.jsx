import React, { Component } from 'react';
import Formulaire2 from './Formulaire2';
import ListeCat from './ListeCat'; 
<<<<<<< HEAD
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
=======
import ReactDom from 'react-dom';
import HomeEP from './HomeEP'; 



class HomeEP2 extends Component {

                        Dasher=(event)=>{
                          ReactDom.render(<HomeEP />,document.getElementById('root'));   

                        }
  /////////////////////////////////////////////////////////////

  render() { 
        return  (
     
     <div> 




>>>>>>> parent of 0766c93... Partie FrontEnd 8
      <div className="row">
            <div className="col-3">
                <div className="nav flex-column nav-pills" id="v-pills-EP" role="tablist" aria-orientation="vertical">
                  <a className="nav-link active" id="v-pills-pendimi-tab" data-toggle="pill" href="#v-pills-pendimi" role="tab" aria-controls="v-pills-pendimi" aria-selected="true"> Consulter  </a>
<<<<<<< HEAD
                  <a className= "nav-link" id="v-pills-catastrphe-tab" data-toggle="pill" href="#v-pills-catastrphe" role="tab" aria-controls="v-pills-catastrphe" aria-selected="false"> 
                  
                  Ajouter Cas   
                  
                   </a>
=======
                  <a className= "nav-link" id="v-pills-catastrphe-tab" data-toggle="pill" href="#v-pills-catastrphe" role="tab" aria-controls="v-pills-catastrphe" aria-selected="false"> afficher Cas</a>
>>>>>>> parent of 0766c93... Partie FrontEnd 8
                </div>
            </div>
            <div className="col-9">
              <div className="tab-content" id="v-pills-tabContent">

                  <div className="tab-pane fade show active" id="v-pills-pendimi" role="tabpanel" aria-labelledby="v-pills-pendimi-tab">
<<<<<<< HEAD
                      <div>  <ListeCat my_compte ={this.props.my_compte}  />     </div>    
=======
                      <div>  <ListeCat  />     </div>    
>>>>>>> parent of 0766c93... Partie FrontEnd 8
                                 
                                  
                  </div> 

                  <div className="tab-pane fade show" id="v-pills-catastrphe" role="tabpanel" aria-labelledby="v-pills-catastrphe-tab"> 
<<<<<<< HEAD
                    <div> <Formulaire2  my_compte ={this.props.my_compte} /> </div>
=======
                    <div> <Formulaire2 /> </div>
>>>>>>> parent of 0766c93... Partie FrontEnd 8
                                   
                  </div>
         
      
              </div>
            </div>
      </div>
     
<<<<<<< HEAD

       </div> 
            );
=======
     
     
      <div>
                <ul class="nav nav-pills nav-fill">
                  <li class="nav-item">
                    <a class="nav-link " onClick={this.Dasher}> Pendimie Dash </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active"   >  Catastrophe Dash </a>
                  </li>
                  
                </ul>

       </div>

       </div> 

          );
>>>>>>> parent of 0766c93... Partie FrontEnd 8
    }
}
export default HomeEP2;