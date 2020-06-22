import React, { Component } from 'react';
import Formulaire1 from './Formulaire1';
import ListePendimi from './ListePendimi'; 
import ReactDom from 'react-dom';
import CatDash from './CatDash'; 



class HomeEP extends Component {

                        Dasher=(event)=>{
                          ReactDom.render(<CatDash />,document.getElementById('root'));   

                        }
  /////////////////////////////////////////////////////////////

  render() { 
        return  (
     
     <div> 
      <div className="row">
            <div className="col-3">
                <div className="nav flex-column nav-pills" id="v-pills-EP" role="tablist" aria-orientation="vertical">
                  <a className="nav-link active" id="v-pills-pendimi-tab" data-toggle="pill" href="#v-pills-pendimi" role="tab" aria-controls="v-pills-pendimi" aria-selected="true"> Consulter  </a>
                  <a className= "nav-link" id="v-pills-catastrphe-tab" data-toggle="pill" href="#v-pills-catastrphe" role="tab" aria-controls="v-pills-catastrphe" aria-selected="false"> Ajouter Cas</a>
                </div>
            </div>
            <div className="col-9">
              <div className="tab-content" id="v-pills-tabContent">

                  <div className="tab-pane fade show active" id="v-pills-pendimi" role="tabpanel" aria-labelledby="v-pills-pendimi-tab">
                      <div>  <ListePendimi  />     </div>    
                                 
                                  
                  </div> 

                  <div className="tab-pane fade show" id="v-pills-catastrphe" role="tabpanel" aria-labelledby="v-pills-catastrphe-tab"> 
                    <div> <Formulaire1 /> </div>
                                   
                  </div>
         
      
              </div>
            </div>
      </div>
     
     
     
      <div>
                <ul class="nav nav-pills nav-fill">
                  <li class="nav-item">
                    <a class="nav-link active"> Pendimie Dash </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link"   onClick={this.Dasher}>  Catastrophe Dash </a>
                  </li>
                  
                </ul>

       </div>

       </div> 

          );
    }
}
export default HomeEP;