import React, { Component } from "react";
import { Form, Button, Message, Input, TextArea } from "semantic-ui-react";
import EventVoting from "../../../ethereum/events";
import web3 from "../../../ethereum/web3";
import confetti from "https://cdn.skypack.dev/canvas-confetti@1";

import Layout from "../../../components/Layout";

class WinnerIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
   
    const event_vote = EventVoting(address);
    const winner = await event_vote.methods.showWinner().call();
    return { winner, address };
  }

  componentDidMount(){
    confetti({
      particleCount: 1000,
      spread: 500,
      startVelocity:100,
             });
  }
  render() {
    //console.log(this.props.address);
    return (
      <Layout>
        <div className=" h-screen text-white bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 flex justify-center">
          
            <div className="m-auto text-center text-6xl">
              <h1 className=" animate-bounce text-cyan-300">
                The winner of this event is :{" "}
              </h1>
              <br></br>
              <p className="animate-pulse text-8xl">{this.props.winner}</p>
            </div>
          </div>
        
      </Layout>
    );
  }
}

export default WinnerIndex;
