import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'materialize-css/dist/css/materialize.min.css';
import MyNavbar from './component/Navbar';
import Home from './component/Accueil';
import Connexion from './component/Compte1';
import Compte from './component/Compte2';
//import MyModal from './component/Modal';


ReactDOM.render(
  <React.StrictMode>
    <MyNavbar />
    <Connexion/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
