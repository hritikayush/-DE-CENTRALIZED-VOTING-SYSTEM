import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import { Button, Table} from 'semantic-ui-react';
import { Link } from '../../../routes';
import EventVoting from '../../../ethereum/events';
import TeamRow from '../../../components/TeamRow';
import web3 from '../../../ethereum/web3';
import { Router } from '../../../routes';
class TeamIndex extends Component {
    state ={
        errorMessage : '',
    };
    static async getInitialProps(props) {
        const { address } = props.query;
        const event_vote = EventVoting(address);
        const teamsCount = await event_vote.methods.getTeamsCount().call();
        //const registeredVotesCount = await event_vote.methods.registerdvoters_count().call();

        const teams = await Promise.all(
            Array(parseInt(teamsCount)).fill().map((element, index) => {
                    return event_vote.methods.teams(index).call();
                })
        );

        //console.log(teams);
        return { address, teams, teamsCount };
    }

    renderTeamRow() {
        return this, this.props.teams.map((team, index) => {
            return <TeamRow
                key={index}
                id={index}
                team={team}
                address={this.props.address}
            //registeredVotesCount = {this.props.registeredVotesCount}
            />
        })
    }
    onClose = async () => {
        //const event_vote = EventVoting(this.props.address);
        const event_vote = EventVoting(this.props.address);
        const accounts = await web3.eth.getAccounts();
        await event_vote.methods.closeVoting().send({from:accounts[0]});
        Router.pushRoute(`/events/${this.props.address}/teams/winner`)
    };
    onClick = async()=>{

        Router.pushRoute(`/events/${this.props.address}/teams/winner`)
    };

    render() {
        //es25tH DESTRUCTURING :
        const { Header, Row, HeaderCell, Body } = Table;

        return (
            <Layout>
                <div class="h-screen bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 ">
                    <div class="text-5xl text-center font-bold text-slate-200 ">
                        <h1>Teams List</h1>
                    </div>

                    <div class="text-xl border-solid border-2 rounded-lg border-black p-10 bg-gradient-to-bl from-gray-700 via-gray-900 to-black">
                    <Table>
                        <Header>
                            <Row>
                                <HeaderCell>ID</HeaderCell>
                                <HeaderCell>Name</HeaderCell>
                                <HeaderCell>Description</HeaderCell>
                                <HeaderCell>Votes Count</HeaderCell>
                                <HeaderCell>Vote</HeaderCell>
                                
                            </Row>
                        </Header>
                        <Body>
                            {this.renderTeamRow()}
                        </Body>
                    </Table>
                    </div>
                    
                    <div class="font-xl flex justify-center h-20">
                        <Link route={`/events/${this.props.address}/teams/new`}>
                            <a>
                                <button class="flex justify-center mx-auto rounded-lg cursor-pointer p-2 mt-5 text-white font-semibold px-6 py-3 h-12 w-48 
                    bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 hover:from-pink-500 hover:to-yellow-500" >Add your team !</button>
                            </a>
                        </Link>
                    </div>

                    <div class="text-center font-semibold text-4xl text-slate-100">
                        <div>
                        <h2>Number of teams currently : {this.props.teamsCount} .</h2>
                        </div>
                        </div>
                    <div class="flex flex-auto justify-center text-3xl mt-48 h-20 bg-slate-400">
                        <h1 class="pt-5 mr-4">Click here to close voting : </h1>
                        <button class="my-2 p-3 rounded-lg cursor-pointer animate-pulse delay-300 text-white font-semibold
                    bg-gradient-to-r from-red-600 to-gray-700 hover:from-pink-500 hover:to-yellow-500" onClick={this.onClose}>Close Voting!</button>
                    
                        </div>
                        <div class="flex flex-auto justify-center text-3xl my-4">

                        <button class=" my-2 p-3 rounded-lg cursor-pointer animate-pulse delay-300 text-white font-semibold
                    bg-gradient-to-r from-cyan-600 to-green-700 hover:from-pink-500 hover:to-yellow-500" onClick={this.onClick}>Show Winner!</button>
                        </div>
                </div>
            </Layout>

        );
    }
}

export default TeamIndex;