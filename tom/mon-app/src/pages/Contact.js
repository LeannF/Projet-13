import { Component } from "react";
import '../style/Contact.css';
import banner from '../img/Contact/image 42.svg'
import discover from '../img/HomePage/btn_decouvrir.svg';
import sense from '../img/HomePage/SENSE.svg';
import trailer from '../img/HomePage/trailer_accueil.png';
import shangrila from '../img/HomePage/shangrila.svg';
import reserve from '../img/HomePage/btn_reserve.svg';
import img1 from '../img/HomePage/img_accueil.svg';
import img2 from '../img/HomePage/img_accueil2.svg';
import img3 from '../img/HomePage/img_accueil3.svg';
import reservation from '../img/HomePage/reservation.svg';
import bg_accueil from '../img/HomePage/reserv_accueil.svg';

class Contact extends Component {
    render() {
        return (
            <>
            <a href="#sense"><input type="image"  src={banner}></input></a>
            <div className='row '>
                <div className='discover col l12 s12 m12'>
                    <a href="#sense"><input type="image" id="discover"  src={discover} alt='The Sense'></input></a>
                </div> 
                
                <div id="sense" >
                    <div className="content col l12 s12 m12">
                        <div className="col l6 s12 m12 ">
                            <img  id='trailer' src={trailer} alt='The Sense' />
                        </div>
                    
                        <div className=' description col l6 s12 m12' id='text'>
                            <h1> Qu'est-ce-que <img src={sense} alt='The Sense' /> ?</h1>
                            <p>Préparez-vous pour une expérience unique qui vous emmenera dans un autre univers.
                                Vivez vos émotions comme vous ne l'avez jamais fait auparavant. 
                                Avec THE SENSE explorez d'autres dimensions et vivez l'impossible en interagissant avec un environnement dynamique et virtuel. 
                                Ce n'est pas une expérience en réalité virtuelle que vous vivez, c'est la réalité.
                            </p> 
                            <a href="nos équipements.html">DÉCOUVREZ THE SENSE →</a>
                        </div>
                    </div>  
                </div>

                <div id="description" className='col l12 s12 m12'>
                    <h2>la réalité à portée de main</h2>
                    <p>Vous rêvez de voyager, de frissoner ou tout simplement de vivre une expérience unique ? Explorez nos univers entre amis ou en famille et
                        franchissez la frontière de la réalité. Plusieurs dimensions s'offrent à vous, vous donnant accès à  de nombreuses expériences
                    </p>
                </div>

                <div id="experiences">
                    <h2>nos expériences les plus appréciées</h2>
                    <img  className='col l12 s12 m12' src={shangrila} alt='The Sense'/>
                    <div className='col l12 s12 m12' id='bottom'>
                        <h2>shangri-la : la cité perdue de Z</h2>
                        <p>Shangri-La la cité mythique, symbole de paix, de prospérité et de magnificience. Personne n'a apparemment pu se rendre en ce lieu depuis des décennies ou prouver
                            son existence, du moins depuis votre découverte ! Aventurez-vous au plus profond des légendes, entrez dans la cité de Z avec votre équipe et explorez les lieux
                            à la recherce de Percy Fawcett.
                        </p>

                        <div className="experiences-bottom">
                            <div className='col l8 s12 m12 offset-l5'>
                                <a href=""><input type="image"  src={reserve} alt='The Sense'></input></a>
                            </div>
                            <div className='link col l4 s12 m12'>
                                <a href="" id="light">DÉCOUVREZ LA LIGHT ROOM →</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col l12 s12 m12' id="more">
                        <h2>Vous en voulez toujours plus ?</h2>
                        <div> 
                            <img className='col l4 s4 m4' src={img1} alt='The Sense'/>
                       
                            <img className='col l4 s4 m4' src={img2} alt='The Sense'/>
                            <img className='col l4 s4 m4' src={img3} alt='The Sense'/>
                        </div>

                    <div className='col l12 s12 m12' id='bottom'>
                        <h2>shangri-la : la cité perdue de Z</h2>
                        <p>Shangri-La la cité mythique, symbole de paix, de prospérité et de magnificience. Personne n'a apparemment pu se rendre en ce lieu depuis des décennies ou prouver
                            son existence, du moins depuis votre découverte ! Aventurez-vous au plus profond des légendes, entrez dans la cité de Z avec votre équipe et explorez les lieux
                            à la recherce de Percy Fawcett.
                        </p>
                        <div className="more-bottom">
                            <div className='col l8 s12 m8'>
                                <a href=""><input type="image" src={reserve} alt='The Sense'></input></a>
                            </div>
                            <div className='col l4 s12 m4'>
                                <a href=""  id="light">DÉCOUVREZ LA CREATIVE ROOM →</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col l12 s12 m12">
                    <div className="reservation">
                        <img  className='col l12 s12 m12' src={bg_accueil} alt='The Sense'/>
                        <img id="bg_reserve" className='col l12 s12 m12' src={reservation} alt='The Sense'/>
                        <p className='col l12 s12 m12'>n'attendez plus, réservez</p>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Contact;