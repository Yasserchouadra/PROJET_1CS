import React, { Component } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import Choix_page from './Choix_page';
import { BrowserRouter as Router ,Link } from 'react-router-dom';


  




class Authentification extends Component {
            
                  state = { 
                    my_comptes :[],
                    email_tapped :" ",
                    password_tapped :" ",
                      }
///////////////////     sss ////////////////////////////////////////////////////////////
        componentDidMount(){
                 axios.get('http://localhost:5000/compte/')
                             .then( comptes => {
                                    this.setState({ my_comptes : comptes.data })   
                                })
                             .catch(function (error) { console.log(error);})
        }     
///////////////////////////////////////////////////////////////////////////////

   login=(email,pswd) => {
                
        const comptes = [...this.state.my_comptes];
           comptes.map(compte =>{  
                       
          if(compte.mail === email && compte.password === pswd)
          {
            if (compte.Type ==="EP") {
             // ReactDom.render(<Choix_page my_compte ={compte}  />,document.getElementById('root'));
                 // this.props.history.push('/Choix_page');
                } 
              
            else{
                console.log("pas de login ");
               }                    
          }
                               })}  ;
///////////////////////////////////////////////////////////////////////////////
            handleChange1 = event => {
                event.preventDefault();

                this.setState({ email_tapped: event.currentTarget.value });

                                      };
            handleChange2 = event => {
                event.preventDefault();

                 this.setState({ password_tapped: event.currentTarget.value });
                                        };
            handleSubmit = event => {
                           event.preventDefault();
               this.login(this.state.email_tapped,this.state.password_tapped);
                             };
 render() { 
        return  (     
                <Router>
                           <div >
 
                                  <div > 
                                  <div > 
                                      <h1 > SIGN IN </h1>
                                  </div>  
                                    
                                  <div className="container text-center"> 
            <input   onChange={this.handleChange1} type="email" className="form-control" id="emailInput" placeholder="Adresse mail"></input>
            <input  onChange={this.handleChange2} type="password" className="form-control" id="passwordInput" placeholder="Password"></input>                 

            <button  onClick={this.handleSubmit}  className="btn btn-primary text-uppercase">
            <Link  to="/Choix_page"  >     Se connecter  </Link> 
                 </button>
                                      </div>
                                   
                                                                     
                                              
                                      
                            </div>

                            </div>
                            </Router>
                        );
        }
}
 
/////////////////////////////////////////////////////////////////////////////// 
export default Authentification;
