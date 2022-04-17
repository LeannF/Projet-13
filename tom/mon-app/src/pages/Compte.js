import '../style/Compte.css';
import React from 'react';
import { Component } from "react";
import banner from '../img/banner_compte.svg';
import logo from '../img/HomePage/Logo.svg';
import { userData, Cookies } from '../apiUtilities/dataRetriever';


class Compte extends Component {

    constructor(props){
        super(props)
    }


    modifyPassword = () => {

        let passwordField = document.getElementById("formPassword")
        passwordField.style.display = "block" 
        
        let passwordText = document.getElementById("password")
        passwordText.style.display = "none" 

        let buttonMdp = document.getElementById("mdpValider")
        buttonMdp.style.display = "block"

        let buttonChangeMdp = document.getElementById("mdpChange")
        buttonChangeMdp.style.display = "none"

        console.log(userData.User.id);

        
    }
    
    modifyEmail = () => {

        let passwordField = document.getElementById("formEmail")
        passwordField.style.display = "block" 
        
        let passwordText = document.getElementById("email")
        passwordText.style.display = "none" 

        let buttonMdp = document.getElementById("emailValider")
        buttonMdp.style.display = "block"

        let buttonChangeMdp = document.getElementById("emailChange")
        buttonChangeMdp.style.display = "none"

        console.log(userData.User.id);

        
    }

    changeMdp = (event) => {
        
        
        let newPassword = event.target[0].value
        let id = userData.User.id
        userData.User.password = newPassword
        let passsss ={password: newPassword}
        

        fetch(`http://localhost:1337/api/user-logins/` + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({data:passsss})
        });

        Cookies.updateData();

    }  
    
    changeEmail = (event) => {
        
        event.preventDefault()
        let newEmail = event.target[0].value
        let id = userData.User.id
        let email ={email: newEmail}
        userData.User.email = newEmail
        
        fetch(`http://localhost:1337/api/user-logins/` + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({data:email})
        });

        Cookies.updateData();

    }   

    render() {


        let password = ""
        let cryptedPassword = ""

        {this.props.userList.data && this.props.userList.data.map((user,i)=>{
            if (user.attributes.name === userData.User.username){
                password = user.attributes.password
            }
          })}
        for(var i = 0; i <  password.length;i++){
            cryptedPassword = cryptedPassword + "x"
        }

      return (

        <div className='row'>
            <div className='header'>
                <img src={banner} alt='The Sense' className='col s12 m12 l12'></img>
                <img src={logo} alt='The Sense' className='col s12 m12 l12'></img>
            </div>
            <div className='title col s12 m12 l12'>
                <p>Mon compte</p>
            </div>
            <div className='content col s12 m12 l12'>
                <div className="col s12">
                    <div className="row col  s12 m12 l12 offset-l1">
                        <div className="input-field col s12 m12 l12">
                            <div>
                                <p className=" col s12 m4 l4">mon adresse mail</p>
                            </div>
                            <div className='col s12 m4 l4'>
                                <p id="email" style={{display:"block"}}>{userData.User.email}</p>

                                <form style={{display:"none"}} id="formEmail" onSubmit={this.changeEmail}>
                                    <input type="email" className="materialize-textarea "></input>
                                    <button type="submit" id="emailValider" style={{display:"none"}} className="materialize-textarea btn ">Valider</button>
                                </form>

                            </div>  

                            <div className='col s12 m4 l4'>
                                <a id="emailChange" onClick={this.modifyEmail} class="btn">Modifier</a>
                            </div>
                        </div>

                        <div className="input-field col s12 m12 l12">
                            <div>
                                <p className=" col s12 m4 l4">mon mot de passe</p>
                            </div>  

                            <div className='col s12 m4 l4'>
                                <p id="password" style={{display:"block"}}>{cryptedPassword}</p>

                                <form style={{display:"none"}} id="formPassword" onSubmit={this.changeMdp}>
                                    <input  className="materialize-textarea "></input>
                                    <button type="submit" id="mdpValider" style={{display:"none"}} className="materialize-textarea btn ">Valider</button>
                                </form>

                            </div>  

                            <div className='col s12 m4 l4'>
                                <a id="mdpChange" onClick={this.modifyPassword} class="btn">Modifier</a>
                            </div>
                            
                        </div>

                        <div className="input-field col s12 m12 l12 ">
                            <div>
                                <p className=" col s12 m4 l4">réservations</p>
                            </div>
                            <div className='col s12 m4 l4'>
                                <p  className="materialize-textarea "> nbr réservations</p>
                            </div>
                     
                        </div>
                        
                        <div className="reservations col s12 m6 l6 offset-l4">

                            <div className='col s2 m2 l2'>
                                <img src={logo} alt='The Sense' width={100} height={100}></img>
                            </div>
                            <div className='col s2 m2 l2'>
                                <img src={logo} alt='The Sense' width={100} height={100}></img>
                            </div>
                            <div className='col s2 m2 l2'>
                                <img src={logo} alt='The Sense' width={100} height={100}></img>
                            </div>
                            <div className='col s2 m2 l2'>
                                <img src={logo} alt='The Sense' width={100} height={100}></img>
                            </div>
                            <div className='col s2 m2 l2'>
                                <img src={logo} alt='The Sense' width={100} height={100} ></img>
                            </div>
                        </div>

                        <div className="reservations2 col s12 m6 l6 offset-l4 ">
                            <div className='col s2 m2 l2'>
                                <img src={logo} alt='The Sense' width={100} height={100}></img>
                            </div>
                            <div className='col s2 m2 l2'>
                                <img src={logo} alt='The Sense' width={100} height={100}></img>
                            </div>
                            <div className='col s2 m2 l2'>
                                <img src={logo} alt='The Sense' width={100} height={100}></img>
                            </div>
                            <div className='col s2 m2 l2'>
                                <img src={logo} alt='The Sense' width={100} height={100}></img>
                            </div>
                            <div className='col s2 m2 l2'>
                                <img src={logo} alt='The Sense' width={100} height={100} ></img>
                            </div>
                        </div>
                    </div>

                    <div className='check col s12 m12 l12 '>
                        <p>
                        <label className='check1'>
                            <input type="checkbox" class="filled-in s12 m6 l6"  />
                            <span>Se désabonner de la newsletter</span>
                        </label>
                        </p>
                        <p>
                        <label className='check2'>
                            <input type="checkbox" class="filled-in s12 m6 l6"  />
                            <span>Supprimer mon compte</span>
                        </label>
                        </p>
                    </div>
                </div>
            
            </div>
            
        </div>
      )
    }
}

export default Compte;