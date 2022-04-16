import { Component } from "react";
import './css/Accueil.css';
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
                <div className='discover col l12 s12 m12'>
                    <a href="#sense"><input type="image"  src={discover} alt='The Sense'></input></a>
                </div> 
                
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

                <div className='description2 col l12 s12 m12'>
                    <h2>la réalité à portée de main</h2>
                    <p>Vous rêvez de voyager, de frissoner ou tout simplement de vivre une expérience unique ? Explorez nos univers entre amis ou en famille et
                        franchissez la frontière de la réalité. Plusieurs dimensions s'offrent à vous, vous donnant accès à  de nombreuses expériences
                    </p>
                </div>

                <div className="experiences">
                    <h2>nos expériences les plus appréciées</h2>
                    <img  className='col l12 s12 m12' src={shangrila} alt='The Sense'/>
                    <div className='bottom col l12 s12 m12'>
                        <h2>shangri-la : la cité perdue de Z</h2>
                        <p>Shangri-La la cité mythique, symbole de paix, de prospérité et de magnificience. Personne n'a apparemment pu se rendre en ce lieu depuis des décennies ou prouver
                            son existence, du moins depuis votre découverte ! Aventurez-vous au plus profond des légendes, entrez dans la cité de Z avec votre équipe et explorez les lieux
                            à la recherce de Percy Fawcett.
                        </p>

                        <div className="experiences-bottom">
                            <div className='col l10 s12 m8 '>
                                <a href=""><input type="image"  src={reserve} alt='The Sense'></input></a>
                            </div>
                            <div className='text-right col l2 s12 m4'>
                                <a href="" >DÉCOUVREZ LA LIGHT ROOM →</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='more col l12 s12 m12'>
                        <h2>Vous en voulez toujours plus ?</h2>
                        <div> 
                            <img className='col l4 s4 m4' src={img1} alt='The Sense'/>
                            <img className='col l4 s4 m4' src={img2} alt='The Sense'/>
                            <img className='col l4 s4 m4' src={img3} alt='The Sense'/>
                        </div>

                    <div className='bottom col l12 s12 m12'>
                        <h2>shangri-la : la cité perdue de Z</h2>
                        <p>Shangri-La la cité mythique, symbole de paix, de prospérité et de magnificience. Personne n'a apparemment pu se rendre en ce lieu depuis des décennies ou prouver
                            son existence, du moins depuis votre découverte ! Aventurez-vous au plus profond des légendes, entrez dans la cité de Z avec votre équipe et explorez les lieux
                            à la recherce de Percy Fawcett.
                        </p>
                        <div className="more-bottom col l12 s12 m12 ">
                            <div className='col l9 s12 m8'>
                                <a href=""><input type="image" src={reserve} alt='The Sense'></input></a>
                            </div>
                            <div className='link col l3 s12 m4'>
                                <a href="">DÉCOUVREZ LA CREATIVE ROOM →</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col l12 s12 m12">
                    <div className="reservation l12 s12 m12" >
                        <img  className='col l12 s12 m12' src={bg_reservation} alt='The Sense'/>
                        <div className='title col l12 s12 m12'>
                            <img  src={reservation} alt='The Sense'/>
                        </div>
                        <div className='info col l12 s12 m12'>
                            <p className='col l12 s12 m12'>n'attendez plus, réservez</p>
                            <p className='col l12 s12 m12' id="p2">nos tarifs</p>
                            <p className='col l12 s12 m12' id="p3">Voir les tarifs pour</p>
                            <p className='col l12 s12 m12' id="p4">(max 8 joueurs)</p>
                            <p className='col l12 s12 m12' id="p5">- 4 +</p>
                        
                            <div className='tarifs col l12 s12 m12'>

                                <div className='light col l3 s12 m3' >
                                    <img  src={light} alt='The Sense'/>
                                    <br></br>
                                    De 10H à 18H: ...€ /personne
                                    <br></br>
                                    De 18H à 21H: ...€ /personne
                                </div>
                                
                                <div className='dark col l3 s12 m3'>
                                    <img  src={battle} alt='The Sense'/>
                                    <br></br>
                                    De 10H à 18H: ...€ /personne
                                    <br></br>
                                    De 18H à 21H: ...€ /personne
                                </div>

                                <div className='battle col l3 s12 m3'>
                                    <img src={battle} alt='The Sense'/>
                                    <br></br>
                                    De 10H à 18H: ...€ /personne
                                    <br></br>
                                    De 18H à 21H: ...€ /personne
                                </div>

                                <div className='creative col l3 s12 m3'>
                                    <img  src={creative} alt='The Sense'/>
                                    <br></br>
                                    De 10H à 18H: ...€ /personne
                                    <br></br>
                                    De 18H à 21H: ...€ /personne
                                </div>
                            </div> 
                        </div>

                        <div className='horaires col l12 s12 m12'>
                            <h3>Du 15 au 20 Décembre</h3>
                            <div className="col l2 s6 m6">
                                Mardi<br></br>15 Déc.<br></br>
                                <a className="reserved waves-effect waves-light btn">10h20</a><br></br>
                                <a href="" className="dispo">23h50</a>
                            </div>

                            <div className="vl col l2 s6 m6">
                                Mercredi <br></br>16 Déc.<br></br>
                                <a className="indispo waves-effect waves-light btn">14h50</a>
                            </div>

                            <div className="vl col l2 s6 m6">
                                Jeudi <br></br>17 Déc.
                            </div>

                            <div className="vl col l2 s6 m6">
                                Vendredi <br></br>18 Déc.
                            </div>

                            <div className="vl col l2 s6 m6">
                                Samedi <br></br>19 Déc.
                            </div>

                            <div className="vl col l2 s6 m6">
                                Dimanche <br></br>20 Déc.
                            </div>

            
                        </div>
                    </div>

                    <div className="news col l12 s12 m12">
                        <h3>les news du mois</h3>
                        <div className='part1 col l6 s12 m6'>
                            <img  src={img4} alt='The Sense'/>
                            <div className="news-bottom">
                                <h3>événement : la chasse à l'oeuf</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
                                    laborum.
                                </p>
                                
                            </div>
                        </div>
                        <div className='part2 col l6 s12 m6'>
                            <img  src={img5} alt='The Sense'/>
                            <div className="news-bottom">
                                <h3>un nouvel équipement arrive !</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
                                    laborum.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='carousel col l12 s12 m12'>
                        <h3>qu'est ce qui vous retient ?</h3>
                    </div>

                    <div className='faq col l6 s12 m12'>
                        <h3>foire aux questions</h3>
                        <ul class="collapsible">
                            <li>
                                <div class="collapsible-header">
                                    Qu'est ce que The SENSE ?
                                </div>
                                <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
                            </li>

                            <li>
                                <div class="collapsible-header">
                                    Il y a t-il un âge et taille minimum pour participer à une expérience The SENSE 
                                </div>
                                <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
                            </li>

                            <li>
                                <div class="collapsible-header">
                                    Quel est le nombre maximum de participants pour jouer ?
                                </div>
                                <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
                            </li>

                            <li>
                                <div class="collapsible-header">
                                    Avez-vous une politique d'annulation et de remboursement ? Si oui, comment se déroule-t-elle ?
                                </div>
                                <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
                            </li>

                            <li>
                                <div class="collapsible-header">
                                    Est il possible de déposer mes affaires "encombrants" avant de faire une expérience ? Puis-je garder mes lunettes ?
                                </div>
                                <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
                            </li>
                        </ul>
                    </div>
                </div>             
            </div>
        );
    }
}

export default Home;