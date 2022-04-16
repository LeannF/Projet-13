import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Modal extends Component {
  componentDidMount() {
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
  }

  render() {
    return (
      <>
        <a
          className="waves-effect waves-light btn modal-trigger"
          data-target="modal1"
        >
          Modal
        </a>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal1"
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
      </>
    );
  }
}


class Navbar extends Component {


  openForm() {
      document.getElementById("popupForm").style.display = "block";
  }
  closeForm() {
    document.getElementById("popupForm").style.display = "none";
    window.onClick = function (event) {
        if (event.target.className === "form-popup") {
          event.target.style.display = "none";
        }
    };
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
                  <li><a className='black-text '  onClick={this.openForm} >connexion</a></li>

              </ul>
              <div className="form-popup" id="popupForm">
                  <form action="/action_page.php" className="form-container">
                      <h2>Veuillez vous connecter</h2>
                      <label for="email">
                      <strong>E-mail</strong>
                      </label>
                      <input type="text" placeholder="Votre Email" name="email" required />
                      <label for="psw">
                      <strong>Mot de passe</strong>
                      </label>
                      <input type="password" placeholder="Votre mot de passe" name="psw" required />
                      <button type="submit" className="btn">Se connecter</button>
                      <button type="submit" className="btn cancel" onClick={this.closeForm}>Annuler</button>
                  </form>
              </div>
          </nav>
          
      );
  }
}

export default Navbar;