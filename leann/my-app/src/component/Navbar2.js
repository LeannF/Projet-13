import './css/navbar.css';
import './css/popup.css';
import logo from '../img/HomePage/Logo.svg';
import Popup from './Popup';
import React from 'react';
import { Component } from "react";

class Navbar extends Component {

  constructor() {
    super()
  }


  showPopup(){
    let element = document.getElementById("popup")

    
    if (element.style.display === "none"){
      
      element.style.display = "block";
    }
    else{
      element.style.display = "none";
    }
  }

  render() {

    window.onscroll = function (e)
    {
      let popup = document.getElementById("popup")
      popup.style.display = "none";
    }
    return (
      <>
      <div id="popup">
        <Popup userList={this.props.userList}/>
      </div> 
      <nav className="myNavbar">
          <img id='title' src={logo} alt='The Sense' color='black' width={70} height={70}/>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a className='black-text' href="news.js">news |</a></li>
            <li><a className='black-text' href="nos expériences.js"> nos expériences |</a></li>
            <li><a className='black-text' href="à propos de nous.js"> à propos de nous |</a></li>
            <li><a className='black-text' href="nos équipements.js"> nos équipements |</a></li>
            <li><a className='black-text ' onClick={this.showPopup} >connexion</a></li>
          </ul>
          <div className='row'> 
            <div id='dropdown' className='dropdown-content col l12'>
              <div><a className="col l12" href="#!">one</a>
                <a className="col l12" href="#!">two</a>
                <a className="col l12" href="#!">three</a>
              </div>
            </div>                       
          </div>
          <ul className="sidenav" id="mobile-demo">
          <li><a className="ancrenav" href="news.js">nos expériences</a></li>
          <li><a className="ancrenav" href="nos expériences.js">à propos de nous</a></li>
          <li><a className="ancrenav" href="à propos de nous.js">nos équipements</a></li>
          <li><a className="ancrenav" href="nos équipements.js">connexion</a></li>
        </ul>
      </nav>
      </>
         
    );
  }

}
 
export default Navbar;