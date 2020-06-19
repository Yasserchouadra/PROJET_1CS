import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Home from './home';
import axios from 'axios';

class AuthentificationForm extends Component {
            state = { 
                    my_comptes :[],
                    email_tapped :" ",
                    password_tapped :" "
                      }
///////////////////////////////////////////////////////////////////////////////
        componentDidMount(){
            axios.get('http://localhost:5000/compte/')
            .then( comptes => {
                                    this.setState({ my_comptes : comptes.data })   
                                })
            .catch(function (error) { console.log(error);})
        }     
///////////////////////////////////////////////////////////////////////////////

        login=(email,pswd) => {
        const comptes = [...this.state.comptes];
        comptes.map(compte =>{
             if(compte.mail === email && compte.password === pswd){
             ReactDom.render(<Home my_compte={compte} />,document.getElementById('root'));
                                                        }
                             })
        };
///////////////////////////////////////////////////////////////////////////////
            handleChange1 = event => {
                                     this.setState({ email_tapped: event.currentTarget.value });
                                      };
            handleChange2 = event => {
                                     this.setState({ password_tapped: event.currentTarget.value });
                                        };
            handleSubmit = event => {
                           event.preventDefault();
               this.login(this.state.email_tapped,this.state.password_tapped);
                             };
///////////////////////////////////////////////////////////////////////////////
      render() { 
        return  (            
                                          
                        <div >
                                  <div > 
                                  <div > 
                                      <h1 > SIGN IN </h1>
                                  </div>  
                                    
                                  <div className="container text-center"> 
                                        <input   onChange={this.handleChange1} type="email" className="form-control" id="emailInput" placeholder="Adresse mail"></input>
                                        <input  onChange={this.handleChange2} type="password" className="form-control" id="passwordInput" placeholder="Password"></input>
                          
                      <button onClick={this.handleSubmit} type="submit" className="btn btn-primary text-uppercase"> Se connecter </button>
                                      </div>
                                   
                                  </div>                                   
                                              
                                      <div>
                                   < Footer/>
                                    </div>
                        </div>
                           
                        );
        }
}
/////////////////////////////////////////////////////////////////////////////// 
export default AuthentificationForm;
