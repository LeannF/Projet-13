import { Component } from "react"
import { userData, Cookies } from '../apiUtilities/dataRetriever';
import logov from '../img/new/logo_vert.svg';
import logon from '../img/new/logo_noir.svg';


class Popup extends Component {

  constructor(props){
    super(props)
  }

  handleSubmit = (event) => { 


    let writtenEmail = event.target[0].value
    let writtenPass = event.target[1].value
    {this.props.userList.data && this.props.userList.data.map((user,i)=>{
      if (user.attributes.email === writtenEmail && user.attributes.password == writtenPass){
        userData.User.username = user.attributes.name
        userData.User.id = user.id
        userData.Status = "connected"
        Cookies.updateData()
        this.connectUser(writtenEmail, writtenPass)
      }
    })}

  }
  connectUser = (email, password) => {

    userData.User.email = email
    userData.User.password = password
    
    Cookies.updateData()
    console.log("vous etes connectés" + userData.User.username);
    window.location.reload()

  }
  render() {
      

    if (userData.Status == "disconnected")
    {return (
        
      <>   
        <form className="compte" onSubmit={this.handleSubmit} >
          <h2>Bonjour, {userData.User.username}</h2>

          <div className="row col s12 m12 l12">
            <div className="row col s12 m12 l4" >
              <label for="id" >
                <strong>Ma réservation</strong>
              </label>
            </div>
            <div className="row col s12 m12 l8" >
              <p>Aucune réservation en cours</p>             
            </div>

            <div className="row col s12 m12 l4">
              <label for="mdp" >
                <strong>Mes points</strong>
              </label>
            </div>

            <div className="row col s12 m12 l8">
              <p>Plus qu’une expérience avant d’obtenir une réduction de 50%</p>  
            </div>

            <div className="logo col s12 m6 l6 offset-l4">

            <div className='col s2 m2 l2'>
              <img src={logov} alt='The Sense' width={50} height={50}></img>
            </div>
            <div className='col s2 m2 l2'>
              <img src={logov} alt='The Sense' width={50} height={50}></img>
            </div>
            <div className='col s2 m2 l2'>
              <img src={logov} alt='The Sense' width={50} height={50}></img>
            </div>
            <div className='col s2 m2 l2'>
              <img src={logov} alt='The Sense' width={50} height={50}></img>
            </div>
            <div className='col s2 m2 l2'>
              <img src={logov} alt='The Sense' width={50} height={50} ></img>
            </div>
            </div>

            <div className="logo2 col s12 m6 l6 offset-l4 ">
              <div className='col s2 m2 l2'>
                <img src={logon} alt='The Sense' width={50} height={50}></img>
              </div>
              <div className='col s2 m2 l2'>
                <img src={logon} alt='The Sense' width={50} height={50}></img>
              </div>
              <div className='col s2 m2 l2'>
                <img src={logon} alt='The Sense' width={50} height={50}></img>
              </div>
              <div className='col s2 m2 l2'>
                <img src={logon} alt='The Sense' width={50} height={50}></img>
              </div>
              <div className='col s2 m2 l2'>
                <img src={logon} alt='The Sense' width={50} height={50} ></img>
              </div>
            </div>
          </div>
          <div className="bottom row col s12 m12 l12">
            <a href="" className="col s12 m12 l9">Paramètres du compte</a>
            <p className=" right col s12 m12 l3">Déconnexion</p>
          </div>
        </form>
      </>
      
      
    )}
    else{
      return(
        <>    
          <form className="connexion" onSubmit={this.handleSubmit} >
            <h2>connexion</h2>
            <div className="row col s12 m12 l12">

              <div className="row col s12 m12 l4" >
                <label for="id" >
                  <strong>Identifiant</strong>
                </label>
              </div>
              <div className="row col s12 m12 l8" >
                <input  type="text" placeholder="Votre email" name="id" required />
              </div>

              <div className="row col s12 m12 l4">
                <label for="mdp" >
                  <strong>Mot de passe</strong>
                </label>
              </div>

              <div className="row col s12 m12 l8">
                <input  type="password" placeholder="Votre mot de passe" name="mdp" required />
              </div>
            </div>
            <div className="row col s12 m12 l12">
              <a href="" className="col s12 m12 l9">Créer un compte</a>
              <button type="submit" className="btn right col s12 m12 l3">connexion</button>
            </div>
        </form>

        </>
      )
    }
  }
}

export default Popup;