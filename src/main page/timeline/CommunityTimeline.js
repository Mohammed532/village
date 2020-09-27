import React, { Component } from 'react'
import { Button, TextArea, Form } from 'semantic-ui-react';

export default class CommunityTimeline extends Component{
    state = {
        messages:[
            {message: "Hey, need help!", user: "Lisa Barnes", type: "standard", time: "12:02pm"},
            {message: "Be aware of a suspicious van, been going around the block", user: "Carlton Bleef", type: "alert", time: "11:02pm"},
            {message: "Hey, it's Ashley's birthday!", type: "special", time: "12:00am"}
        ]
    }

    addMessage = (mssg) =>{
        let newMessages = this.state.messages;
        newMessages.unshift(mssg);
        this.setState({
            messages: newMessages
        })
    }

    expandMembers = (e) =>{
        e.preventDefault();
        
        // let timeline = document.querySelector('.timeline');
        // let members = document.querySelector('.community-members');

        // if(!timeline.classList.contains('expand')){
        //     timeline.classList.add('expand');
        //     members.classList.add('expand');
        // }else{
        //     timeline.classList.remove('expand');
        //     members.classList.remove('expand');
        // }
    }

    render(){
        return(
            <div className="timeline">
                <div className="timeline-heading">
                    <h2>The Burrow</h2>
                    <Button circular icon="group" size="large" onClick={this.expandMembers}/>
                </div>
                <InputPost addMessage={this.addMessage} />
                <CommunityPosts messages={this.state.messages}  />
            </div>
        )
    }
}

class InputPost extends Component{
    state = {
        mssg:{
            message: "",
            user: "You",
            type: "standard",
            time: "Now"
        }
    }

    post = e =>{
        e.preventDefault();
        this.props.addMessage(this.state.mssg);
        let message = this.state.mssg;
        this.setState({
            mssg: {
                ...message,
                message: ""
            }
        });

        let postField = document.querySelector(".post-field");
        postField.value = "";
    }

    postChange = e =>{
        e.preventDefault();
        let message = this.state.mssg;
        this.setState({
            mssg: {
                ...message,
                message: e.target.value
            }
        });
    }

    render(){
        return(
            <div className="input-post">
                <Form onSubmit={this.post}>
                    <Button circular size="massive" icon="chat" />
                    <TextArea className="post-field" placeholder="Make a post..." onChange={this.postChange} />
                </Form>
            </div>
        )
    }
}

function CommunityPosts({ messages }){
    let posts = [];
    messages.map((mssg, index) =>{
        switch (mssg.type) {
            case "alert":
                posts.push(
                    <div key={index} className="posts alert">
                        <div className="post-body">
                            <h4 className="post-mssg">{mssg.message}</h4>
                        </div>
                        <div className="post-info">
                            <p>{mssg.user}</p>
                            <p>{mssg.time}</p>
                        </div>
                    </div>
                )
                break;
            case "special":
                posts.push(
                    <div key={index} className="posts special">
                        <div className="post-body">
                            <h4 className="post-mssg">{mssg.message}</h4>
                        </div>
                        <div className="post-info">
                            <p>{mssg.time}</p>
                        </div>
                    </div>
                )
                break;
            case "standard":
            default:
                posts.push(
                    <div key={index} className="posts standard">
                        <div className="post-body">
                            <h4 className="post-mssg">{mssg.message}</h4>
                        </div>
                        <div className="post-info">
                            <p>{mssg.user}</p>
                            <p>{mssg.time}</p>
                        </div>
                    </div>
                )
                break;
        }
    })

    return posts;
}