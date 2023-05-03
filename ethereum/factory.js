import web3 from './web3';
import EventFactory from './build/EventFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(EventFactory.interface),
    '0x464D4Af37343fDDeC427cF29478b8A9dA1BC2C3d'
);

export default instance;