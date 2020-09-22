import React, { Component } from 'react'
import { Input, Button } from "semantic-ui-react"

export default class LoginForm extends Component{
    render(){
        return(
            <form className="login-form">
                <Button primary className='login-btn' size='large'>Login</Button>
                <Input 
                  className="login-username" 
                  icon='user' 
                  iconPosition='left' 
                  placeholder='Username' />
                <Input 
                  className="login-password"
                  type='password' 
                  icon='lock'
                  iconPosition='left' 
                  placeholder='Password' />
            </form>
        )
    }
}