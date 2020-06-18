import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Footer from './footer'
import Table from './table'

class Home extends Component {
                     
    render() { 
        return  (
      <div>
            <div className="container text-center">   
                 <h1>  Bienvenu  dans notre application   </h1>
                 <h4>  votre mail :   {this.props.my_compte.mail }   </h4>
                    <h4>   votre mot de passe : {this.props.my_compte.password }   </h4>  
             <button onClick ={ this.dasher1} 
            className="btn btn-sm btn-primary text-uppercase" > 1 CP groupe 1</button>
                        

                  
            </div>
                 <div>
                     <Footer/>
                 </div>
       </div>
                 );
    }
}
export default Home;