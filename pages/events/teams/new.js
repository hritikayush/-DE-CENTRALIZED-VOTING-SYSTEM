import React,{Component} from 'react';
import {Form, Button, Message, Input, TextArea} from 'semantic-ui-react';
import EventVoting from '../../../ethereum/events';
import web3 from '../../../ethereum/web3';
import {Link, Router} from '../../../routes';
import Layout from '../../../components/Layout';

class TeamNew extends Component{
    state = {
        name : '',
        desc : '',
        loading : false,
        errorMessage : '',
    };

    static async getInitialProps(props){
        const {address} =props.query;   //takes from URL
        return {address};
    }

    onSubmit = async event => {
        event.preventDefault();

        const event_vote = EventVoting(this.props.address);
        const { name, desc} = this.state;
        this.setState({loading : true ,errorMessage : ''})
        try{
            const accounts = await web3.eth.getAccounts();
            await event_vote.methods.addTeam(
                name,
                desc
            ).send({ from : accounts[0]})
            Router.pushRoute(`/events/${this.props.address}/teams`)
        }
        catch(err){
            this.setState({errorMessage : err.message,});
        }
        this.setState ({loading : false});
    };

    render(){
        return (
            <Layout>
            <Link route = {`/events/${this.props.address}/teams`}>
                <a>
                Go Back!
                </a>
            </Link>
            <h1><center>Add your team !</center></h1>
                <Form onSubmit={this.onSubmit} error= {!!this.state.errorMessage}>
                <Form.Field>
                    <label>Name of the team</label>
                    <Input 
                        value = {this.state.name}
                        onChange = {event =>
                            this.setState({
                                name : event.target.value
                            })}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Describe about you team</label>
                    <TextArea 
                        value = {this.state.desc}
                        onChange = {event =>
                            this.setState({
                                desc : event.target.value
                            })}
                    />
                </Form.Field>
                <Message error header="OOPS!" content = {this.state.errorMessage} />
                <Button primary loading = {this.state.loading} floated="right">Add it !</Button>
                </Form>
            </Layout>
        );
    };
}

export default TeamNew;