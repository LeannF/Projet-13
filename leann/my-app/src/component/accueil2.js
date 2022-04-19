import { Component } from "react";
//import './css/Accueil.css';
import discover from '../img/HomePage/btn_decouvrir.svg';
import sense from '../img/HomePage/SENSE.svg';
import trailer from '../img/HomePage/trailer_accueil.png';
import shangrila from '../img/HomePage/shangrila.svg';
import reserve from '../img/HomePage/btn_reserve.svg';
import img1 from '../img/HomePage/img_accueil.svg';
import img2 from '../img/HomePage/img_accueil2.svg';
import img3 from '../img/HomePage/img_accueil3.svg';
import reservation from '../img/HomePage/reservation.svg';
import bg_reservation from '../img/HomePage/reserv_accueil.svg';
import light from '../img/HomePage/light_room.svg';
import battle from '../img/HomePage/battle_room.svg';
import creative from '../img/HomePage/creative.svg';
import img4 from '../img/HomePage/img_accueil4.svg';
import img5 from '../img/HomePage/img_accueil5.svg';
import M from "materialize-css";


class Home extends Component {
    componentDidMount() {
        let elems = document.querySelectorAll('.collapsible');
      const options = {
        onOpenStart: () => {
          console.log("Open Start");
        },
        onOpenEnd: () => {
          console.log("Open End");
        },

      };
      M.Collapsible.init(elems, options);
    }
    render() {
        return (
            <div className='row '>
                <div className='row '>
                    <div className='discover col l12 s12 m12'>
                        <a href="#sense"><input type="image"  src={discover} alt='The Sense'></input></a>
                    </div> 
                </div>

                <div className='row '>
                    <div className="sense" id="sense">
                        <div className="content col l12 s12 m12">
                            <div className="trailer col l6 s12 m12 ">
                                <img src={trailer} alt='The Sense' />
                            </div>
                        
                            <div className=' description col l6 s12 m12'>
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
                </div>
            </div>

        );
    }
}