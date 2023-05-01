import React, { Component } from 'react';
import Layout from '../../components/Layout';
import {Form, Button, Input,TextArea, Message} from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import {Link, Router} from '../../routes';       //Link helps to navigate around


class EventNew extends Component{
    state = {
        event_name : '' ,
        event_desc : '' ,
        errorMessage : '',
        loading : false
    };
    onSubmit = async (event) =>{
        event.preventDefault();
        this.setState({loading : true, errorMessage : ''});
        try{
        const accounts = await web3.eth.getAccounts();
        await factory.methods.createEvent(this.state.event_name,this.state.event_desc)
        .send({
            from : accounts[0]
        });
        Router.pushRoute('/');
    }
        catch(err){
            this.setState({errorMessage : err.message});
        }
        this.setState({loading : false});
    };

    render(){
        return(
            <Layout>
                <h3>Organize an Event!</h3>
                <Form onSubmit={this.onSubmit} error={this.state.errorMessage}>
                    <Form.Field>
                    <lebel>Enter the name of the event !!</lebel>
                    <Input 
                        value = {this.state.event_desc}
                        onChange = {event => 
                            this.setState({event_desc : event.target.value})}
                    />
                    <lebel>Mention the domain of your event and brief about your event !!</lebel>
                    <TextArea 
                        value = {this.state.event_name}
                        onChange = {event => 
                            this.setState({event_name : event.target.value})}
                    />
                    </Form.Field>
                    <Message error header="OOPS !!" content= {this.state.errorMessage}/>
                    <Button loading = {this.state.loading}
                        primary floated = "right">Create !</Button>
                </Form>
            </Layout>
        );
    };
}

export default EventNew;