import './css/Compte2.css';
import React from 'react';
import { Component } from "react";
import banner from '../img/banner_compte.svg';
import logo from '../img/HomePage/Logo.svg';


class Compte extends Component {

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
                
                <form className="col s12">
                
                    <div className="row col  s12 m12 l12 ">
                        <p>Créer un compte</p>
                        <div className="input-field col s12 m12 l12">
                            <div>
                                <p className=" col s12 m4 l4">mon adresse mail</p>
                            </div>
                            <div className='col s12 m4 l4'>
                                <input placeholder="Placeholder" id="first_name" type="text" class="validate"/>
                            </div>
                         
                        </div>

                        <div className="input-field col s12 m12 l12">
                            <div>
                                <p className=" col s12 m4 l4">mon mot de passe</p>
                            </div>
                            <div className='col s12 m4 l4'>
                                <textarea  className="materialize-textarea "></textarea>
                            </div>
                            <div className='col s12 m4 l4'>
                                <button  className="materialize-textarea btn ">Modifier</button>
                            </div>
                        </div>

                        <div className="input-field col s12 m12 l12">
                            <div>
                                <p className=" col s12 m4 l4">mon mot de passe</p>
                            </div>
                            <div className='col s12 m4 l4'>
                                <textarea  className="materialize-textarea "></textarea>
                            </div>
                            <div className='col s12 m4 l4'>
                                <button  className="materialize-textarea btn ">Modifier</button>
                            </div>
                        </div>
                        <div className="input-field col s12 m12 l12">
                            <div>
                                <p className=" col s12 m4 l4">mon mot de passe</p>
                            </div>
                            <div className='col s12 m4 l4'>
                                <textarea  className="materialize-textarea "></textarea>
                            </div>
                         
                        </div>
                        <button  className="materialize-textarea btn ">Valider</button>
                            
                    </div>

                    <div className='newsletter col s12 m12 l12 check'>
                        <p>
                        <label>
                            <input type="checkbox" class="filled-in s12 m6 l6"  />
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

export default Compte;