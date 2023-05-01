import React,{Component} from 'react';
import {Form, Button, Message, Input, TextArea} from 'semantic-ui-react';
import EventVoting from '../../../ethereum/events';
import web3 from '../../../ethereum/web3';
import Layout from '../../../components/Layout';

class WinnerIndex extends Component{
    static async getInitialProps(props){
        const { address } = props.query;
        const event_vote = EventVoting( address );
        const winner = await event_vote.methods.showWinner().call();
        return {winner,address};
    }
    render(){
        //console.log(this.props.address);
        return (
            <Layout>
            <div>
                <h1>The winner in this event is : {this.props.winner}</h1>
            </div>
            </Layout>
        );
    }
}
export default WinnerIndex;