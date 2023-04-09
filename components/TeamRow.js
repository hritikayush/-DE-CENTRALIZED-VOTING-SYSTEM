import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import EventVoting from '../ethereum/events';

class TeamRow extends Component {
    onVote = async () => {
        const event_vote = EventVoting(this.props.address);
        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
            await event_vote.methods.vote_here(this.props.id).send({ from: accounts[0] });
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
                    <Button color="green" basic onClick={this.onVote}>
                        Vote for it!</Button>
                </Cell>
            </Row>
            
        );
    }
}
export default TeamRow;