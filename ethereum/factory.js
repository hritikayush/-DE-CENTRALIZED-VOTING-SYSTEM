import web3 from './web3';
import EventFactory from './build/EventFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(EventFactory.interface),
    '0xb158E23b496Ed74Ea7d059F88C94ce0069b9Ea9e'
);

export default instance;