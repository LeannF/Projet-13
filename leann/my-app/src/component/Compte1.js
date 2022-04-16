import './css/Compte1.css';
import React from 'react';
import { Component } from "react";
import banner from '../img/banner_compte.svg';
import logo from '../img/HomePage/Logo.svg';


class Connexion extends Component {

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
                    <div className="row col  s12 m12 l12 offset-l1">
                        <div className="input-field col s12 m12 l12">
                            <div>
                                <p className=" col s12 m4 l4">mon adresse mail</p>
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
                </form>
            
            </div>
            
        </div>
      )
    }
}

export default Connexion;