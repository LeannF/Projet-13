import { Component } from "react";

import ChoiceCreative from "../component/choicePanelCreative";

class CreativeRoom extends Component {

  // constructor(props){
  //   super(props)

  // }
  async componentDidMount() {
    //generalement utilisé pour les appels réseaux
    // const response = await fetch('http://localhost:1337/api/articles?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    // const articles = await response.json()
    // this.setState({articles:articles})
  }

  render () {


    return(

      <>  
        <ChoiceCreative />
        
      </>
    ) 
  }
}
export default CreativeRoom;
