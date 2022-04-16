import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Accueil from './component/Accueil';
import Connexion from './Component/Compte1'


class App extends Component{

  constructor(){
    super();
    this.state={
        userList:[]
    }

  };

  async componentDidMount(){
    const response = await fetch('http://localhost:1337/api/user-logins?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const userList = await response.json()
    this.setState({userList:userList})

    console.log(this.state.userList);
}
  
  
  render() {
    return (  
      <Router>
        <Routes>
          <Route exact path='/' element={<Accueil userList={this.state.userList} /> } />
          <Route exact path='/' element={<Compte1 />} />
        </Routes>
      </Router>
    );
  }
}
export default App;
