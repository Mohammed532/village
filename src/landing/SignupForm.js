import React, { Component } from 'react'
import { Form, Button, Icon } from 'semantic-ui-react'
import { withFirebase, NewUserHandler } from './../firebase/fbIndex';
import './landing-style.css'

class SignupForm extends Component{
    constructor(props){
        super(props)
        this.firebase = props.firebase
        this.state = {
            disableAddress: false,
            invalidPassword: false,
            userInfo:{
                firstName: '',
                lastName: '',
                email:'',
                password: '',
                confirmPassword: '',
            },
            address:{
                addressLine1: '',
                addressLine2: '',
                city: '',
                state: '',
                country: ''
            }
        }  
    }

    allowAddress = e => {
        e.preventDefault();

        if(e.target.id === 'yes'){
            this.setState({disableAddress: false});
        }else if(e.target.id === 'no'){
            this.setState({disableAddress: true});
        }
    }

    onUserChange = e => {
        e.preventDefault();
        let userInfo = {...this.state.userInfo, [e.target.id]: e.target.value}
        this.setState({
            userInfo: userInfo
        }); 
        
        if(e.target.id === "confirmPassword" || e.target.id === "password"){
            if(userInfo.password.localeCompare(userInfo.confirmPassword)){
                this.setState({invalidPassword: true});
            }else{
                this.setState({invalidPassword: false}); 
            }
        }
    }

    onAddressChange = e => {
        e.preventDefault();
        if(!this.state.disableAddress){
            let addressInfo = {...this.state.address, [e.target.id]: e.target.value}
            this.setState({
                address: addressInfo
            });
        }
    }

    onSignupSubmit = e => {
        e.preventDefault();
        let {disableAddress, userInfo, address} = this.state;

        if(userInfo.password.localeCompare(userInfo.confirmPassword)){
            this.setState({invalidPassword: true});
            console.log(userInfo.password, userInfo.confirmPassword);
        }else{
            this.setState({invalidPassword: false});
            
            if(disableAddress){
                var fullUserInfo = {
                    ...userInfo
                }
            }else{
                var fullUserInfo = {
                    ...userInfo,
                    ...address
                }
            }

            // this.firebase.signUpWithEmail(fullUserInfo);
            NewUserHandler(this.firebase, fullUserInfo);
        }


    }

    render(){
        return(
            <div className="signup">
                <h1>Lets get you set up with Village</h1>
                <Form className="signup-form" onSubmit={this.onSignupSubmit}>
                    <h2 className='signup-form-header'>Account Setup</h2>
                    <p>Everything here is required for you to create an account</p>
                    <Form.Group widths='equal'>
                        <Form.Input 
                          fluid 
                          id='firstName' 
                          label="First Name" 
                          placeholder="First Name"
                          onChange={this.onUserChange} />
                        <Form.Input 
                          fluid
                          id='lastName'
                          label="Last Name"
                          placeholder="Last Name"
                          onChange={this.onUserChange} />
                    </Form.Group>
                    <Form.Input
                      id='email'
                      label="Email" 
                      placeholder="example@email.com" 
                      type="email"
                      onChange={this.onUserChange} />
                    <Form.Input
                      id='password' 
                      label="Password" 
                      type="password" 
                      error={this.state.invalidPassword}
                      onChange={this.onUserChange} />
                    <Form.Input 
                      id='confirmPassword'
                      label="Confirm Password" 
                      type="password" 
                      error={this.state.invalidPassword}
                      onChange={this.onUserChange} />

                    <h2 className='signup-form-header'>Address Details</h2>
                    <p>This form isn't required, but it helps with choosing the right community for you! Are you comfortable with providing this information?</p>
                    <div className='address-btn'>
                        <Button positive id='yes' onClick={this.allowAddress}>Yes</Button> 
                        <Button negative id='no' onClick={this.allowAddress}>No</Button>
                    </div>
                    
                    <Form.Input
                      id='addressLine1'
                      label="Line 1" 
                      placeholder="Address Line 1" 
                      autoComplete="street-address" 
                      disabled={this.state.disableAddress}
                      onChange={this.onAddressChange} />
                    <Form.Input
                      id='addressLine2'
                      label="Line 2"
                      placeholder="Address Line 2"
                      autoComplete="street-address"
                      disabled={this.state.disableAddress}
                      onChange={this.onAddressChange} />
                    <Form.Group widths="equal">
                        <Form.Input 
                          id='city'
                          label="City"
                          placeholder="City"
                          autoComplete="address-level2"
                          width={6}
                          disabled={this.state.disableAddress}
                          onChange={this.onAddressChange} />
                        <Form.Input 
                          id='state'
                          label="State"
                          placeholder="State"
                          autoComplete="address-level1"
                          width={10}
                          disabled={this.state.disableAddress}
                          onChange={this.onAddressChange} />
                    </Form.Group>
                    <Form.Input label="Country" placeholder="Country" autoComplete="country-name" disabled={this.state.disableAddress} />
                    <div className="signup-btns">
                        <Button secondary float='left' type="button">Back</Button>
                        <Button primary floated='right' type="submit">Continue<Icon name='right arrow'/></Button>
                    </div>

                </Form>
            </div>
        )
    }
}

export default withFirebase(SignupForm)