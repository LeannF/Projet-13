import './css/navbar.css';
import logo from '../img/HomePage/Logo.svg';
import React from 'react';
import { Component } from "react";
import M, {input} from "materialize-css";

class Navbar extends Component {
  componentDidMount() {
      let elems = document.querySelectorAll('.dropdown-trigger', '.sidenav');
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },

        
        
     
    };
    M.Sidenav.init(elems, options);
    M.Dropdown.init(elems, options);
  }

  render() {
    return (
        
      <nav className="myNavbar">
          <img id='title' src={logo} alt='The Sense' width={70} height={70}/>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a className='black-text' href="news.js">news |</a></li>
            <li><a className='black-text' href="nos expériences.js"> nos expériences |</a></li>
            <li><a className='black-text' href="à propos de nous.js"> à propos de nous |</a></li>
            <li><a className='black-text' href="nos équipements.js"> nos équipements |</a></li>
            <li><a className='dropdown-trigger black-text ' data-target="dropdown">connexion</a></li>
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
      </nav>
         
    );
  }
}
 
export default Navbar;