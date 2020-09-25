import React, { Component } from 'react'
import { Form, Button, Icon } from 'semantic-ui-react'
import './landing-style.css'

class SignupForm extends Component{
    state = {
        disableAddress: false,
    }

    allowAddress = (e) => {
        e.preventDefault();

        if(e.target.id === 'yes'){
            this.setState({disableAddress: false});
        }else if(e.target.id === 'no'){
            this.setState({disableAddress: true});
        }
    }

    render(){
        return(
            <div className="signup">
                <h1>Lets get you set up with Village</h1>
                <Form className="signup-form">
                    <h2 className='signup-form-header'>Account Setup</h2>
                    <p>Everything here is required for you to create an account</p>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label="First Name" placeholder="First Name" />
                        <Form.Input fluid label="Last Name" placeholder="Last Name" />
                    </Form.Group>
                    <Form.Input label="Email" placeholder="example@email.com" type="email" />
                    <Form.Input label="Password" type="password" />
                    <Form.Input label="Confirm Password" type="password" />

                    <h2 className='signup-form-header'>Address Details</h2>
                    <p>This form isn't required, but it helps with choosing the right community for you! Are you comfortable with providing this information?</p>
                    <div className='address-btn'>
                        <Button positive id='yes' onClick={this.allowAddress}>Yes</Button> 
                        <Button negative id='no' onClick={this.allowAddress}>No</Button>
                    </div>
                    
                    <Form.Input label="Line 1" placeholder="Address Line 1" autoComplete="street-address" disabled={this.state.disableAddress} />
                    <Form.Input label="Line 2" placeholder="Address Line 2" autoComplete="street-address" disabled={this.state.disableAddress} />
                    <Form.Group widths="equal">
                        <Form.Input label="City" placeholder="City" autoComplete="address-level2" width={6} disabled={this.state.disableAddress} />
                        <Form.Input label="State" placeholder="State" autoComplete="address-level1" width={10} disabled={this.state.disableAddress} />
                    </Form.Group>
                    <Form.Input label="Country" placeholder="Country" autoComplete="country-name" disabled={this.state.disableAddress} />
                    <div className="signup-btns">
                        <Button secondary float='left' type="submit">Back</Button>
                        <Button primary floated='right' type="button">Continue<Icon name='right arrow'/></Button>
                    </div>

                </Form>
            </div>
        )
    }
}

export default SignupForm