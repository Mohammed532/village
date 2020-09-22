import React, { Component } from 'react'
import { Input } from "semantic-ui-react"

export default class LoginForm extends Component{
    render(){
        return(
            <form className="login-form">
                <Input className="login-username" icon='user' iconPosition='left' placeholder='Username' />
                <Input className="login-password" icon='lock' iconPosition='left' placeholder='Password' />
            </form>
        )
    }
}