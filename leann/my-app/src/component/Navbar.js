import './css/navbar.css';
import SENSE from '../img/HomePage/SENSE.svg';
import React from 'react';
import { Component } from "react";
import M, {input} from "materialize-css";

class Navbar extends Component {
    componentDidMount() {
      const options = {
        onOpenStart: () => {
          console.log("Open Start");
        },
        onOpenEnd: () => {
          console.log("Open End");
        },
        startingTop: "1%",
      };
      M.Modal.init(this.Modal, options);
    }

    render() {
        return (
            
            <nav className="myNavbar">
                <img id='title' src={SENSE} alt='The Sense'/>
                
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a className='black-text' href="news.html">news |</a></li>
                    <li><a className='black-text' href="nos expériences.html"> nos expériences |</a></li>
                    <li><a className='black-text' href="à propos de nous.html"> à propos de nous |</a></li>
                    <li><a className='black-text' href="nos équipements.html"> nos équipements |</a></li>
                    <li><a className='modal-trigger black-text ' data-target="modal">connexion</a></li>

                </ul>
                    <div
                        ref={Modal => {
                            this.Modal = Modal;
                        }}
                        id="modal"
                        className="modal"
                    >
                    <div className="modal-content row">
                        <h2>CONNEXION</h2>
                       
                        <form className="col s12 l12">
                            <div className="row">
                                <div className="input-field col l12">
                                    
                                    <div className="row col s12 l12">
                                        <p className='col l6'>identifiant</p>
                                        <input id="id" type="text" className="validate col l6"/>
                                    </div>
                                    <div className="col s12 l12">
                                        <p className='col l7'>Mot de passe</p>
                                        <input id="mdp" type="tel" className="validate col l5"/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
     
                    <div className='modal-footer col m12 l12'>
                        <a className="waves-effect waves-red col m6" href='Compte2.js'>
                            Créer un compte
                        </a>
                        <button className="modal-connexion waves-effect waves-red btn-flat col m6">
                            Connexion
                        </button>
                       
                    </div>
                </div>
            </nav>
            
        );
    }
}
 
export default Navbar;