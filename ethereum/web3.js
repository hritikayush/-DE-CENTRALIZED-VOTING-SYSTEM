
import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // We are in the browser and Metamask is running.
    web3 = new Web3(window.web3.currentProvider);
} 
else {
    // We are on the server or the user doesn't have Metamask.
    const provider = new Web3.providers.HttpProvider(
    'https://sepolia.infura.io/v3/1c5c58d53c4344efa05c7d36b469bb82'
);
    web3 = new Web3(provider);
}

export default web3;
