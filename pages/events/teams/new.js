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
                <div class="h-full bg-gradient-to-r from-rose-100 to-teal-100">
                    <div class="flex justify-left text-2xl">
                        <Link route={`/events/${this.props.address}/teams`}>
                            <a class="font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 hover:from-pink-500 hover:to-yellow-500
                 text-3xl rounded-lg border-solid border-2 border-slate-500 ml-8">
                                Go Back!
                            </a>
                        </Link>
                    </div>

                    <div class="text-5xl font-semibold text-center">
                        <h1>Add your team !</h1>
                    </div>
                    <div class="m-8 p-8 rounded-xl bg-gradient-to-tr from-gray-700 via-gray-900 to-black  ">
                        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                            <Form.Field>
                                <div class="text-white text-xl italic">
                                    <label class="p-4">Name of the team</label>
                                    <Input
                                        value={this.state.name}
                                        onChange={event =>
                                            this.setState({
                                                name: event.target.value
                                            })}
                                    />
                                </div>
                            </Form.Field>
                            <Form.Field>
                                <div class="text-white text-xl italic ">
                                    <label class="p-4">Describe about you team</label>
                                    <TextArea
                                        value={this.state.desc}
                                        onChange={event =>
                                            this.setState({
                                                desc: event.target.value
                                            })}
                                    />
                                </div>

                            </Form.Field>
                            <Message error header="OOPS!" content={this.state.errorMessage} />
                            <div class="flex justify-end">
                                <button class="mx-auto rounded-lg cursor-pointer animate-bounce delay-300 p-2 mt-5 text-xl text-white font-semibold px-6 py-3 h-12 w-48 
                    bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-gray-400 via-gray-600 to-blue-800 hover:from-pink-500 hover:to-yellow-500 " loading={this.state.loading}>Add it !
                                </button>
                            </div>

                        </Form>
                    </div>
                    <div class="flex flex-auto justify-center">
                        <img class="bg-contain mx-auto m-10 p-5" src="https://res.infoq.com/articles/who-is-on-the-team/en/headerimage/who-is-on-the-team-header-1612952290708.jpg" alt="teamPic"></img>

                    </div>
                </div>
            </Layout>

        );
    };
}

export default TeamNew;