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
        loading : "false"
    };
    onSubmit = async (event) =>{
        event.preventDefault();
        this.setState({loading : "true", errorMessage : ''});
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
        this.setState({loading : "false"});
    };render() {
        return (
            <Layout>
                <div className="h-screen bg-gradient-to-r from-rose-100 to-teal-100">
                <div className="animate-bounce flex justify-center h-6 m-20 ">
                    <h3 className="font-semibold text-5xl m-10 pu-5">Create an Event!</h3>
                </div>

                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <div className="text-white p-20 m-40 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-center md:text-left space-y-4 text-lg font-medium">
                            <label>Enter the domain in which you want to organize an event !!</label>
                            <Input
                                value={this.state.event_desc}
                                onChange={event =>
                                    this.setState({ event_desc: event.target.value })}
                            />
                            <label>Describe about your organizing event !!</label>
                            <TextArea
                                value={this.state.event_name}
                                onChange={event =>
                                    this.setState({ event_name: event.target.value })}
                            />
                        </div>
                    </Form.Field>

                    <Message error header="OOPS !!" content={this.state.errorMessage} />
                    <div className="flex justify-center">
                        <button className="animate-pulse rounded-lg cursor-pointer mb-8 p-2 mt-5 text-center bg-gradient-to-r from-gray-700 via-gray-900 to-black hover:from-pink-500 hover:to-yellow-500 text-white font-semibold px-6 py-3 h-12 w-48 "
                        loading={this.state.loading}>Create !</button>
                    </div>
                </Form>
                </div>
            </Layout>
        );
    };
}

export default EventNew;