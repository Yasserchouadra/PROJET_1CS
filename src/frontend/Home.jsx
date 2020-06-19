import React, { Component } from 'react';

class Home extends Component {

  render() { 
        return  (
               <div className="container text-center">   
                 <h1>  Bienvenu  dans notre application   </h1>
                 <h1> login avec secsess   </h1>

                <h4>  votre mail :   {this.props.my_compte.mail }   </h4>
                <h4>   votre mot de passe : {this.props.my_compte.password }   </h4>  
           
                 </div>
                );
    }
}
export default Home;