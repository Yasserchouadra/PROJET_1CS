import React, { Component } from 'react';

class HomeEP extends Component {

  render() { 
        return  (
     
     <div>     
      <div class="row">
            <div class="col-3">
                <div class="nav flex-column nav-pills" id="v-pills-EP" role="tablist" aria-orientation="vertical">
                  <a class="nav-link active" id="v-pills-pendimi-tab" data-toggle="pill" href="#v-pills-pendimi" role="tab" aria-controls="v-pills-pendimi" aria-selected="true">Pendemi </a>
                  <a class="nav-link" id="v-pills-catastrphe-tab" data-toggle="pill" href="#v-pills-catastrphe" role="tab" aria-controls="v-pills-catastrphe" aria-selected="false">catastrophe</a>
                </div>
            </div>
            <div class="col-9">
              <div class="tab-content" id="v-pills-tabContent">

                  <div class="tab-pane fade show active" id="v-pills-pendimi" role="tabpanel" aria-labelledby="v-pills-pendimi-tab">
                      <h1> Pendeme Dash </h1>
                                <div>
                                  <ul class="nav nav-tabs" id="myTab1" role="tablist">
                                                
                                                <li class="nav-item" role="presentation">
                                                  <a class="nav-link" id="consulter1-tab" data-toggle="tab" href="#consulter1" role="tab" aria-controls="consulter1" aria-selected="false"> Liste</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                  <a class="nav-link active" id="ajouter1-tab" data-toggle="tab" href="#ajouter1" role="tab" aria-controls="ajouter1" aria-selected="true">Ajouter Cas epedimique</a>
                                                </li>
                                                
                                  </ul>
                                       <div class="tab-content" id="myTabContent">
                                  <div class="tab-pane fade" id="consulter1" role="tabpanel" aria-labelledby="consulter1-tab"> Liste des cas </div>
                                  <div class="tab-pane fade show active" id="ajouter1" role="tabpanel" aria-labelledby="ajouter1-tab">Formulaire d'ajout </div>

                                       </div>

                               </div>
                  </div>

                  <div class="tab-pane fade" id="v-pills-catastrphe" role="tabpanel" aria-labelledby="v-pills-catastrphe-tab"> 
                    <h1> Catastrophe page </h1>

                            <div>
                                  <ul class="nav nav-tabs" id="myTab2" role="tablist">
                                              
                                                <li class="nav-item" role="presentation">
                                                  <a class="nav-link" id="consulter2-tab" data-toggle="tab" href="#consulter2" role="tab" aria-controls="consulter2" aria-selected="false">Liste </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                  <a class="nav-link active" id="ajouter2-tab" data-toggle="tab" href="#ajouter2" role="tab" aria-controls="ajouter2" aria-selected="true">ajouter un cas </a>
                                                </li>
                                                
                                  </ul>
                                       <div class="tab-content" id="myTabContent">
                                  <div class="tab-pane fade" id="consulter2" role="tabpanel" aria-labelledby="consulter2-tab"> Liste des CAS CATASTROPIQUE </div>
                                  <div class="tab-pane fade show active" id="ajouter2" role="tabpanel" aria-labelledby="ajouter1-tab">Formulaire d'ajout d'un cas catastrophique</div>

                                       </div>

                            </div>
                  </div>
         
      
              </div>
            </div>
      </div>
     </div>     
          );
    }
}
export default HomeEP;