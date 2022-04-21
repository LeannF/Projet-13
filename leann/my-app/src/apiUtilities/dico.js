

import React, {Component} from 'react';
var dictionnaire = {};



class Dico extends Component{

  constructor(){
    super();
    this.state={
        page:[]
    }

  };

  async componentDidMount(){
    const response = await fetch('http://localhost:1337/api/roompages?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const page = await response.json()
    this.setState({page:page})
    console.log(this.state.page);
    

    {this.state.page.data && this.state.page.data.map((element,i)=>{ //je mappe la data pour recup tout de ma base-> pour ton cas jeremy

            console.log(element.attributes); // je check ce que ca me renvoie
            for (const [key,value] of Object.entries(element.attributes)){ //element.attributes est un dict donc j'ai envie de chopper tout ce qu'il retourne
               
                if (key.includes("image")){ //je verifie que je vais uniquement mettre les images dans mon dictionnaire 
                dictionnaire[key] =  value.data.attributes.url //je rajoute dans mon dictionnaire
                }
            }
    })}
    console.log(dictionnaire); 
    //donc pour les src d'images j'aurais juste a chopper dictionnaire["nomDeLimageDansTaBdd"] et ca l'affichera


  
   
    }
  
  
  render() {
   
    return (  
      <></>
    )
}
}
export default Dico;

