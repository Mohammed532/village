import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { Icon, Button } from 'semantic-ui-react'
import * as ROUTES from './../constants/routes'
import { withFirebase } from './../firebase/fbIndex'
import './setup-style.css'


class CommunityList extends Component{
    constructor(props){
        super(props);
        this.firebase = this.props.firebase;

        this.state = {
            communities: [
                {
                    name: "Brown Town",
                    description: "A small town in Bowie, welcome to all!",
                    members: 11,
                    center: {
                        address1: "7543 Cozy Ln",
                        address2: "",
                        city: "Bowie",
                        state: "MD",
                        country: "United States"
                    }
                },
                {
                    name: "The Burrow",
                    description: "Welcome to The Burrow! We have cake ;)",
                    members: 23,
                    center: {
                        address1: "7543 Cozy Ln",
                        address2: "",
                        city: "Bowie",
                        state: "MD",
                        country: "United States"
                    } 
                }
            ],
            selectedCommunities: [],
        }
    }

    getCommunitites = () => {
        let display = [];
        if(this.state.communities.length){
            this.state.communities.map((val, index) =>{
                display[index] = (
                    <div key={index} id={index} className='listed-community-container' onClick={this.select}>
                        <div className='listed-community-header'>
                            <h2>{val.name}</h2>
                            <p>{val.description}</p>
                        </div>
                        <div className='listed-community-body'>
                            <Icon name="group" size='large'/><p>{val.members} people in this community</p>
                        </div>   
                    </div>
                );
            })
        }else{
            display = (<p>Wow, looks like there's no communities in your area!</p>)
        }
        
        return display;
    }

    select = (e) =>{
        e.preventDefault();

        if(!e.currentTarget.classList.contains("selected")){
            e.currentTarget.classList.add("selected");
        }else{
            e.currentTarget.classList.remove("selected");
        }
    }

    render(){
        return(
            <div className="community-list">
                <h1 className='list-header'>Now, let's help you choose a community!</h1>
                <p>Just click on a community you would like to join</p>
                {this.getCommunitites()}
                <Link to={ROUTES.MAIN}><Button color='green' floated="right" size="large">Continue</Button></Link>
            </div>
        )
    }
}

export default withFirebase(CommunityList)