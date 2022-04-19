import { Component } from "react"
import { userData, Cookies } from '../apiUtilities/dataRetriever';
import { LINK } from "../apiUtilities/global";




class LoginForm extends Component {

    constructor(props){
        super(props)
    }


    handleSubmit = (event) => { 

        let writtenEmail = event.target[0].value
        let writtenPass = event.target[1].value
            {this.props.userList.data && this.props.userList.data.map((user,i)=>{
                if (user.attributes.email === writtenEmail && user.attributes.password == writtenPass){
                    userData.User.id = user.id
                    userData.User.username = user.attributes.name
                    userData.Status = "connected"
                    this.connectUser(writtenEmail, writtenPass)
                }
            })}


 
    }
    connectUser = (email, password) => {

        userData.User.email = email
        userData.User.password = password
        Cookies.updateData()
        
    }

    render() {
       

      if (userData.Status == "disconnected")

      {return (
          
          <>

       
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="email"
              name="email"
            />
            <input
              type="text"
              name="password"
            />
          </label>

          <button type="submit">Submit</button>
        </form>

        
        </>
        
        
      )}
      else{
           return(

           <p>Bienvenue {userData.User.username}</p>

           )
      }
    }
  }

export default LoginForm