import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import Landing from './landing/Landing'

export default class App extends Component  {
    render(){
        return(
            <Router>
                <Route exact path={ROUTES.LANDING}><Landing /></Route>
                <Route path={ROUTES.SIGNUP}></Route>
            </Router>
        )
    }
}

           
