import { Component } from "react";
import '../style/Contact.css';
import banner from '../img/Contact/image_42.svg'
import discover from '../img/HomePage/btn_decouvrir.svg';
import sense from '../img/HomePage/SENSE.svg';
import trailer from '../img/HomePage/trailer_accueil.png';
import Navbar from "../component/Navbar";


import colin from '../img/Contact/image_116.png';
g

class Contact extends Component {


    render() {
        return (
            <>  
            <Navbar/>
                <div className='discover'>
                    <a href="#sense"><input type="image" id="discover"  src={discover} alt='The Sense'></input></a>
                </div> 
             
                <div className="content row">
                    <div className="col l6 s12 m12 ">
                        <img  id='trailer' src={trailer} alt='The Sense' />
                    </div>
                    <div className=' description col l6  s12 m12' id='text'>
                        <h1> The sense, une idée novatrice</h1>
                        <p>Préparez-vous pour une expérience unique qui vous emmenera dans un autre univers.
                            Vivez vos émotions comme vous ne l'avez jamais fait auparavant. 
                            Avec THE SENSE explorez d'autres dimensions et vivez l'impossible en interagissant avec un environnement dynamique et virtuel. 
                            Ce n'est pas une expérience en réalité virtuelle que vous vivez, c'est la réalité.
                        </p> 
                        <a >DÉCOUVREZ THE SENSE →</a>
                    </div>
                </div>  
            
            

            <div className="who">
                <h2>Qui sommes nous ?</h2>
                <p>The Sense est une société formée par quatre étudiants en école de commerce qui détiennent la majorité des parts. Le restant etant la propriété de DreamAway, entreprise française spécialiste du milieu de la VR</p>
            </div>


            <div className="personnel row">
                <div className="col l2 offset-l2">
                    <img src={colin}/>

                </div>
                <h3 >Cordier Colin</h3>
                <h3 className="col l2 ">Cordier Colin</h3>
                <h3 className="col l2 ">Cordier Colin</h3>
                <h3 className="col l2 ">Cordier Colin</h3>
            </div>
                
            
            </>
        );
    }
}

export default Contact;