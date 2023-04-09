import React, {Component} from 'react';
import Layout from '../../components/Layout';
import EventVoting from '../../ethereum/events';
import {Card, Grid, Button} from 'semantic-ui-react';
import {Link} from '../../routes';
import web3 from '../../ethereum/web3';

class EventShow extends Component {
    static async getInitialProps(props){
        const event_v = EventVoting(props.query.address);
        const summary = await event_v.methods.getSummary().call();
        return{
            address : props.query.address,
            event_name : summary[0],
            event_desc :summary[1],
            teamsCount : summary[2],
            registeredvoters_Count : summary[3],
            manager : summary[4]
        };
    }

    renderCards(){
        const {
            event_name,
            event_desc,
            teamsCount,
            registeredvoters_Count,
            manager
        } = this.props;
        const items = [
            {
                header : manager,
                meta : 'Address of the Manager',
                description : 'The manager who created this event and can add teams to it!',
                style : {overflowWrap : 'break-word'}
            },
            {
                header : event_name,
                meta : 'Name of the Event '
            },
            {
                header : event_desc,
                meta : 'Description of the event!',
                description : 'This is what the event is all abbount'
            },
            {
                header : teamsCount,
                meta : 'Number of teams currently'
            },
            {
                header : registeredvoters_Count,
                meta : 'Number of registered Voters!',
                description : 'This is the number of people who have voteed in this event so far!'
            }


        ];
        return <Card.Group items = {items}/>;
    }
    render(){
        return (
            <Layout>
                <h2>Event Show</h2>
                <Grid>

                    <Grid.Column>
                        {this.renderCards()}
                        <br></br>
                        <h3>To view all the teams participating in this Event...</h3>
                        <Link route = {`/events/${this.props.address}/teams`}>
                            <a>
                                <Button primary>View all team!</Button>
                            </a>
                            </Link>
                    </Grid.Column>
                </Grid>
            </Layout>
        );
    }
}
export default EventShow;