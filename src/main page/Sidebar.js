import React from 'react'
import { Icon, Divider, Button } from 'semantic-ui-react'
import { withFirebase } from './../firebase/fbIndex'
import * as ROUTES from './../constants/routes'

function Sidebar(props){
    var signOut = e => {
        e.preventDefault();
        props.firebase.signOut();
        props.history.push(ROUTES.LANDING);
    }
    return( 
        <div className="sidebar">
            <ProfileBlip />
            <Divider />
            <UserCommunityList amount={2}/>
            <div className="signout">
                <Button circular icon="sign-out" size="large" onClick={signOut}/>
            </div>
        </div>
    )
}

function ProfileBlip(){
    return(
        <div className="profile">
            <Icon name="user" size="big" />
        </div>
    )
}

function UserCommunityList({amount}){
    let communities = []
    for (let i = 0; i < amount; i++) {
        communities.push(
            <div key={i} className={`com-list com-item${i}`}>
            </div>
        )
    }
    return communities;
}

export default withFirebase(Sidebar)