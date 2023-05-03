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
                header : event_name,
                meta : 'Name of the Event '
            },
            {
                header : event_desc,
                meta : 'Description of the event!',
                description : 'This is what the event is all about'
            },
            {
                header : manager,
                meta : 'Address of the Manager',
                description : 'The manager who created this event and can add teams to it!',
                style : {overflowWrap : 'break-word'}
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
        return (
            <div className="text-3xl italic bg-gradient-to-r from-cyan-600 via-blue-700 to-green-600 shadow-md p-4">
                <Card.Group items={items} />
            </div>
            );
    }
    render(){
        return (
            <div>
                <script src="https://cdn.tailwindcss.com"></script>
                <Layout>
                <div className="h-screen bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 ">
                        <div className="mx-auto animate-pulse  bg-slate-200 w-1/2">
                        <div className="italics text-center text-5xl font-semibold m-4">
                            <h2>Event Show</h2>
                        </div>
                        </div>
                        
                        <div className="m-10 p-5 flex justify-center ">
                            <Grid>

                                <Grid.Column>
                                    {this.renderCards()}
                                    <br></br>
                                    <h3 className="border-solid border-4 bg-gradient-to-r from-gray-800 via-slate-600 to-blue-300 text-white rounded-xl h-20 pt-3 text-5xl text-center font-semibold ">To view all the teams participating in this Event...</h3>
                                    <Link route={`/events/${this.props.address}/teams`}>
                                        <a>
                                            <button type="button"
                                                className="text-xl flex justify-center mx-auto rounded-lg cursor-pointer animate-bounce p-2 mt-5 text-white font-bold px-6 py-3 h-12 w-48 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 hover:from-pink-500 hover:to-yellow-500">View all team!
                                            </button>
                                        </a>
                                    </Link>
                                </Grid.Column>
                            </Grid>
                        </div>

                </div>
                </Layout>

            </div>
);}}
export default EventShow;