import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { withFirebase } from './firebase/fbIndex'
import * as ROUTES from './constants/routes'
import Landing from './landing/Landing'
import SignupForm from "./landing/SignupForm"
import CommunityList from './setup pages/CommunityList'
import MainPage from './main page/MainPage'
import Footer from './other/Footer'

class App extends Component  {
    state = {
        userInfo: {
            communities: []
        }
    }

    render(){    
        return(
            <Router>
                <Route exact path={ROUTES.LANDING} component={Landing}></Route>
                <Route path={ROUTES.SIGNUP} component={SignupForm}></Route>
                <Route path={ROUTES.LIST} component={CommunityList}></Route>
                <Route path={ROUTES.MAIN} component={MainPage}></Route>
                <Footer />
            </Router>
        )
    }
}

export default withFirebase(App)

           
