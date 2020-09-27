import React from 'react'
import { Link } from 'react-router-dom';
import { Image, Button } from 'semantic-ui-react'
import LoginForm from './LoginForm'
import FullLogoTrans from './../res/fulllogo(white)-trans.png'
import './landing-style.css'

export default function Landing(){
    return(
        <div className="landing">
            <LoginForm />
            <div className="logo">
                <Image src={FullLogoTrans} className='logo-img' fluid />
            </div>
            <h1 className="logo-subheading">It Takes One To Grow One</h1>
            <div className='signup-button-container'>
            <Link to="/signup" className='signup-link'>
                <Button inverted className='signup-button' size='massive' as='button' content="Sign Up!" />
            </Link>
            </div>
        </div>
    )
}