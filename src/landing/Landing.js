import React from 'react'
import { Link } from 'react-router-dom';
import { Image, Button } from 'semantic-ui-react'
import LoginForm from './LoginForm'
import FullLogoTrans from './../res/fulllogo-trans.png'
import './landing-style.css'

export default function Landing(){
    return(
        <div className="landing">
            <LoginForm />
            <div className="logo">
                <Image src={FullLogoTrans} fluid />
                <h1 className="logo-subheading">Connect with your community</h1>
            </div>
            <Button basic className='' color='blue' size='huge' as='button'>
                <Link to="/signup">Sign Up!</Link>
            </Button>
        </div>
    )
}