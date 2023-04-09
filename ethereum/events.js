import web3 from './web3';
import EventVoting from './build/EventVoting.json';

const event = (address) => {
    return new web3.eth.Contract(JSON.parse(EventVoting.interface), address);
};
export default event;