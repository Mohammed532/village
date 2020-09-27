import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Input, Button } from "semantic-ui-react"
import { withFirebase } from './../firebase/fbIndex'
import * as ROUTES from './../constants/routes'


class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            loginUsername: "",
            loginPassword: ""
        }
    }

    onLoginChange = e => {
        e.preventDefault();

        this.setState({
            [e.target.id]: e.target.value
        }) 
    }

    render(){
        return(
            <form className="login-form">
                <Link to={ROUTES.MAIN}><Button inverted color="grey" className='login-btn' size='large' >Login</Button></Link>
                <Input 
                  className="login-username"
                  id='loginUsername'
                  icon='user' 
                  iconPosition='left' 
                  placeholder='Username'
                  type='email'
                  onChange={this.onLoginChange} />
                <Input 
                  className="login-password"
                  id='loginPassword'
                  type='password' 
                  icon='lock'
                  iconPosition='left' 
                  placeholder='Password'
                  onChange={this.onLoginChange} />
            </form>
        )
    }
}

export default withFirebase(LoginForm)