import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import EventVoting from '../ethereum/events';

class TeamRow extends Component {
    onVote = async () => {
        const event_vote = EventVoting(this.props.address);
        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
            await event_vote.methods.voteHere(this.props.id).send({ from: accounts[0] });
        } else {
            console.error("No accounts found!");
        }
    };
    render() {
        const { Row, Cell } = Table;
        const { id, team, registeredVotesCount } = this.props;
        return (
            <Row>
                <Cell>{id}</Cell>
                <Cell>{team.name}</Cell>
                <Cell>{team.description}</Cell>
                <Cell>{team.votesCount}</Cell>
                <Cell>
                    <button className="text-3xl text-center font-semibold place-content-center italic pu-5 border-2 rounded-md border-zinc-200 shadow-md text-black Pastel bg-gradient-to-tr from-green-400 to-cyan-300  hover:from-green-500 hover:to-cyan-500 hover:text-black" onClick={this.onVote}>
                        Vote for it!</button>
                </Cell>
            </Row>
            
        );
    }
}
export default TeamRow;