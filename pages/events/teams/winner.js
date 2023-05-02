import React, { Component } from "react";
import { Form, Button, Message, Input, TextArea } from "semantic-ui-react";
import EventVoting from "../../../ethereum/events";
import web3 from "../../../ethereum/web3";
import Layout from "../../../components/Layout";

class WinnerIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    const event_vote = EventVoting(address);
    const winner = await event_vote.methods.showWinner().call();
    return { winner, address };
  }

  render() {
    //console.log(this.props.address);
    return (
      <Layout>
        <div class=" h-screen text-white bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 flex justify-center">
          
            <div class="m-auto text-center text-6xl">
              <h1 class=" animate-bounce text-cyan-300">
                The winner of this event is :{" "}
              </h1>
              <br></br>
              <p class="animate-pulse text-8xl">{this.props.winner}</p>
            </div>
          </div>
        
      </Layout>
    );
  }
}

export default WinnerIndex;
