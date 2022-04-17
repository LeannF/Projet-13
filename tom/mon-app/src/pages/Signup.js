import '../style/Signup.css';
import React from 'react';
import { Component } from "react";
import banner from '../img/banner_compte.svg';
import logo from '../img/HomePage/Logo.svg';


class Signup extends Component {

    constructor(props){
        super(props)
    }

    handleSubmit = (event) => {

      event.preventDefault()
      let username = event.target[0].value
      let email = event.target[1].value
      let password = event.target[2].value
      let password2 = event.target[3].value
      console.log(password2);
      

      let already = []

      {this.props.userList.data && this.props.userList.data.map((user,i)=>{

          if (user.attributes.email === email){
              already.push(1)
          }
          else{
            already.push(0)
          }
        })}

      if (already.includes(1) || password !== password2){
        
        console.log("deja utilisé or wrong password");
      }
      else{
          this.addUser(username, email, password)
      }
    }
    addUser = (username, email, password) =>{
    
        
      const creds = {
          "data":{
        "name": username,
        "email": email,
        "password": password
          }
    }
      fetch(`http://localhost:1337/api/user-logins`, {
          method: 'POST',
          headers:{
              'Content-type' : "application/json",
          },
          body : JSON.stringify(creds),
      }).then(function(response){
          return response.text()
      })

    }
    


    render() {
      return (
          
        <div className='row'>
            
            <div className='header'>
                <img src={banner} alt='The Sense' className='col s12 m12 l12'></img>
                <img src={logo} alt='The Sense' className='col s12 m12 l12'></img>
            </div>            
            <div className='title col s12 m12 l12'>
                <p>mon compte</p>
            </div>
          
            <div className='content col s12 m12 l12'>
                
                <form onSubmit={this.handleSubmit} className="col s12">
                
                    <div className="row col  s12 m12 l12 ">
                        <p>Créer un compte</p>
                        <div className="input-field col s12 m12 l12">
                            <div>
                                <p className=" col s12 m4 l4">Nom Prenom</p>
                            </div>
                            <div className='col s12 m4 l4'>
                                <input required className="materialize-textarea "></input>
                            </div>
                         
                        </div>
                        <div className="input-field col s12 m12 l12">
                            <div>
                                <p className=" col s12 m4 l4">mon adresse mail</p>
                            </div>
                            <div className='col s12 m4 l4'>
                                <input required className="materialize-textarea "></input>
                            </div>
                         
                        </div>

                        <div className="input-field col s12 m12 l12">
                            <div>
                                <p className=" col s12 m4 l4">mon mot de passe</p>
                            </div>
                            <div className='col s12 m4 l4'>
                                <input required className="materialize-textarea "></input>
                            </div>
                        </div>

                    
                        <div className="input-field col s12 m12 l12">
                            <div>
                                <p className=" col s12 m4 l4">Confirmer mon mot de passe</p>
                            </div>
                            <div className='col s12 m4 l4'>
                                <input required className="materialize-textarea "></input>
                            </div>
                         
                        </div>
                        <button type="submit" className="materialize-textarea btn ">Valider</button>
                    </div>

                    <div className='newsletter col s12 m12 l12 check'>
                        <p>
                        <label>
                            <input id="newsletter" type="checkbox" class="filled-in s12 m6 l6"  />
                            <span>Se désabonner de la newsletter</span>
                        </label>
                        </p>
                       
                    
                    </div>
                </form>
            
            </div>
            
        </div>
      )
    }
}

export default Signup;