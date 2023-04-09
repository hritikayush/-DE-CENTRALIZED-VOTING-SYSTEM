import React, { Component } from "react";
import factory from '../ethereum/factory';
import {Card} from 'semantic-ui-react';
import {Button} from 'semantic-ui-react';
import Layout from '../components/Layout';
import {Link} from '../routes';

class EventIndex extends Component {
    static async getInitialProps(){
        const events = await factory.methods.getDeployedEvents().call();
        return {events};
    }

    renderEvents () {
        const items = this.props.events.map(address =>{
            return{
                header : address ,
                description : (
                <Link route = {`/events/${address}`}>
                    <a>View this Event</a>
                </Link>),
                fluid : true,
            };
        });
        return <Card.Group items = {items}/>
    } 
    render() {
        return <Layout><div>
        <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css">
        </link>
        <h2>OnGoing Events !</h2>
        {this.renderEvents()}
        <Link route = "/events/new">
            <a>
            <Button floated="right"
                content = "Create an Event !"
                icon = "add circle"
                primary
            />
            </a>
        </Link>
        </div>
        </Layout>
    }
}

export default EventIndex;