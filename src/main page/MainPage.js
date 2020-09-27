import React, { Component } from 'react'
import Sidebar from './Sidebar'
import CommunityTimeline from './timeline/CommunityTimeline'
import CommunityMembers from './members/CommunityMembers'
import './mainpage-style.css'

class MainPage extends Component{
    render() {
        return (
            <div className="mainpage">
                <Sidebar history={this.props.history} /> {/* sidebar*/}
                <CommunityTimeline /> {/* timeline*/}
                <CommunityMembers /> {/* community-members*/}
            </div>
        )
    }
}

export default MainPage