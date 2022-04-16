import './css/navbar.css';
import logo from '../img/HomePage/Logo.svg';
import React from 'react';
import { Component } from "react";
import M from "materialize-css";
import {Link} from 'react-router-dom';

class MyNavbar extends Component {
  componentDidMount() {
    let elems = document.querySelectorAll('.dropdown-trigger', '.sidenav');
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);
    M.Sidenav.init(elems, options);
    M.Dropdown.init(elems, options);
  }
    
  render() {
    return (
        
      <nav className="myNavbar">
          <img id='title' src={logo} alt='The Sense' color='black' width={70} height={70}/>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            
  
            <li><a className='black-text' href="Compte1.js"> news |</a></li>
            <li><a className='black-text' href="Compte1.js"> nos expériences |</a></li>
            <li><a className='black-text' href="à propos de nous.js"> à propos de nous |</a></li>
            <li><a className='black-text' href="nos équipements.js"> nos équipements |</a></li>
            <li><a className='black-text '  data-target="#modal" >connexion</a></li>
          </ul>
          <div className='row'>
            <div id='dropdown' className='dropdown-content col l12'>
              <div><a className="col l12" href="#!">one</a>
                <a className="col l12" href="#!">two</a>
                <a className="col l12" href="#!">three</a>
              </div>
            </div>                       
          </div>
          <ul class="sidenav" id="mobile-demo">
          <li><a class="ancrenav" href="news.js">nos expériences</a></li>
          <li><a class="ancrenav" href="nos expériences.js">à propos de nous</a></li>
          <li><a class="ancrenav" href="à propos de nous.js">nos équipements</a></li>
          <li><a class="ancrenav" href="nos équipements.js">connexion</a></li>
        </ul>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal"
          className="modal"
        >
          <div className="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div className="modal-footer">
            <a className="modal-close waves-effect waves-red btn-flat">
              Disagree
            </a>
            <a className="modal-close waves-effect waves-green btn-flat">
              Agree
            </a>
          </div>
        </div>
      </nav>
         
    );
  }
}
 
export default MyNavbar;