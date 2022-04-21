import { Component } from "react";
import './css/Creative.css';
import discover from '../img/HomePage/btn_decouvrir.svg';
import creative from '../img/creative.svg';
import trailer from '../img/trailer_cr.svg';
import play from '../img/play_btn.svg';
import img_dark from '../img/img_dark.svg';

import M from "materialize-css";


class Creative extends Component {
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
                <div className="head">
                    <div className="row logo-room offset-l1 col l12 s12 m12">
                        <div className='col s4 m4 l4'>
                            <img src={creative} alt='The Sense' width={219} height={44.31}></img>
                        </div>
                        <div className='dark col s4 m4 l4'>
                            <img src={creative} alt='The Sense' width={177.5} height={86.76}></img>
                        </div>
                        <div className='col s4 m4 l4'>
                            <img src={creative} alt='The Sense' width={137} height={39.06}></img>
                        </div>
                        <div className="row creative col s12 m12 l12">
                            <img src={creative} alt='The Sense'></img>
                        </div>
                    </div>
                    <div className='row discover col s12 m12 l12'>
                        <a href="#creative"><input type="image"  src={discover} alt='The Sense'></input></a>
                    </div> 
                </div>
                <div className="test">
                    <div className="row cr" id="creative">
                        <div className="content col l12 s12 m12">
                            <div className="video offset-l1 col l4 s12 m12 ">
                                <img className="trailer" src={trailer} alt='The Sense' />
                                <img id="play" src={play} alt='The Sense' />                           
                            </div>
            
                            <div className=' description col l7 s12 m12'>
                                <h1> Qu'est-ce-que la <img src={creative} alt='The Sense' width= {293} height= {35.88}/> ?</h1>
                                <p>Notre catalogue ne vous suffit pas ? Vous aimeriez laisser parler votre imagination ? Grâce à la CREATIVE ROOM,
                                    concept inédit en France, la créativité est votre seule limite, créez de toute pièce l'univers dans lequel 
                                    vous voyagerez par la suite. Que ce soit dans la jungle ou en haut de montagnes enneigées, pour affronter des 
                                    démons ou enquêter sur la disparition de bébés licornes roses fluos, le choix vous appartient. Alors tester 
                                    votre imagination dans la CREATIVE ROOM et entraîner vos amis ou votre famille dans votre univers.
                                </p> 
                            </div>
                            
                        </div>
                    </div>
                    <div className='explication row col l12 s12 m12'>
                        <h2>votre expérience entre vos mains</h2>
                        <p>Suivez les étapes pour créer votre propre aventure. Nous mettons à votre disposition la possibilité de choisir tous 
                            les éléments de votre room dans le but de vous offrir l’expérience ultime qui VOUS correspond. Basculez entre chaque 
                            étape, modifier vos choix à tout moment pour que ceux-ci correspondent à vos besoins.
                        </p>
                    </div>

                    <div className='row choix col l12 s12 m12'>
                        <h3>foire aux questions</h3>

                        <ul className="dark collapsible">
                            <li className="active">
                             
                                <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
                            </li>
                        </ul>

                        <ul className="light-room collapsible ">
                            <li>
                                <div className="collapsible-header">
                                </div>
                                <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
                            </li>
                        </ul>

                        <ul className=" battle collapsible  ">
                            <li>
                                <div className="collapsible-header">
                                </div>
                                <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
                            </li>
                        </ul>

                        <ul className="random collapsible ">
                            <li>
                                <div className="collapsible-header">
                                </div>
                                <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Creative;