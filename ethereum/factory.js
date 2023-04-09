import web3 from './web3';
import EventFactory from './build/EventFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(EventFactory.interface),
    '0x7Caf8d355d73EFb38cEDb2F5f452708E3094c7dB'
);

export default instance;