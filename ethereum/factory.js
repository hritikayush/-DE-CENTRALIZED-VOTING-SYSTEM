import web3 from './web3';
import EventFactory from './build/EventFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(EventFactory.interface),
    '0xA0cB8Cd3fb1134442E5C21FCD62ecAd561D23f92'
);

export default instance;