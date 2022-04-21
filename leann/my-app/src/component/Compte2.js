import './css/Compte2.css';
import React from 'react';
import { Component } from "react";


class Compte extends Component {

    render() {
      return (
          
        <div className='row'>
            
          
            <div className='title col s12 m12 l12'>
                <p>mon compte</p>
            </div>
          
            <div className='content col s12 m12 l12'>
                
                <form className="col  s12 l12 m12 center-align">
                
                    <div className="row col  s12 m12 l12 ">
                        <p >Créer un compte</p>
                        <div className="input-field col s12 m12 l12">
                            <div>
                                <p className=" col s12 m4 l4">Nom prénom</p>
                            </div>
                            <div className='col s12 m4 l4'>
                                <input placeholder="Cordier Colin" id="first_name" type="text" class="validate"/>
                            </div>
                         
                        </div>

                        <div className="input-field col s12 m12 l12">
                            <div>
                                <p className=" col s12 m4 l4">Mon adresse mail</p>
                            </div>
                            <div className='col s12 m4 l4'>
                                <input placeholder="eubrain@gaming.bs" id="mail" type="text" class="validate"/>
                            </div>
                         
                            <div className='col s12 m4 l4'>
                                <button  className="materialize-textarea btn ">Modifier</button>
                            </div>
                        </div>

                        <div className="input-field col s12 m12 l12">
                            <div>
                                <p className=" col s12 m4 l4">Mon mot de passe</p>
                            </div>
                            <div className='col s12 m4 l4'>
                                <input placeholder="XXXXXXXXXX" id="mdp" type="text" class="validate"/>
                            </div>
                            <div className='col s12 m4 l4'>
                                <button  className="materialize-textarea btn ">Modifier</button>
                            </div>
                        </div>
                        <div className="input-field col s12 m12 l12">
                            <div>
                                <p className=" col s12 m4 l4">Confirmer le mot de passe</p>
                            </div>
                            <div className='col s12 m4 l4'>
                                <input placeholder="XXXXXXXXXX" id="cmdp" type="text" class="validate"/>
                            </div>
                         
                        </div>
                        <button  className="validate materialize-textarea btn ">Valider</button>
                            
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