import React, { Component } from 'react';
import Formulaire2 from './Formulaire2';
import ListeCat from './ListeCat'; 
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




      <div className="row">
            <div className="col-3">
                <div className="nav flex-column nav-pills" id="v-pills-EP" role="tablist" aria-orientation="vertical">
                  <a className="nav-link active" id="v-pills-pendimi-tab" data-toggle="pill" href="#v-pills-pendimi" role="tab" aria-controls="v-pills-pendimi" aria-selected="true"> Consulter  </a>
                  <a className= "nav-link" id="v-pills-catastrphe-tab" data-toggle="pill" href="#v-pills-catastrphe" role="tab" aria-controls="v-pills-catastrphe" aria-selected="false"> afficher Cas</a>
                </div>
            </div>
            <div className="col-9">
              <div className="tab-content" id="v-pills-tabContent">

                  <div className="tab-pane fade show active" id="v-pills-pendimi" role="tabpanel" aria-labelledby="v-pills-pendimi-tab">
                      <div>  <ListeCat  />     </div>    
                                 
                                  
                  </div> 

                  <div className="tab-pane fade show" id="v-pills-catastrphe" role="tabpanel" aria-labelledby="v-pills-catastrphe-tab"> 
                    <div> <Formulaire2 /> </div>
                                   
                  </div>
         
      
              </div>
            </div>
      </div>
     
     
     
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
    }
}
export default HomeEP2;