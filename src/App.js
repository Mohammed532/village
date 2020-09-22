import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './landing/Landing'

export default class App extends Component  {
    render(){
        return(
            <Router>
                <Route path="/"><Landing /></Route>
            </Router>
        )
    }
}

           
