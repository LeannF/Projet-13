import { Component } from "react"
import { userData, Cookies } from '../apiUtilities/dataRetriever';
import {returnMostFrequent} from '../utilities/returnMostFrequent'




class ChoiceCreative extends Component {

    constructor(props){
        super(props)
        this.state={
            userChoice:[],
            gameList:[],
            propositions:[]
        }
    }
    async componentDidMount(){
        const response = await fetch('http://localhost:1337/api/games?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
        const gameList = await response.json()
        this.setState({gameList:gameList})
        console.log(this.state.gameList);
    }

    validate = () => {

        let gameChoice = []
        let finalChoice = ""
        {this.state.gameList.data && this.state.gameList.data.map((game,i)=>{
            game.attributes.keywords.data.forEach(keyword => {
                if (this.state.userChoice.includes(keyword.attributes.name) == true){
                    gameChoice.push(game.attributes.name)
                }
            })
        })}

        finalChoice = returnMostFrequent(gameChoice)
        console.log(gameChoice);
        console.log(finalChoice);
    }   

            
        
        
         
    

    addChoice = (choice,category,next) =>{

        this.setState({
            userChoice: [
              ...this.state.userChoice,
              choice
            ],  
            
          })
          
          let buttons = document.getElementById(category)
          buttons.style.display = "none"
          if (next != ""){
            let nextButtons = document.getElementById(next)
            nextButtons.style.display = "flex"
            
          }
          
      
    }
    render() {

      return(
          <>
          <div id="type" style={{display:'flex'}}>
            <button onClick={(e) => this.addChoice("Survival", "type","place", e)}>Survival</button>
            <button onClick={(e) => this.addChoice("Battle", "type","place", e)}>Battle</button>
            <button onClick={(e) => this.addChoice("Horror", "type","place", e)}>Horror</button>
        </div>  
        <div id="place" style={{display:'none'}}>
            <button onClick={(e) => this.addChoice("Arena", "place","difficulty", e)}>Arena</button>
            <button onClick={(e) => this.addChoice("School", "place","difficulty", e)}>School</button>
            <button onClick={(e) => this.addChoice("Forest", "place","difficulty", e)}>Forest</button>
        </div>  
        <div id="difficulty" style={{display:'none'}}>
            <button onClick={(e) => this.addChoice("Flippette", "difficulty", "",e)}>Flippette</button>
            <button onClick={(e) => this.addChoice("Fou-Furieux", "difficulty","", e)}>Medium</button>
            <button onClick={(e) => this.addChoice("Medium", "difficulty", "", e)}>Fou-furieux</button>
        </div>  


        <button onClick={(e) => this.validate()}>Valider</button>
          </>
      )
    }
  }

export default ChoiceCreative