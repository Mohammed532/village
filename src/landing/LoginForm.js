import React, { Component } from 'react'
import { Input, Button } from "semantic-ui-react"
import { withFirebase } from './../firebase/fbIndex';

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
                <Button inverted color="grey" className='login-btn' size='large' >Login</Button>
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